import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
import TopNav from '../Navbar/TopNav'
import PartnerBottomNav from '../Navbar/PartnerBottomNav';
const FoodPartnerHome = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const videoRefs = useRef(new Map());
    const observerRef = useRef(null);
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (!(video instanceof HTMLVideoElement)) return;

                    if (entry.isIntersecting) {
                        video.play().catch(() => { });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.6 }
        );

        return () => observerRef.current.disconnect();
    }, []);
    useEffect(() => {
    axios.get(`http://localhost:3000/api/food-partner/${id}`, { withCredentials: true })
      .then(res => {
        setProfile(res.data.foodPartner)
        setVideos(res.data.foodPartner.foodItems)
      })
      .catch(err => console.log(err))
  }, [id])
   
    const setVideoRef = (id) => (el) => {
        if (!el) return;

        videoRefs.current.set(id, el);
        observerRef.current.observe(el);
    };
    return (

        <>
            <TopNav /> <br /> <br />
             <div className="heading w-100 mt-2">
                Your <span className="Span-Text">Video's</span>
            </div>
            <div className="Main-Div">
                {
                    videos.map((v) => {
                        return (
                            <div key={v._id} className="video-grid-item">
                                <div className="profile-grid-video">
                                    <video
                                        src={v.food.video}
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
            <PartnerBottomNav/>
        </>
    )
}

export default FoodPartnerHome
