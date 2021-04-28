import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import HomePage from './pages/HomePage.jsx';
import SeConnecter from './pages/SeConnecter';
import CreerUnCompte from './pages/CreerUnCompte';
import VosChampions from './pages/VosChampions';
import Combats from './pages/Combats';
import React, { useMemo, useEffect, useState } from 'react';
import { UserContext } from './User.Context';
import { AdminContext } from './Admin.Context';
import Creation from './pages/Creation';
import AreneCombat from './pages/AreneCombat';
import Update from './pages/Update';
import Admin from './pages/Admin';
import AdminRegister from './pages/AdminRegister';
import CreationMma from './pages/CreationMma';
import UpdateMma from './pages/UpdateMma';

function App() {

  // ? Inisialiser le State à null
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  // ? Utilistion de useMemo pour la mémorisation de notre contexte pour l'user et l'admin
  const value = useMemo(()=>({user, setUser}), [user, setUser]);
  const adminValue = useMemo(()=>({admin, setAdmin}), [admin, setAdmin]);

  // ? useEffect pour la requête de notre API qui nous renvoie les données de notre User et Admin
  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user', {
          headers : {'Content-Type' : 'application/json'},
          credentials : 'include'
        })

        const content = await response.json();

        if(content._id) {
          setUser(content);
        }
      }
    )
    ()
  },[]);

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/admin', {
          headers : {'Content-Type' : 'application/json'},
          credentials : 'include'
        })

        const content = await response.json();

        if(content._id) {
          setAdmin(content);
        }
      }
    )()
  },[]);


  return (
    <>
      <Router>
          <AdminContext.Provider value={adminValue}>
          <UserContext.Provider value={value}>
            <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path='/connect' component={SeConnecter}/>
              <Route path='/register' component={CreerUnCompte}/>
              <Route path='/champions' component={VosChampions}/>
              <Route path='/combats' component={Combats}/>
              <Route path='/creation' component={Creation}/>
              <Route path='/arene/:id/:id' component={AreneCombat}/>
              <Route path='/update/:id' component={Update}/>
              <Route path='/bl-admin' component={Admin}/>
              <Route path='/admin-register' component={AdminRegister}/>
              <Route path='/create-mma' component={CreationMma}/>
              <Route path='/update-mma/:id' component={UpdateMma}/>
            </Switch>
          </UserContext.Provider>
          </AdminContext.Provider>
      </Router>
    </>
  );
}

export default App;
