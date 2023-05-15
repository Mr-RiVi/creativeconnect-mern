import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Background from "../../assets/images/Entrepreneur/background.jpg";
import TextField from '@mui/material/TextField';

const NewIdeaUpdate = () => {
  return (
    <div className="w-[1200px] justify-center h-auto ">
      <div className="review">
        <img src={Background} alt="" className="fixed h-auto w-auto" />
      </div>
      
        <div className=" ml-44 p-10 -mt-24">
          <div class="p-8 bg-gray-400 shadow mt-28 opacity-90 rounded-3xl ">
            <div class="grid grid-cols-1 md:grid-cols-3">

              {/* profile pic */}
              <div class="relative">
                <div class="w-96 h-60 bg-gray-500 mx-auto rounded-xl shadow-2xl absolute mt-11 -ml-[470px] flex items-center justify-center text-slate-700 left-[500px] ">
                  {/* <img
                    src={reviewImg || r2}
                    alt=""
                    className=" opacity-100 rounded-xl shadow-xl h-auto align-middle border-none lg:-ml-1 max-w-150-px"
                  /> */}

                </div>
                <div className="mr-6">
                  <input
                    className="mt-[400px] ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="default_size"
                    type="file"
                    name="image"
                    required
                    // onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>

            <div class="justify-center">
              {/* <div key={ProductIdea._id}> */}
              <div class="flex flex-col p-[20px] w-96 -mt-[450px] mr-10 justify-center m-auto font-serif">
                {/* Mentor private details */}
                <form class="flex flex-col mt-[20px] gap-6 ">
                  
                  {/* Idea Name */}
                  <TextField //single line
                    id="outlined-read-only-input"
                    label="Title"
                    // value={reviewTitle}
                    // onChange={(e) => setReviewTitle(e.target.value)}
                  />

                  {/* Idea Description */}
                  <TextField //only 3 lines showing after that extended inside
                    id="outlined-multiline-static"
                    label="Location"
                    // defaultValue={reviewLocation}
                    // onChange={(e) => setReviewLocation(e.target.value)}
                  />

                  {/* Idea Industry*/}
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    // value={reviewDate}
                    // onChange={(e) => setReviewDate(e.target.value)}
                  />

                  {/* Idea Budget */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Description"
                    // defaultValue={reviewDescription}
                    // onChange={(e) => setReviewDescription(e.target.value)}
                    multiline
                    rows={2}
                  />

                  
                  
                </form>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  className=" w-28 h-10 mr-5 -mt-4 rounded-3xl bg-cyan-700 text-black"
                  type="submit"
                //   onClick={handleUpdate}
                >
                  Save
                </button>

                <button
                  className="w-28 h-10 mr-[60px] -mt-4 rounded-3xl bg-cyan-700 text-black opacity-95"
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

export default NewIdeaUpdate;