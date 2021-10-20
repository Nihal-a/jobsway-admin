import React from 'react'


function Login() {
    return (
        <div className="flex justify-center items-center h-screen text-4xl font-semibold flex-col">
            <form action="" className="flex flex-col justify-between items-center">
            <h3 className="my-2"><span className="text-primary">Admin</span> Log In</h3>
            <input type="email" placeholder="Email" className="m-1 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary"  />
            <input type="password" placeholder="Password" className="m-1 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary"  />
            <button type="submit" className="text-white text-lg bg-primary px-7 py-1 m-3 rounded-lg font-medium" style={{color:'#fff'}}>Sign In</button>
            </form>
        </div>
    )
}

export default Login
