import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CompanyCard from '../components/CompanyCard/CompanyCard'
import PageHeader from '../components/PageHeader/PageHeader'
import Sidenav from '../components/sidnav/Sidenav'
import { getVerifiedCompanies } from '../actions/company'




function Companies() {

    const companies = useSelector((state) => state.company)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getVerifiedCompanies(history))
   }, [])



    return (
        <div className="flex">
            <Sidenav/>
            <div className="w-full">
                <PageHeader name="Nihal" desc="Manage Companies"/>
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Companies :</h5>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        {companies.map((company) => (
                        <CompanyCard name={company.companyName} location={company.location} img={company.logoUrl} id={company._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
