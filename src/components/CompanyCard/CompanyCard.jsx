import React from 'react'
import { Icon } from '@iconify/react'

function CompanyCard({unban,name,location,img}) {
    return (
        <div className="w-80 h-auto pt-8 bg-secondary rounded-lg flex flex-col items-center">
            <img src={img} alt="" className="w-16 h-16 rounded-lg mt-2" />
            <h5 className="text-xl font-semibold text-dark mt-1">{name}</h5>
            <div className="text-sm text-secondary flex items-center">
                <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">{location}</p>
            </div>
            <div className="w-full m-2 flex justify-end">
            <button className="px-6 py-1 bg-warning rounded-lg text-sm mr-2 text-white">{unban ? 'UnBan' : 'Ban'}</button>
            </div>
        </div>
    )
}

export default CompanyCard
