import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { signin } from '../actions/auth'
import {useHistory,useLocation} from 'react-router-dom'


const initialState = {email:'' , password:''}

function Login() {

    const [formData, setformData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const handleChange = (e) => {
        e.preventDefault()
        setformData({...formData,[e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signin(formData,history))
    }

    useEffect(() => {
        location.state = undefined
    }, [formData])

    return (
        <div className="flex justify-center items-center h-screen text-4xl font-semibold flex-col">
            <form action="" className="flex flex-col justify-between items-center" onSubmit={handleSubmit}>
            <h3 className="my-2"><span className="text-primary">Admin</span> Log In</h3>
            {location.state !== undefined ? <p className="text-sm font-light" style={{color:'red'}}>{location.state.Err}</p> : null}
            <input required onChange={handleChange} name="email" type="email" placeholder="Email" className="m-1 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary"  />
            <input required onChange={handleChange} name="password" type="password" placeholder="Password" className="m-1 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary"  />
            <button type="submit" className="text-white text-lg bg-primary px-7 py-1 m-3 rounded-lg font-medium" style={{color:'#fff'}}>Sign In</button>
            </form>
        </div>
    )
}

export default Login
