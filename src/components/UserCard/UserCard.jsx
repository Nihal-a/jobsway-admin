import React from 'react'
import noProfile from '../../assets/images/noProfile.jpg'

function UserCard({unban,name,location,email,phone,imgUrl}) {
    return (
        <ul className="flex justify-between items-center bg-secondary h-20 px-4 py-2 rounded-md mt-2" style={{ color: '#212121' }}>
            <li><img src={imgUrl ? imgUrl : noProfile} alt="" className="h-10 w-10" /></li>
            <li>{name ? name : 'Not provided'}</li>
            <li>{location ? location : 'Not provided'}</li>
            <li>{email ? email : 'Not provided'}</li>
            <li>{phone ? phone : 'Not provided'}</li>
            <li><button className="px-6 py-1 bg-warning rounded-lg text-sm mr-2 text-white">{unban ? 'UnBan' : 'Ban'}</button></li>
        </ul>
    )
}

export default UserCard
