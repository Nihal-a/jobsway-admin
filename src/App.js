import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch, useHistory ,Redirect,useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { LOGOUT } from './constants/actionTypes';


function App() {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('admin')));

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {admin ?  <Dashboard/> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {admin ?  <Redirect to="/"/> :  <Login/> }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
