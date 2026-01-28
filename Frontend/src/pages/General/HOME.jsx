import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";

import '../../styles/HomeCss.css';
const HOME = () => {
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
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((res) => setVideos(res.data.foodItems))
      .catch(console.error);
  }, []);

  const likeMe = async (foodId) => {

    try {
      const res = await axios.post(
        "http://localhost:3000/api/food/like",
        { foodId },
        { withCredentials: true }
      );

      console.log(res.data);

    } catch (error) {
      console.error(
        "LIKE ERROR ",
        error.response?.data || error.message
      );
    }
  };

const saveMe = async (foodId) => {

  try {
    const res = await axios.post(
      "http://localhost:3000/api/food/save",
      { foodId },
      { withCredentials: true }
    );
console.log(res.data);
  } catch (error) {
    console.error(
      "SAVE ERROR 👉",
      error.response?.data || error.message
    );
  }
};


  const setVideoRef = (id) => (el) => {
    if (!el) return;

    videoRefs.current.set(id, el);
    observerRef.current.observe(el);
  };

  return (
    <div className="reels-page">

      <div className="reels-feed" role="list">
        {videos.map((item) => (
          <section key={item._id} className="reel" role="listitem">
            <video
              ref={setVideoRef(item._id)}
              className="reel-video"
              src={item.video}
              muted
              autoPlay
              playsInline
              loop
              preload="metadata"
            />

            <div className="Like-btn">
              <button onClick={() => { likeMe(item._id) }} >
                <CiHeart className="like" />
              </button>
            </div>
            <div className="Save-btn">
              <button onClick={() => saveMe(item._id)}>
                <IoMdBookmark className="Save" />
              </button>
            </div>

            <div className="reel-overlay">
              <div className="reel-overlay-gradient" aria-hidden="true" />
              <div className="reel-content">
                <p className="reel-description">{item.name}</p>
                <p className="reel-description">{item.description}</p>
                <Link
                  className="reel-btn"
                  to={`/food-partner/${item.foodpartner}`}
                >
                  Visit Store
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HOME;
