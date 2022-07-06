import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Register from './components/register/Register';
import Verify from './pages/Verify';

function App() {
  return (<Router>

    <Switch>
      <Route exact path='/damla'> <Register /> </Route>
      <Route exact path='/verify'> <Verify/></Route>

      <Route exact path="/">
        <Login />

      </Route>

    </Switch>

  </Router>);
}

export default App;
