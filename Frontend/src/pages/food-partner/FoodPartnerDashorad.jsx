import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import img from '../../assets/profile.jpg'
import PartnerNavbar from '../Navbar/PartnerNavbar'
import '../../styles/PartnerDashboard.css'
const FoodPartnerDashboard = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/food-partner/${id}`, { withCredentials: true })
      .then(res => {
        setProfile(res.data.foodPartner)
        setVideos(res.data.foodPartner.foodItems)
      })
      .catch(err => console.log(err))
  }, [id])
  return (
    <>
      <div className="container">
        <h1 className='heading'>Food <span className="Span-Text">Partner</span> Dashboard</h1>
        <div className="Top-Sections">
          <div id="Profile-Section">
            <img src={img} alt="img" className="Profileimg" />
          </div>
          <div id="Bussniess-Name-Section">
            <div className="Details">
              <h2 className="Delivery-Count-Heading">Bussniess  <span className="Span-Text">Name</span></h2>
              <p className="Delivery-Count-Value ">{profile?.BussinessName}</p>
            </div>
            <div className="Details">
              <h2 className="Delivery-Count-Heading"><span className="Span-Text">Our</span> Address</h2>
              <p className="Delivery-Count-Value">{profile?.Address}</p>
            </div>
          </div>


        </div>
        <div className="Middle-Sections">
          <div className="Inner-Section Details">
            <h2 className="Delivery-Count-Heading mt-2"><span className="Span-Text">Total</span> Served</h2>
            <p className="Delivery-Count-Value mb-0 mt-1 ms-3 ">{profile?.totalServed}</p>
          </div>
          <div className="Inner-Section Details">
            <h2 className=""><span className="Span-Text">Total</span> Meal</h2>
            <p className="ms-4">{profile?.totalMeals}</p>
          </div>
        </div>
        <div className="Bottom-Sections">
          <h1 className="videos-heading text-center mt-0">
            Videos
          </h1>
          <div className="Main-Div">
            {
              videos.map((v) => {
                return (
                  <div key={v._id} className="video-grid-item">
                    <div className="profile-grid-video">
                      <video
                        src={v.video}
                        controls
                        muted
                        preload="metadata"
                        className="Videos"
                      />

                    </div>
                  </div>
                )
              })

            }
          </div>
        </div>
      </div>
      <PartnerNavbar/>
    </>
  )
}

export default FoodPartnerDashboard
