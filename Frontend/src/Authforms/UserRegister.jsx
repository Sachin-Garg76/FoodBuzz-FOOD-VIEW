import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserRegister = () => {

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fullName = e.target.fullName.value
    const email = e.target.email.value
    const password = e.target.password.value

    const response = await axios.post("http://localhost:3000/api/auth/user/register",{
      fullName,
      email,
      password
    },{withCredentials:true})
    console.log(response);
    
    Navigate("/")

  }

  return (
    <div className='User-Register-Container Container'>
      <h1 className="heading">
        User <span className="Span-Text">Register</span> ..
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="Container-Items">
          <label className='label-tag' htmlFor='fullName'>Name:</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder='Enter Your Name'
            className='input-tag'
            required
          />
        </div>

        <div className="Container-Items">
          <label className='label-tag' htmlFor='email'>Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder='Enter Your Email'
            className='input-tag'
            required
          />
        </div>

        <div className="Container-Items">
          <label className='label-tag' htmlFor='password'>Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder='Enter Your Password'
            className='input-tag'
            required
          />
        </div>

        <div className="Container-Items">
          <button type="submit" className='Submit-Button'>Submit</button>
        </div>
      </form>

      <div className="Container-Items Form-navigation">
        <span>Already Account </span>
        <Link to='/' className='Form-Nacvigation'>click here...</Link>
        <br />
        <span>Register as food-partner </span>
        <Link to='/food-partner/register' className='Form-Nacvigation'>click here...</Link>
      </div>
    </div>
  )
}

export default UserRegister
