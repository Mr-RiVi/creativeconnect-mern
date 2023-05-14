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

import "../../assets/styles/buttonHover.css"

const ProfileDetailCreate = () => {
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

  const currencies = [
    {
      value: 'USD',
      label: 'M001',
    },
    {
      value: 'EUR',
      label: 'M002',
    },
    {
      value: 'BTC',
      label: 'M003',
    },
    {
      value: 'JPY',
      label: 'M004',
    },
  ];

  return (
    <div className="w-[1382px] justify-center h-auto bg-sky-200 "key={mentor._id}>

      <div class="p-16 -mt-10 ">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">

            {/* profile pic */}
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute -mt-24 flex items-center justify-center text-indigo-500 left-[500px] ">
                <img
                    className=""
                    src={mentor.mentImg} //profiles photo
                    alt=""
                />

                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div class="mt-28 text-center pb-6 border-b border-gray-400">
            <h1 class="text-3xl font-medium text-gray-700">{mentor.mentName}</h1>            

            <p class="mt-3 text-lg text-gray-500">{mentor.phone}</p>
            <p class="text-lg text-gray-500">{mentor.email}</p>
            <p class="text-xl mt-3 font-medium text-gray-600 ">Sri Lanka</p>
          </div>

          
          <div class=" flex flex-col justify-center ">
          <div key={mentor._id}>          

            <div class="flex flex-col p-[20px] w-[1100px] justify-center m-auto">

              {/* Mentor private details */}
              <form class="flex flex-col mt-[20px] gap-6 ">

                {/* Mentor ID */}
                <Box component="form"
                    sx={{ '& .MuiTextField-root': { width: '25ch' }, }}
                    noValidate
                    autoComplete="off"
                  >
                  <div>
                    <TextField
                      required
                      id="outlined-select-currency"
                      color="warning"
                      select
                      label="Required"
                      defaultValue="Normal"
                      helperText="Please select your Mentor ID"
                      
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    </div>
                </Box>
                
                {/* socail media buttons link */}
                <Box sx={{ display: 'flex' }}>
                  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
                    <FacebookIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: 40 }} />
                    <TextField id="input-with-sx" label="Facebook Link" variant="standard" sx={{ width: '470px' }} 
                      defaultValue={mentor.fbLink}
                    />
                  </Box>

                  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
                    <LinkedInIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: 40 }} />
                    <TextField id="input-with-sx" label="LinkedIn Link" variant="standard" sx={{ width: '470px' }} 
                      defaultValue={mentor.linkedinLink}
                    />
                  </Box>
                </Box>
              

                {/* Name */}
                <TextField  //single line
                  id="outlined-read-only-input"
                  label="Name"
                  defaultValue={mentor.mentName}                
                />

                {/* Description */}
                <TextField  //only 3 lines showing after that extended inside
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={3}
                  defaultValue={mentor.description}
                />

                {/* Work History */}
                <TextField
                  id="outlined-multiline-static"
                  label="Work History"
                  multiline
                  rows={2}
                  defaultValue={mentor.workHistory}
                />

                {/* Education */}
                <TextField 
                  id="outlined-read-only-input"
                  label="Education"
                  defaultValue={mentor.education}
                  multiline
                  rows={2}
                />

                {/* Language */}
                <TextField 
                  id="outlined-read-only-input"
                  label="Language"
                  multiline
                  defaultValue={mentor.language}
                />

                {/* Area of Experties */}
                <TextField 
                  id="outlined-read-only-input"
                  label="Area of Experties"
                  defaultValue={mentor.expertiseArea}
                  multiline
                  rows={2}
                />

              </form>
            </div>

            <div className="flex justify-center mt-4">
              {/* <Link to={`../profiledetailupdate/${mentor._id}`}> */}
                <button className="button-1 w-96 mr-16 -mt-4 rounded-3xl text-gray-600 "
                  // value={mentor._id}
                  onClick={(e) => {
                    console.log(e.target.value);
                  }}
                >
                  Create Account
                </button>
              {/* </Link> */}
            </div>



            </div>
          </div>

        </div>
      </div>

    </div>

  );
};

export default ProfileDetailCreate;
