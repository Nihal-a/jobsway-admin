import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader/PageHeader';
import Sidenav from '../components/sidnav/Sidenav';
import UserCard from '../components/UserCard/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../actions/user';


function Users() {

    const dispatch = useDispatch()
    const history = useHistory()
    const allUsers = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers(history))
    }, [allUsers])

    return (
        <div className="flex">
            <Sidenav/>
            <div className="w-full">
                <PageHeader name="Nihal" desc="Manage Users"/>
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Users :</h5>
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
                           {allUsers.map((user) => (
                                <UserCard name={user?.name} location={user?.location} email={user?.email} phone={user?.phone} img={user?.imgUrl} id={user._id}/>
                           ))}
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
