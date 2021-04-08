import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './assets/scss/style.scss';
import HomePage from './pages/HomePage';

function App() {
  return (
    <main>
      <Router>
        <NavBar/>
          <Switch>
            <Route to='/' exact component={HomePage}/>
          </Switch>
      </Router>
      </main>
  );
}

export default App;
