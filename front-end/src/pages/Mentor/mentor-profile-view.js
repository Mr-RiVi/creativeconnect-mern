import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button } from "@material-tailwind/react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

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
    <div className="w-[1382px] justify-center h-auto bg-sky-200 "key={mentor._id}>

      <div class="p-16 -mt-10 ">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">

            {/* profile pic */}
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute -mt-24 flex items-center justify-center text-indigo-500 left-[500px] ">
                <img
                  className="rounded-full"
                  src={mentor.mentImg} //profiles photo
                  alt=""
                />
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div class="mt-28 text-center pb-3 ">
            <h1 class="text-3xl font-medium text-gray-700">{mentor.mentName}</h1>            

            <p class="mt-3 text-lg text-gray-500">{mentor.phone}</p>
            <p class="text-lg text-gray-500">{mentor.email}</p>
            <p class="text-xl mt-3 font-medium text-gray-600 ">Sri Lanka</p>
          </div>

          
          <div class=" flex flex-col justify-center ">
          <div key={mentor._id}>

            {/* socail media buttons */}
            <div className="border-b border-gray-400 pb-6" >
              <div className="flex flex-row items-center gap-6 ml-[510px] ">
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

            <Link to={`../profiledetailcreate/${mentor._id}`}>
              <button className='text-left font-bold ml-20 -mt-3'
                onClick={(e) => {
                  console.log(e.target.value);
                }}
              > 
                <h1 className='underline underline-offset-4 text-red-500'>
                  Fill Account details to create your account
                </h1>
              </button>
            </Link>

            <div className="flex justify-end">
              <Link to={`../profiledetailupdate/${mentor._id}`}>
                <button className="button-1 w-36 mr-16 -mt-4 rounded-3xl text-gray-600"
                  // value={mentor._id}
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
    </div>

  );
};

export default ProfileDetail;
