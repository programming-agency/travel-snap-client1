import React, { useContext } from 'react'
import { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import axios from "axios";



export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, pass }
    console.log(user)
    try {
      const data = await axios.post("http://localhost:5000/api/login", { email, pass });
      console.log(data)
      if (data.status === 200) {
        // alert(data.data.msg);
        // updateUser(data.data.user);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        setSuccess('successfully login')
        navigate("/home");
      }


    } catch (error) {
      console.log(error?.response?.data?.msg)
      // alert(error.msg);
      setError(error?.response?.data?.msg || 'something went wrong');
    }
  }


  return (

    <div className="hero min-h-screen" style={{ backgroundImage: 'url("/login.jpg")' }}>
      <div className='w-screen '>
        <div className="w-2/4 mx-auto text-center min-h-screen">
          <div className="hero-content flex-col lg:flex-row">

            <div className="card flex-shrink-0 w-full">
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <h1 className="text-3xl text-white mb-5 font-bold">Please Login</h1>
                  <div className="form-control">

                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder="Email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <input value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" name='password' placeholder="Password" className="input input-bordered" />

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
      </div>
    </div>
  )
}



