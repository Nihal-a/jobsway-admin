import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getTransaction } from '../actions/company';
import PageHeader from '../components/PageHeader/PageHeader';
import Sidenav from '../components/sidnav/Sidenav';
import TransactionCard from '../components/Transaction Card/TransactionCard';




const Transactions = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const allTransactions = useSelector(state => state.transactions)

    console.log("alll transactionsss ",allTransactions);

    useEffect(() => {
        dispatch(getTransaction(history))
    }, [])
    
    return (
        <div className="flex">
            <Sidenav/>
            <div className="w-full">
                <PageHeader name="Nihal" desc="Manage Users"/>
                <div className="mt-12 px-8 container w-full">
                    <h5 className="text-xl font-semibold text-dark mb-8">Transactions :</h5>
                    <div className="w-full h-10 items-center">
                       <ul className="flex items-center bg-dark h-10 px-4 py-2 text-white rounded-md justify-between" style={{color:'#fff'}}>
                           <li className="">Job Title</li>
                           <li className="">Company</li>
                           <li className="">Plan Name</li>
                           <li className="">Payment Method</li>
                           <li className="">Amount</li>
                       </ul>
                       <ul >
                           {
                               allTransactions.map((transaction) => (
                                    <TransactionCard amount={transaction.amount} company={transaction.companyName} gateWay={transaction.paymnentGateWay} plan={transaction.planName} job={transaction.jobTitle}/>
                               ))
                           }
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions
