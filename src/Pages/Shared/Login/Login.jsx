import React from 'react'
import { useState } from 'react';
import { Link, } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleLogin = e => {
    e.preventDefault();
  }

  return (
    <div className="w-2/4 mx-auto text-center min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">

        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <h1 className="text-3xl font-bold">Please Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />

              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              <p className='text-red-500'>{error}</p>
              <p className='text-primary'>{success}</p>


            </div>
          </form>
          <p className='my-4 text-center'>Do not have an account? Please <Link className='text-red-700 font-bold' to='/register'> Register</Link></p>
        </div>
      </div>
      {/* <button onClick={handleGoogle} className='btn btn-outline'><span><FaGoogle /></span>   Continue With Google</button> */}
    </div>
  )
}
