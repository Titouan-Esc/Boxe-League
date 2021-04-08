import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './assets/scss/style.scss';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route to='/' exact component={HomePage}/>
          </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
