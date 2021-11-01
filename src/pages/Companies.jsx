import React from 'react'
import CompanyCard from '../components/CompanyCard/CompanyCard'
import PageHeader from '../components/PageHeader/PageHeader'
import Sidenav from '../components/sidnav/Sidenav'


function Companies() {
    return (
        <div className="flex">
            <Sidenav/>
            <div className="w-full">
                <PageHeader name="Nihal" desc="Manage Companies"/>
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Companies :</h5>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <CompanyCard/>
                        <CompanyCard/>
                        <CompanyCard/>
                        <CompanyCard/>
                        <CompanyCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
