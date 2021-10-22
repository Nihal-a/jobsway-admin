import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import {Route, Switch, useHistory ,Redirect,useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { LOGOUT } from './constants/actionTypes';

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
    
    const logout = (e) => {
        e.preventDefault()
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
      </Switch>
    )
}

export default Routed
