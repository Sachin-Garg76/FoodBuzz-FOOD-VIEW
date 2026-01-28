import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/auth.css'
const PartnerLogin = () => {

  const Navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

     const response = await axios.post("http://localhost:3000/api/auth/food-partner/login",{
      email,
      password
    },{withCredentials:true})
    console.log(response);
    
    Navigate("/create-food")

  }
  return (
    <>
    <div className='Partner-Login-Container Container'>
      <h1 className="heading">Food <span className="Span-Text">Partner</span> Login..</h1>
        <form onSubmit={handleSubmit}>
          <div className="Container-Items">
          <label className='label-tag' htmlFor='email'>Email:</label>
          <input 
          id='email'
          name='email'
          type="text" 
          placeholder='Enter Your Email' 
          className='input-tag'
          required
          />
        </div>
        <div className="Container-Items">
          <label className='label-tag' htmlFor='password'>Password:</label>
          <input 
          id='password'
          name='password'
          type="password" 
          placeholder='Enter Your Password' 
          className='input-tag'
          required
          />
        </div>
        <div className="Container-Items">
          <button className='Submit-Button'>Submit</button>
        </div>
        </form>
        <div className="Container-Items">
          <Link to='/food-partner/register' className='Form-Nacvigation'>Create account...</Link>
        </div>
    </div>
    </>
  )
}

export default PartnerLogin
