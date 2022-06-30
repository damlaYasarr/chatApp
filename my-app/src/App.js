import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Register from './components/register/Register';

function App() {
  return (<Router>

    <Switch>
      <Route exact path='/damla'> <Register /> </Route>


      <Route path="/">
        <Login />

      </Route>

    </Switch>

  </Router>);
}

export default App;
