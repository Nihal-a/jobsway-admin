import React from 'react'

const TransactionCard = ({amount , company , gateWay , plan , job}) => {
    return (
        <ul className="flex justify-between items-center bg-secondary h-20 px-4 py-2 rounded-md mt-2" style={{ color: '#212121' }}>
            <li className="text-md">{company}</li>
            <li className="text-md">{job}</li>
            <li className="text-md">{plan}</li>
            <li className="text-md">{gateWay}</li>
            <li className="text-success mr-3 font-semibold text-xl">₹ {amount}</li>
        </ul>
    )
}

export default TransactionCard
