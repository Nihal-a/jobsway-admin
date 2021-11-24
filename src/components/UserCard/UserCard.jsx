import React, { useEffect, useState } from 'react'
import noProfile from '../../assets/images/noProfile.jpg'
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom'
import { banUser,unBanUser} from '../../actions/user';


function UserCard({unban,name,location,email,phone,imgUrl,id}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()
        if(unban){
            swal({
                title: "Are you sure to UnBan this User?",
                text: "The user will be allowed to website",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
            console.log("heiiiririr");

                    dispatch(unBanUser(id,history)).then(() => {
                        swal("User was unblocked Successfully", {
                            icon: "success",
                          });
                    })
                } else {
                  swal("Request Cancelled");
                }
              });
        }else{
            swal({
                title: "Are you sure to Ban this User?",
                text: "The user will be forbidden from login his account",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    dispatch(banUser(id,history)).then(() => {
                        swal("User was blocked Successfully", {
                            icon: "success",
                          });
                    })
                } else {
                  swal("Request Cancelled");
                }
              });
        }
    }

    return (
        <ul className="flex justify-between items-center bg-secondary h-20 px-4 py-2 rounded-md mt-2" style={{ color: '#212121' }}>
            <li><img src={imgUrl ? imgUrl : noProfile} alt="" className="h-10 w-10" /></li>
            <li>{name ? name : 'Not provided'}</li>
            <li>{location ? location : 'Not provided'}</li>
            <li>{email ? email : 'Not provided'}</li>
            <li>{phone ? phone : 'Not provided'}</li>
            <li><button onClick={handleClick} className="px-6 py-1 bg-warning rounded-lg text-sm mr-2 text-white">{unban ? 'UnBan' : 'Ban'}</button></li>
        </ul>
    )
}

export default UserCard
