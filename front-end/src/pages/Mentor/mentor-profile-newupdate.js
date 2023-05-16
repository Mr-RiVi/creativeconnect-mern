import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Background from "../../assets/images/Mentor/bg1.jpg";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NewProfileDetailUpdate = () => {
  return (
    <div className="w-[1382px] justify-center h-auto bg-style-">
      <div className="review bg-gray-200">
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
                    // src={imageUrl || profile.profileImg || profilePic}
                    alt=""
                    className=" opacity-100 rounded-full shadow-xl h-auto align-middle border-none max-w-150-px"
                  />
                </div>
                <div className="mr-44">
                  <input
                    className="mt-28 ml-[485px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="default_size"
                    type="file"
                    name="image"
                    required
                    // onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>

            <div class="mt-6 text-center pb-6 border-b border-gray-800">
              <h1 class="text-3xl font-medium text-gray-700">
                Maleesha Shavindi
              </h1>
              <p class="mt-0 text-lg text-gray-500">
                maleeshashavindi@gmail.com
              </p>
              <p class="text-xl mt-0 font-medium text-gray-600 ">
                Panadura,Sri Lanka
              </p>
            </div>

            <div class=" flex flex-col justify-center ">
              {/* <div key={ProductIdea._id}> */}
              <div class="flex flex-col p-[20px] w-[1100px] justify-center m-auto">
                {/* Mentor private details */}
                <form class="flex flex-col mt-[20px] gap-6 ">

                  {/* socail media buttons link */}
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      <FacebookIcon
                        sx={{
                          color: "action.active",
                          mr: 1,
                          my: 0.5,
                          fontSize: 40,
                        }}
                      />
                      <TextField
                        id="input-with-sx"
                        label="Facebook Link"
                        variant="standard"
                        sx={{ width: "470px" }}
                        // onChange={(e) => setUpdatedMentor({ ...updateMentor, fbLink: e.target.value })}
                        // defaultValue={mentor.fbLink}
                      />
                    </Box>

                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      <LinkedInIcon
                        sx={{
                          color: "action.active",
                          mr: 1,
                          my: 0.5,
                          fontSize: 40,
                        }}
                      />
                      <TextField
                        id="input-with-sx"
                        label="LinkedIn Link"
                        variant="standard"
                        sx={{ width: "470px" }}
                        // onChange={(e) => setUpdatedMentor({ ...updateMentor, linkedinLink: e.target.value })}
                        // defaultValue={mentor.linkedinLink}
                      />
                    </Box>
                  </Box>

                  {/* Name */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Name"
                    // defaultValue={profile.profileName}
                    // onChange={(e) =>
                    //   setUpdatedProfile({
                    //     ...updatedProfile,
                    //     profileName: e.target.value,
                    //   })
                    // }
                  />

                  {/* Description */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Description"
                    multiline
                    rows={3}
                    // defaultValue={profile.profileEmail}
                    // onChange={(e) =>
                    //   setUpdatedProfile({
                    //     ...updatedProfile,
                    //     profileEmail: e.target.value,
                    //   })
                    // }
                  />

                  {/* Work History */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Work History"
                    // defaultValue={profile.profileContactNo}
                    // onChange={(e) =>
                    //   setUpdatedProfile({
                    //     ...updatedProfile,
                    //     profileContactNo: e.target.value,
                    //   })
                    // }
                  />

                  {/* Education */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Education"
                    // defaultValue={profile.profileDesc}
                    // onChange={(e) =>
                    //   setUpdatedProfile({
                    //     ...updatedProfile,
                    //     profileDesc: e.target.value,
                    //   })
                    // }
                  />

                  {/* Language */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Language"
                    // defaultValue={profile.profileDesc}
                    // onChange={(e) =>
                    //   setUpdatedProfile({
                    //     ...updatedProfile,
                    //     profileDesc: e.target.value,
                    //   })
                    // }
                  />

                  {/* Area of Experties */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Area of Experties"
                    // defaultValue={profile.profileDesc}
                    // onChange={(e) =>
                    //   setUpdatedProfile({
                    //     ...updatedProfile,
                    //     profileDesc: e.target.value,
                    //   })
                    // }
                  />

                </form>
              </div>

              <div className="flex justify-end mt-4">
              <button
                  className=" w-28 h-10 mr-5 -mt-4 rounded-3xl bg-cyan-700 text-black"
                //   onClick={handleUpdateProfile}
                >
                  Save
                </button>

                <button
                  className="w-28 h-10 mr-16 -mt-4 rounded-3xl bg-cyan-700 text-black"
                  type="submit"
                //   onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default NewProfileDetailUpdate;
