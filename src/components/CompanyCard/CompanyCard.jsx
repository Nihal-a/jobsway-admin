import React from 'react'
import { Icon } from '@iconify/react'

function CompanyCard({unban}) {
    return (
        <div className="w-80 h-auto bg-secondary rounded-lg flex flex-col items-center">
            <img src="" alt="" className="w-16 h-16 rounded-lg mt-2" />
            <h5 className="text-xl font-semibold text-dark mt-1">Google</h5>
            <div className="text-sm text-secondary flex items-center">
                <Icon icon="akar-icons:location" className="text-dark"/><p className="text-dark font-light ml-1">Bengluru,India</p>
            </div>
            <div className="w-full m-2 flex justify-end">
            <button className="px-6 py-1 bg-warning rounded-lg text-sm mr-2 text-white">{unban ? 'UnBan' : 'Ban'}</button>
            </div>
        </div>
    )
}

export default CompanyCard
