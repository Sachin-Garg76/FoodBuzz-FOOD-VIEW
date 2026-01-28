import { useEffect, useState } from 'react'
import { IoFastFood } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import '../../styles/NAV.css'
import axios from 'axios'

const TopNav = () => {
    const Navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            await axios.post(
                "http://localhost:3000/api/auth/logout",
                {},
                { withCredentials: true } // IMPORTANT for cookies
            );

            // cookie backend se clear ho chuki hai
            Navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    return (
        <>
            <div className="Main " >
                <div className="Logo"><IoFastFood />food-hub</div>
                <div className="Entiies" onClick={handleLogout} >LOGOUT</div>
            </div>
        </>
    )
}

export default TopNav




