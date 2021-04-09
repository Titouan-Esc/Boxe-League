import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './assets/scss/style.scss';
import HomePage from './pages/HomePage.jsx';
import SeConnecter from './pages/SeConnecter';
import CreerUnCompte from './pages/CreerUnCompte';

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/connect' component={SeConnecter}/>
            <Route path='/register' component={CreerUnCompte}/>
          </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
