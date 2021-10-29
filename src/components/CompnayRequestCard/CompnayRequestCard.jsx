import React from 'react'
import { Link } from 'react-router-dom'

function CompnayRequestCard() {
    return (
        <div className="w-full h-20 rounded-md flex justify-between items-center px-8 mt-2" style={{backgroundColor:'#B8E8F2'}}>
            <h3 className="text-md "><span className="text-xl mr-2 font-bold" style={{color:'#004756'}}>Google</span>Has Registered to JobsWay</h3>
            <Link className="underline">Review Company</Link>
        </div>
    )
}

export default CompnayRequestCard
