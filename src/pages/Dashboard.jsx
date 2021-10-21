import React,{useState,useEffect} from 'react'
import Sidenav from '../components/sidnav/Sidenav'
import jwtDecode from "jwt-decode";
import { useHistory,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../constants/actionTypes';


function Dashboard() {
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory()
    const dispatch = useDispatch()
    const location = useLocation()
  
    useEffect(() => {
      const token  = admin?.token;
  
      if(token){
          const decodedToken = jwtDecode(token)
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
      setAdmin(JSON.parse(localStorage.getItem('profile')));
    }, [location])
    
    const logout = (e) => {
        e.preventDefault()
        dispatch({type : LOGOUT});
        
        history.push('/');
        
        setAdmin(null);
      }
  

    return (
        <div>
            <Sidenav/>
        </div>
    )
}

export default Dashboard
