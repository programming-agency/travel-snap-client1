import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Register() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = event => {
    event.preventDefault();

  }

  return (
    <div className="w-2/4 mx-auto  text-center min-h-screen">
      <div className="hero-content flex-col lg:flex-row">

        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleRegister}>
            <div className="card-body">
              <h1 className="text-3xl font-bold"> Register Now!!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" required className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" required className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" required className="input input-bordered" />
              </div>

              <p className='text-red-500'> {error}</p>
              <p className='text-success'> {success}</p>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
            </div>
          </form>
          <p className='my-4 text-center'>Already have an account? Please<Link className='text-red-700 font-bold' to='/login'> Login</Link></p>
        </div>
      </div>
    </div>
  )
}

