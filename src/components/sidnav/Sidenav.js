import React,{useState,useEffect} from 'react'
import { Icon } from '@iconify/react';
import {Link, useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';


function Sidenav() {
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory()
    const dispatch = useDispatch()

  
    const logout = (e) => {
      e.preventDefault()
      dispatch({type : LOGOUT});
      
      history.push('/');
      
      setAdmin(null);
    }

    return (
        <div className="h-screen w-64 bg-white border-r-2 flex flex-col justify-between items-center sticky top-0">
        <a className="font-semibold text-xl mt-4">JobsWay.</a>
        
        <div className="flex items-start justify-start h-auto flex-col mx-16 mb-20">
                <Link to="/" className="nav-items flex my-2 items-center justify-start">
                    <Icon icon="akar-icons:home" className="mr-3 text-xl"/>
                    <p className="text-lg font-light">Dashboard</p>    
                </Link>
                <Link to="/companies" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="bx:bx-buildings" />
                    <p className="text-lg font-light">Companies</p>    
                </Link>
                <Link to="/users" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="clarity:users-line" />
                    <p className="text-lg font-light">Users</p>    
                </Link>
                <Link to="/settings" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="bytesize:settings" />
                    <p className="text-lg font-light">Settings</p>    
                </Link>
                <Link to="/logout" className="nav-items flex my-2 items-center justify-start" onClick={logout}>
                    <Icon className="mr-3 text-xl" icon="simple-line-icons:logout" />
                    <p className="text-lg font-light">Logout</p>    
                </Link>
        </div>

        <h4 className="mb-6">Nihal Avulan</h4>
        </div>
    )
}

export default Sidenav
