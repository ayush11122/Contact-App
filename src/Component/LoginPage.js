import React from 'react'

const LoginPage = () => {
  return (
        <div className="m-20 bg-white drop-shadow-lg hover:drop-shadow-xl">
            <div className="pt-4 text-center text-xl font-medium">Login</div>
            <form className="p-20">
                <div>
                    <label className="pl-1 pr-4">Email</label>
                    <input 
                    className="border-2 rounded"  
                    type="text" 
                    placeholder="Email" 
                    />
                </div>
                <div>
                    <label className="px-1">Password</label>
                    <input 
                    className="border-2 rounded"  
                    type="password" 
                    placeholder="Password" 
                    />
                </div>
            </form>
    </div>
  )
}

export default LoginPage