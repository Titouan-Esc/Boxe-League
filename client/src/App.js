import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './scss/style.scss';

function App() {
  return (
    <Router>
      <main>
        <NavBar/>
        <Switch>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
