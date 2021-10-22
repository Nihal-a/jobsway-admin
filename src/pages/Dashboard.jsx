import React,{useState,useEffect} from 'react'
import Sidenav from '../components/sidnav/Sidenav'
import jwtDecode from "jwt-decode";
import { useHistory,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../constants/actionTypes';


function Dashboard() {
    
    return (
        <div>
            <Sidenav/>
        </div>
    )
}

export default Dashboard
