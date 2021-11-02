import React, { useEffect } from 'react'
import Sidenav from '../components/sidnav/Sidenav'
import PageHeader from '../components/PageHeader/PageHeader';
import CompnayRequestCard from '../components/CompnayRequestCard/CompnayRequestCard';
import { getUnVerifiedCompanies } from '../actions/company';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Dashboard() {

    const dispatch = useDispatch()
    const history = useHistory()
    const unVerifiedCompanies = useSelector((state) => state.company)

    useEffect(() => {
         dispatch(getUnVerifiedCompanies(history))
    }, [])
    
    return (
        <div className="flex">
            <Sidenav/>
            <div className="w-full">
                <PageHeader name="Nihal" desc="Welcome Back!"/>
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Company Requests :</h5>
                    {unVerifiedCompanies.map((company) => (
                        <CompnayRequestCard name={company.companyName} details={company}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
