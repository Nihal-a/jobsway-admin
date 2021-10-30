import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import {Route, Switch, useHistory ,Redirect,useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { LOGOUT } from './constants/actionTypes';
import Companies from './pages/Companies';
import VerifyCompany from './pages/VerifyCompany';
import Users from './pages/Users';
import Settings from './pages/Settings';

function Routed() {
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('admin')));
    const history = useHistory()
    const dispatch = useDispatch()
    const location = useLocation()
  
    useEffect(() => {
      const token  = admin?.token;
  
      if(token){
          const decodedToken = jwtDecode(token)
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      setAdmin(JSON.parse(localStorage.getItem('admin')));
    }, [location])
    
    const logout = () => {
        dispatch({type : LOGOUT});
        
        history.push('/');
        
        setAdmin(null);
    }

    return (
        <Switch>
        <Route exact path="/">
          {admin ?  <Dashboard/> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {admin ?  <Redirect to="/"/> :  <Login/> }
        </Route>
        <Route path="/companies">
          {!admin ?  <Redirect to="/login"/> :  <Companies/> }
        </Route>
        <Route path="/users">
          {!admin ?  <Redirect to="/login"/> :  <Users/> }
        </Route>
        <Route path="/settings">
          {!admin ?  <Redirect to="/login"/> :  <Settings/> }
        </Route>
        <Route path="/verifycompany">
          {!admin ?  <Redirect to="/login"/> :  <VerifyCompany/> }
        </Route>
      </Switch>
    )
}

export default Routed
