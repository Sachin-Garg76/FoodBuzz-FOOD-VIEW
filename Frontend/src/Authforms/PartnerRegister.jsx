import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/auth.css'
const PartnerRegister = () => {
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const BussinessName = e.target.BussinessName.value
    const ContactName = e.target.ContactName.value
    const email = e.target.email.value
    const MobileNo = e.target.MobileNo.value
    const password = e.target.password.value
    const Address = e.target.Address.value

    const response = await axios.post("http://localhost:3000/api/auth/food-partner/register",{
      BussinessName,
      ContactName,
      email,
      MobileNo,
      password,
      Address
    },{withCredentials:true})
    console.log(response);
    
    Navigate("/food-partner/login")

  }
  return (
    <>
      <div className='Partner-register-Container Container'>
        <h1 className="heading">Food <span className="Span-Text">Partner</span> Register..</h1>
        <form onSubmit={handleSubmit}>
          <div className="row-two">
            <div className="fields">
            <label className='label-tag' htmlFor='BussinessName'>Bussiness Name:</label>
            <input
              id='BussinessName'
              name='BussinessName'
              type="text"
              placeholder='Enter Your Name'
              className='input-tag'
              required
            />
          </div>
          <div className="fields">
            <label className='label-tag' htmlFor='ContactName'>Contact Name:</label>
            <input
              id='ContactName'
              name='ContactName'
              type="text"
              placeholder='Enter Your Name'
              className='input-tag contact-name-input'
              required
            />
          </div>
          </div>
            <div className="Container-Items">
              <label className="label-tag" htmlFor='email'>Email:</label>
              <input
                id='email'
                name='email'
                type="email"
                placeholder="Enter Your Email"
                className="input-tag"
              />
            </div>

            <div className="Container-Items">
              <label className="label-tag" htmlFor='MobileNo'>Phone No:</label>
              <input
                id='MobileNo'
                name='MobileNo'
                type="text"
                placeholder="Enter Your Phone No"
                className="input-tag"
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
            <label className='label-tag'htmlFor='Address'>Address:</label>
            <input
            id='Address'
            name='Address'
             type="text" 
             placeholder='Enter Your Address' 
             className='input-tag' 
             required
             />
          </div>

          <div className="Container-Items">
            <button className='Submit-Button'>Submit</button>
          </div>
        </form>

        <div className="Container-Items Form-navigation">
          <span className=''>Already Account </span>
          <Link to='/food-partner/login' className='Form-Nacvigation'>click here...</Link> <br />
          <span className=''>Register as User </span>
          <Link to='/user/register' className='Form-Nacvigation'>click here...</Link>
        </div>
      </div>
    </>
  )
}

export default PartnerRegister
