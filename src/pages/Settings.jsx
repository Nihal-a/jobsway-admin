import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader';
import Sidenav from '../components/sidnav/Sidenav';
import UserCard from '../components/UserCard/UserCard';
import CompanyCard from '../components/CompanyCard/CompanyCard'
import { useDispatch } from 'react-redux';


function Settings() {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getBannedCompanies(),getBannedUsers())
    // }, [])

    return (
        <div className="flex">
            <Sidenav/>
            <div className="w-full">
                <PageHeader name="Nihal" desc="Settings"/>
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Banned Companies :</h5>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <CompanyCard unban={true}/>
                    </div>
                    <h5 className="text-xl font-semibold text-dark mb-8 mt-4">Banned Users :</h5>
                    <div className="w-full h-10 items-center">
                       <ul className="flex items-center bg-dark h-10 px-4 py-2 text-white rounded-md" style={{color:'#fff'}}>
                           <li>Photo</li>
                           <li className="ml-24">Name</li>
                           <li className="ml-36">Location</li>
                           <li className="ml-36">Email</li>
                           <li className="ml-60">phone</li>
                           <li className="ml-32">Action</li>
                       </ul>
                       <ul>
                           <UserCard unban={true}/>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
