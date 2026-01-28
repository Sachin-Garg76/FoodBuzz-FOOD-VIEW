import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../styles/auth.css'
import axios from 'axios'
const UserLogin = () => {
  const Navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value
    const response = await axios.post("http://localhost:3000/api/auth/user/login",{
      email,
      password
    },{withCredentials:true})
    console.log(response);
    
    Navigate("/Home")
  }
  return (
    <>
      <div className='User-Login-Container Container'>
      <h1 className="heading">User <span className="Span-Text">Login</span> ..</h1>
        <form onSubmit={handleSubmit}>
          <div className="Container-Items">
          <label className='label-tag' htmlFor='email'>Email:</label>
          <input type="text" placeholder='Enter Your Email' className='input-tag' id='email' name='email' required/>
        </div>
        <div className="Container-Items">
          <label className='label-tag' htmlFor='password'>Password:</label>
          <input type="texpasswordt" placeholder='Enter Your Password' className='input-tag' id='password' name='password' required/>
        </div>
        <div className="Container-Items">
          <button className='Submit-Button'>Submit</button>
        </div>
        </form>
        <div className="Container-Items">
          <Link to='/user/register' className='Form-Nacvigation'>Create account...</Link>
        </div>
    </div>
    </>
  )
}

export default UserLogin
