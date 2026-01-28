import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopNav from '../Navbar/TopNav'
import PartnerBottomNav from '../Navbar/PartnerBottomNav';
import "../../styles/auth.css";

const CreateFood = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData();
    formData.append("name", form.name.value);
    formData.append("description", form.description.value);
    formData.append("video", form.video.files[0]);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/food",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // VERY IMPORTANT for cookies
        }
      );

      alert(response.data.message);
      navigate("/Home"); // or wherever you want to redirect
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || "Something went wrong while uploading"
      );
    }
  };

  return (
    <>
    <TopNav/>
      <div className="Container Create-Food-Container">
        <h1 className="heading">
          Add <span className="Span-Text">Food</span> Reel ..
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="Container-Items">
            <label className="label-tag" htmlFor="name">
              Food Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Food Name"
              className="input-tag"
              required
            />
          </div>

          <div className="Container-Items">
            <label className="label-tag" htmlFor="description">
              Food Description:
            </label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Enter Your description"
              className="input-tag"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="video">
              Food Video
            </label>
            <input
              id="video"
              name="video"
              type="file"
              className="form-input"
              accept="video/*"
              required
            />
          </div>

          <div className="Container-Items">
            <button className="Submit-Button">Submit</button>
          </div>
        </form>
      </div>
      {/* <PartnerBottomNav/> */}
    </>
  );
};

export default CreateFood;
