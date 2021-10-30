import React from 'react'

function UserCard({unban}) {
    return (
        <ul className="flex justify-between items-center bg-secondary h-20 px-4 py-2 rounded-md mt-2" style={{ color: '#212121' }}>
            <li><img src="" alt="" className="h-10 w-10" /></li>
            <li>Nihal Avulan</li>
            <li>Malappuram</li>
            <li>nihalavulan1@gmail.com</li>
            <li>9048133817</li>
            <li><button className="px-6 py-1 bg-warning rounded-lg text-sm mr-2 text-white">{unban ? 'UnBan' : 'Ban'}</button></li>
        </ul>
    )
}

export default UserCard
