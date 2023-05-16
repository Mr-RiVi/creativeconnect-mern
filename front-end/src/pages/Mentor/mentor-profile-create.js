//USE THIS PAGE
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';

import AccountCircle from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import "../../assets/styles/buttonHover.css"

const ProfileDetailCreate = () => {
  const [mentName,setMentName]=useState("");    
  const [role, setRole] = useState("");
  const [mentId, setMentId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [workHistory, setWorkHistory] = useState("");
  const [education, setEducation] = useState("");
  const [language, setLanguage] = useState("");
  const [expertiseArea, setExpertiseArea] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [mentImg, setmentImg] = useState("");
  const [mentState, setmentState] = useState("");


  async function onSubmit(e) {
    e.preventDefault();

    // Get the file extension from the file name
    const fileExtension = mentImg.name.split('.').pop().toLowerCase();

    // Check if the file is of the allowed types
    const allowedTypes = ['jpg', 'jpeg', 'png'];
    if (!allowedTypes.includes(fileExtension)) {
      console.log('Invalid file type');
      return;
    }

    const BASE_URL = "http://localhost:3000/api/mentor/addMentor";

    const storageRef = ref(storage, `mentor/${Image.name + v4()}`);

    await uploadBytes(storageRef, mentImg)
      .then(() => {
        console.log("uploaded");
      })
      .catch((err) => {
        console.log(err);
      });

    await getDownloadURL(storageRef)
      .then(async (url) => {
        setmentImg(url); //image set to backend attribute 
        console.log(url);

        const newMentor = {
          mentName,
          role,
          mentId,
          phone,
          email,
          description,
          workHistory,
          education,
          language,
          expertiseArea,
          fbLink,
          linkedinLink,
          mentImg: url,
          mentState
        };

        const response = await fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMentor),
        }).catch((err) => {
          window.alert(err);
        });
        const content = await response.json();
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">

      <div class="p-16 -mt-10 ">
        <form onSubmit={onSubmit}>
          <div class="p-8 bg-white shadow mt-24">
            <div class="grid grid-cols-1 md:grid-cols-3">

              {/* profile pic */}
              <div class="relative">
                <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute -mt-24 flex items-center justify-center text-indigo-500 left-[500px] ">
                  <img
                      className=""
                      // src={mentor.mentImg} //profiles photo
                      alt=""
                  />

                  <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <input
                className="ml-[450px] mt-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                id="default_size"
                type="file"
                name="image"
                onChange={(e) => {
                  setmentImg(e.target.files[0]);
                }}
                required
              />
            </div>     
            <div class=" flex flex-col justify-center">
              <div class="flex flex-col p-[20px] w-[1100px] justify-center m-auto">
                {/* Mentor private details */}
                <form class="flex flex-col mt-[20px] gap-6 ">                 
                  {/* socail media buttons link */}
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
                      <FacebookIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: 40 }} />
                      <TextField id="input-with-sx" label="Facebook Link" variant="standard" sx={{ width: '470px' }} 
                        onChange={(e)=>{setFbLink(e.target.value)}}
                      />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
                      <LinkedInIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: 40 }} />
                      <TextField id="input-with-sx" label="LinkedIn Link" variant="standard" sx={{ width: '470px' }} 
                        onChange={(e)=>{setLinkedinLink(e.target.value)}}
                      />
                    </Box>
                  </Box>
                

                  {/* Name */}
                  <TextField  //single line
                    id="outlined-read-only-input"
                    label="Name"
                    // defaultValue={mentor.mentName}
                    onChange={(e)=>{setMentName(e.target.value)}}                
                  />

                  {/* Role */}
                  <TextField  //single line
                    id="outlined-read-only-input"
                    label="Role"
                    onChange={(e)=>{setRole(e.target.value)}}              
                  />

                  {/* Mentor ID */}
                  <TextField  //single line
                    id="outlined-read-only-input"
                    label="Mentor ID"
                    onChange={(e)=>{setMentId(e.target.value)}}              
                  />

                  {/* Phone */}
                  <TextField  //single line
                    id="outlined-read-only-input"
                    label="Phone No"
                    onChange={(e)=>{setPhone(e.target.value)}}           
                  />

                  {/* Email */}
                  <TextField  //single line
                    id="outlined-read-only-input"
                    label="Email"
                    onChange={(e)=>{setEmail(e.target.value)}}          
                  />

                  {/* Description */}
                  <TextField  //only 3 lines showing after that extended inside
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={3}
                    onChange={(e)=>{setDescription(e.target.value)}}
                  />

                  {/* Work History */}
                  <TextField
                    id="outlined-multiline-static"
                    label="Work History"
                    multiline
                    rows={2}
                    onChange={(e)=>{setWorkHistory(e.target.value)}}
                  />

                  {/* Education */}
                  <TextField 
                    id="outlined-read-only-input"
                    label="Education"
                    onChange={(e)=>{setEducation(e.target.value)}}
                    multiline
                    rows={2}
                  />

                  {/* Language */}
                  <TextField 
                    id="outlined-read-only-input"
                    label="Language"
                    multiline
                    onChange={(e)=>{setLanguage(e.target.value)}}
                  />

                  {/* Area of Experties */}
                  <TextField 
                    id="outlined-read-only-input"
                    label="Area of Experties"
                    onChange={(e)=>{setExpertiseArea(e.target.value)}}
                    multiline
                    rows={2}
                  />

                  {/* state */}
                  <TextField  //single line
                    id="outlined-read-only-input"
                    label="State"
                    onChange={(e)=>{setmentState(e.target.value)}}              
                  />

                </form>
              </div>
              <div className="flex justify-center mt-4">
                {/* <Link to={`../profiledetailupdate/${mentor._id}`}> */}
                  <button className="button-1 w-96 mr-16 -mt-4 rounded-3xl text-gray-600 ">
                    Create Account
                  </button>
                {/* </Link> */}
              </div>

            </div>

          </div>
        </form>
      </div>

    </div>

  );
};

export default ProfileDetailCreate;
