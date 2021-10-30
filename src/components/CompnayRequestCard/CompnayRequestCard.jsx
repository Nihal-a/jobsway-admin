import React, { useEffect } from 'react'
import { Link,Route } from 'react-router-dom'
import VerifyCompany from '../../pages/VerifyCompany'

function CompnayRequestCard({name,details}) {

    return (
        <div className="w-full h-20 rounded-md flex justify-between items-center px-8 mt-2" style={{backgroundColor:'#B8E8F2'}}>
            <h3 className="text-md "><span className="text-xl mr-2 font-bold" style={{color:'#004756'}}>{name}</span>Has Registered to JobsWay</h3>
            <Link className="underline" to={{pathname : "/verifycompany",state:{company : details}}}>Review Company</Link>
        </div>
    )
}

export default CompnayRequestCard
