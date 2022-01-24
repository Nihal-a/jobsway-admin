import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader/PageHeader';
import Sidenav from '../components/sidnav/Sidenav';
import UserCard from '../components/UserCard/UserCard';
import CompanyCard from '../components/CompanyCard/CompanyCard'
import { useDispatch } from 'react-redux';
import { getBannedCompanies } from '../actions/company';
import { useSelector } from 'react-redux';
import { getbannedUsers } from '../actions/user';

function Settings() {

    const dispatch = useDispatch()
    const bannedCompanies = useSelector(state => state.company)
    const bannedUsers = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getBannedCompanies())
    }, [bannedCompanies])


    useEffect(() => {
        dispatch(getbannedUsers())
    }, [bannedUsers])


    console.log(bannedUsers);

    return (
        <div className="flex">
            <Sidenav/>
            <div className="w-full">
                <PageHeader name="Nihal" desc="Settings"/>
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Banned Companies :</h5>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        {bannedCompanies.map((company) => (
                            <CompanyCard unban={true} name={company.companyName} location={company.location} img={company.logoUrl} id={company._id}/>
                        ))}
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
                           {bannedUsers.map((user) => (
                                <UserCard unban={true} name={user?.name} location={user?.location} email={user?.email} phone={user?.phone} img={user?.imgUrl} id={user._id}/>
                           ))}
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
