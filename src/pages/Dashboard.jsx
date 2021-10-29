import React,{useState,useEffect} from 'react'
import Sidenav from '../components/sidnav/Sidenav'
import jwtDecode from "jwt-decode";
import { useHistory,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../constants/actionTypes';
import PageHeader from '../components/PageHeader/PageHeader';
import CompnayRequestCard from '../components/CompnayRequestCard/CompnayRequestCard';


function Dashboard() {
    
    return (
        <div className="flex">
            <Sidenav/>
            <div className="w-full">
                <PageHeader name="crossroads"/>
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Company Requests :</h5>
                    <CompnayRequestCard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
