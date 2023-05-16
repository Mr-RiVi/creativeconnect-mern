import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Background from "../../assets/images/Mentor/bg1.jpg";

import { Button } from "@material-tailwind/react";
import TextField from "@mui/material/TextField";
import fb from "../../assets/images/Mentor/facebook.png";
import gmail from "../../assets/images/Mentor/gmail.png";
import linkedin from "../../assets/images/Mentor/linkedin.png";
import "../../assets/styles/buttonHover.css"

const ProfileDetail = () => {
  const [mentor, setMentor] = useState({});
  const { id } = useParams();

  useEffect(() => {

    fetch("http://localhost:3000/api/mentor/viewMentor/" + id)
      .then((response) => response.json())
      .then((data) => {
        setMentor(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-[1382px] justify-center h-auto bg-style-" key={mentor._id}>
      <div className="review bg-gray-200" >
        <img
          src={Background}
          alt=""
          className="fixed h-auto w-full bg-opacity-100"
        />
      </div>
      
        <div class="p-16 -mt-10 ">
          <div class="p-8 bg-gray-300 shadow mt-24 opacity-90 rounded-3xl">
            <div class="grid grid-cols-1 md:grid-cols-3">
              {/* profile pic */}
              <div class="relative">
                <div class="w-48 h-48 bg-gray-400 mx-auto rounded-full shadow-2xl absolute -mt-24 flex items-center justify-center text-slate-700 left-[500px] ">
                  <img
                    src={mentor.mentImg}
                    alt=""
                    className=" opacity-100 rounded-full shadow-xl h-auto align-middle border-none max-w-150-px"
                  />
                </div>
                
              </div>
            </div>

            
              <div class="py-6 px-3 mt-32 sm:mt-2 ml-10">
                <Link to={`../profilequestion/${mentor._id}`}>
                  <button
                    class="bg-cyan-700 active:bg-gray-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Message
                  </button>
                </Link>
              </div>
            

            <div class="mt-2 text-center pb-6 border-b border-gray-800">
              <h1 class="text-3xl font-medium text-gray-700">
                {mentor.mentName}
              </h1>
              <p class="mt-0 text-lg text-gray-500">
                {mentor.email}
              </p>
              <p class="text-xl mt-0 font-medium text-gray-600 ">
                {mentor.phone}
              </p>

              {/* socail media buttons */}
              <div className="flex flex-row items-center gap-6 ml-[510px] mt-5">
                    <Button size="lg" color="white" className="flex items-center gap-3">
                      <img src={fb} alt="metamask" className="h-10 w-10" />
                    </Button>
                    <Button size="lg" color="white" className="flex items-center gap-3">
                      <img src={gmail} alt="metamask" className="h-11 w-11" />
                    </Button>
                    <Button size="lg" color="white" className="flex items-center gap-3">
                      <img src={linkedin} alt="metamask" className="h-10 w-10" />
                    </Button>
              </div>
            </div>

           

            <div class=" flex flex-col justify-center ">
              {/* <div key={ProductIdea._id}> */}
              <div class="flex flex-col p-[20px] w-[1100px] justify-center m-auto">
                {/* Mentor private details */}
                <form class="flex flex-col mt-[20px] gap-6 ">

                  {/* Name */}
                  <TextField  //single line
                  id="outlined-read-only-input"
                  label="Name"
                  defaultValue={mentor.mentName}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                  {/* Description */}
                  <TextField  //only 3 lines showing after that extended inside
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={3}
                  defaultValue={mentor.description}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                  {/* Work History */}
                  <TextField
                  id="outlined-multiline-static"
                  label="Work History"
                  multiline
                  rows={2}
                  defaultValue={mentor.workHistory}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                  {/* Education */}
                  <TextField 
                  id="outlined-read-only-input"
                  label="Education"
                  defaultValue={mentor.education}
                  multiline
                  rows={2}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                  {/* Language */}
                  <TextField 
                  id="outlined-read-only-input"
                  label="Language"
                  multiline
                  defaultValue={mentor.language}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                  {/* Area of Experties */}
                  <TextField 
                  id="outlined-read-only-input"
                  label="Area of Experties"
                  defaultValue={mentor.expertiseArea}
                  multiline
                  rows={2}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                </form>
              </div>

              <div className="flex justify-end mt-4">
                <Link to={`../profiledetailupdate/${mentor._id}`}>
                  <button
                    className="w-28 h-10 mr-16 -mt-4 rounded-3xl bg-cyan-700 text-black"
                    onClick={(e) => {
                      console.log(e.target.value);
                    }}
                  >
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ProfileDetail;
