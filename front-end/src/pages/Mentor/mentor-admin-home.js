import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import home1 from "../assets/images/Mentor/businessmeeting1.jpg"
import home1 from "../../assets/images/Mentor/businessmeeting1.jpg"
import enp1 from "../../assets/images/Mentor/enp1.png"
import home2 from "../../assets/images/Mentor/R1.jpg"
import "../../assets/styles/ProfileCard.css"

const MentorAdminHome = () => {
  const [slideUps, setSlideUps] = useState([]);
  const [Mentors, setMentor] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('mentName');

  useEffect(() => {
    const fetchMentor = async () => {
      const response = await fetch(
        "http://localhost:3000/api/mentor/viewAllMentors"
      );
      const json = await response.json();
      if (response.ok) {
        setMentor(json);
        // Initialize the slideUp state for each card to false
        setSlideUps(Array(json.length).fill(false));
      }
    };
    fetchMentor();
  }, []);

  const toggleSlideUp = (index) => {
    // Create a new copy of slideUps array with the value at the specified index flipped
    const newSlideUps = [...slideUps];
    newSlideUps[index] = !newSlideUps[index];

    // Minimize all other cards
    for (let i = 0; i < newSlideUps.length; i++) {
      if (i !== index) {
        newSlideUps[i] = false;
      }
    }

    setSlideUps(newSlideUps);
  }

  const searchMentors = () => {
    if (!searchQuery) {
      return Mentors;
    }
    return Mentors.filter((mentor) => {
      if (searchBy === 'mentName') {
        return mentor.mentName.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (searchBy === 'role') {
        return mentor.role.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
  };

  const filteredMentors = searchMentors();

  
  return (
    <div className="w-full  bg-gray-200 ">
      
      <div className="relative">
        <img src={home1} alt="" className="h-auto w-full" />
        
        <div className="absolute top-[100px] left-20 text-white p-4">
          <br></br>
          <h1 className="text-5xl font-bold">Accelerate growth with</h1>
          <h1 className="text-4xl font-bold">High impact mentoring</h1>
        </div>

        <div className="absolute top-60 left-[90px] text-white bg-black bg-opacity-40 shadow-md">
          <p className="text-2xl font-semibold p-2">Provide your people with the guidance,<br></br>
            support, and advocacy they need to excel in<br></br>
            their roles
            </p>
        </div>
      </div>
      <div className="absolute,  ml-80">
        <div className="flex flex-row">
          <h1 className="text-5xl  text-black font-serif mt-5 mb-0 ml-52 drop-shadow-lg shadow-black">
            OUR MENTORS
          </h1>

          {/* search bar */}
          <div className="search-container ">
            <div className="w-[380px] border-double border-4 border-sky-300 rounded-3xl ml-24 mt-7 bg-sky-100">
              <input
                className="w-[230px] h-[35px] rounded-3xl text-center ml-2 mt-1 mb-1"
                type="text"
                placeholder={`Search ${
                  searchBy === "mentName" ? "mentors" : "roles"
                }`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
                <select 
                  className="rounded-3xl ml-1 mr-2"
                  value={searchBy} 
                  onChange={(e) => setSearchBy(e.target.value)}
                  >
                  <option value="mentName">Mentor Name</option>
                  <option value="role">Role</option>
                </select>
            </div>
          </div>

        </div>
      </div>

      <div className="mentor-cards-container">
        {filteredMentors.map((mentor, i) => (
          <div className="container  border-green-500" key={mentor._id}>
            <div className="cover">
              <img src={home2} alt="Profile Pic" />
            </div>
            <div className={`body ${slideUps[i] && `slideup`}`}>
              <div className="bodyWrapper">
                <img
                  className={`avatar ${slideUps[i] && `slideup`}`}
                  src={mentor.mentImg} //profiles photo
                  alt=""
                />
                
                <div key={mentor._id} className="profileDetails">
                  <section className="profileName">{mentor.mentName}</section>
                  <section className="profileEmail">{mentor.email}</section>
                  <section className="profileLocation">{mentor.role}</section>
                  <button
                    className="seeMoreButton"
                    onClick={() => {
                      toggleSlideUp(i);
                    }}
                  >
                    {!slideUps[i] ? "See More" : "See Less"}
                  </button>
                  <div className="moreDetails">
                    <h1 hidden>{i + 1}</h1>
                    <div className="text-sm text-gray-900 text-start font-light mx-8 my-4"> {/*  change */}
                      <p style={{ marginBottom: 0 }}><b>Education -</b>{mentor.education}</p>
                      <p style={{ marginTop: 0 }}><b>ExpertiseArea -</b>{mentor.expertiseArea}</p>
                    </div>

                    <ul className="skillsets">
                      <Link to={`../profiledetail/${mentor._id}`}>
                        <li
                          onClick={() => {
                            console.log(mentor._id);
                          }}
                        >
                          See More..
                        </li>
                      </Link>

                      <Link to={`../question/${mentor._id}`}>
                        <li
                          onClick={() => {
                            console.log(mentor._id);
                          }}
                        >Connect</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-6"></div>  
    </div>
    
    
  )
}

export default MentorAdminHome