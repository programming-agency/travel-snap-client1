import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

export default function Register() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [photo, setPhoto] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { userName, email, photo, pass }
    console.log(user)
    try {
      const data = await axios.post("http://localhost:5000/api/register", user);
      console.log(data)
      if (data.status === 200) {
        // updateUser(data.data.user);
        setSuccess('successfully Register')
        navigate("/login");
      }
    } catch (error) {
      setError("Error registering:", error);
    }
  }

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url("/4.jpg")' }}>
      <div className="md:w-2/4 w-full mx-auto  text-center min-h-screen">
        <div className="hero-content flex-col lg:flex-row">

          <div className="card flex-shrink-0 w-full  shadow-2xl ">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <h1 className="text-3xl font-bold"> Register Now!!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your User Name</span>
                  </label>
                  <input type="text" required={true} value={userName} onChange={(e) => { setUserName(e.target.value) }} name='name' placeholder="Enter your username..." className="input input-bordered" req/>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder="Enter your email..." className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" value={photo} onChange={(e) => { setPhoto(e.target.value) }} name='photo' placeholder="Enter your Photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} name='password' placeholder="Enter your password..." required className="input input-bordered" />
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
    </div>
  )
}

