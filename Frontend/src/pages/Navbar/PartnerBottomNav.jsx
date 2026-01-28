import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import '../../styles/NAV.css'

const PartnerBottomNav = () => {
  
  return (
    <>
      <div className="Bottom-nav-Container bg-dark">
        <div>
          <Link to='/partner/home' className='Bottom-Entiies'><IoMdHome />HOME</Link>
        </div>
        <div>
          <Link to='/create-food' className='Bottom-Entiies'><FaBookmark />Create-Food</Link>
        </div>
      </div>
    </>
  )
}

export default PartnerBottomNav


