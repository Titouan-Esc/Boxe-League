import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import HomePage from './pages/HomePage.jsx';
import SeConnecter from './pages/SeConnecter';
import CreerUnCompte from './pages/CreerUnCompte';
import VosChampions from './pages/VosChampions';
import Combats from './pages/Combats';
import React, { useMemo, useEffect, useState } from 'react';
import {UserContext} from './User.Context';
import Creation from './pages/Creation';
import AreneCombat from './pages/AreneCombat';
import Update from './pages/Update';

function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(()=>({user, setUser}), [user, setUser]);

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
    )()
  },[]);



  return (
    <>
      <Router>
        <UserContext.Provider value={value}>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/connect' component={SeConnecter}/>
            <Route path='/register' component={CreerUnCompte}/>
            <Route path='/champions' component={VosChampions}/>
            <Route path='/combats' component={Combats}/>
            <Route path='/creation' component={Creation}/>
            <Route path='/arene' component={AreneCombat}/>
            <Route path='/update/:id' component={Update}/>
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
