import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import '../../styles/NAV.css'

const Navbar = () => {
  
  return (
    <>
      <div className="Bottom-nav-Container">
        <div>
          <Link to='/Home' className='Bottom-Entiies'><IoMdHome />HOME</Link>
        </div>
        <div>
          <Link to='/save' className='Bottom-Entiies'><FaBookmark />SAVED</Link>
        </div>
        <div>
          <Link to='/like-reel' className='Bottom-Entiies'><IoIosHeart />Liked</Link>
        </div>
        
        
      </div>
    </>
  )
}

export default Navbar


