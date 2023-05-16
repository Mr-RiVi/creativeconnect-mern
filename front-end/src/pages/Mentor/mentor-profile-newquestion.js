import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Background from "../../assets/images/Mentor/bg1.jpg";
import TextField from "@mui/material/TextField";

const NewMentorQuestion = () => {
    return (
        <div className="w-[1200px] justify-center h-auto ">
        <div className="review">
          <img src={Background} alt="" className="fixed h-auto w-auto" />
        </div>
  
        <div className=" ml-44 p-10 -mt-20">
          <div class="p-3 bg-gray-400 shadow mt-24 opacity-90 rounded-3xl ">
          <h5 className="text-4xl font-serif mb-0 ml-96">Contact us</h5>
            <div class="grid grid-cols-1 md:grid-cols-3">
              {/* profile pic */}
              <div class=""></div>
            </div>
  
            <div class="justify-center">
              {/* <div key={ProductIdea._id}> */}
              <div class="flex flex-col p-[20px] w-[850px] mt-1 mr-20 ml-5 justify-center m-auto font-serif">
                {/* Mentor private details */}
                <form class="flex flex-col mt-[20px] gap-3 ">
  
                  

                  {/* Employee ID */}
                  <TextField //single line
                    id="outlined-read-only-input"
                    label="Employee ID"
                    // value={reviewTitle}
                    // onChange={(e) => setReviewTitle(e.target.value)}
                  />
  
                  {/* Name */}
                  <TextField //only 3 lines showing after that extended inside
                    id="outlined-multiline-static"
                    label="Name"
                    // defaultValue={reviewLocation}
                    // onChange={(e) => setReviewLocation(e.target.value)}
                  />

                  {/* Email */}
                  <TextField //only 3 lines showing after that extended inside
                    id="outlined-multiline-static"
                    label="Email"
                    // defaultValue={reviewLocation}
                    // onChange={(e) => setReviewLocation(e.target.value)}
                  />
  
  
                  {/* Problem */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Problem"
                    // defaultValue={reviewDescription}
                    // onChange={(e) => setReviewDescription(e.target.value)}
                    multiline
                    rows={3}
                  />
  
                  
                </form>
              </div>
  
              <div class="mt-32 sm:mt-2 ml-[770px]">               
  
              <button
                  class="bg-cyan-700 active:bg-gray-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none 
                  focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 "
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
};

export default NewMentorQuestion;