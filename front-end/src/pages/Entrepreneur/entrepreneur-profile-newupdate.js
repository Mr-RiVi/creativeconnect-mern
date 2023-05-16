import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Background from "../../assets/images/Entrepreneur/background.jpg";
import TextField from "@mui/material/TextField";

const NewProfileUpdate = () => {
  return (
    <div className="w-[1200px] justify-center h-auto ">
      <div className="review">
        <img src={Background} alt="" className="fixed h-auto w-auto" />
      </div>

      <div className=" ml-44 p-10 -mt-20">
        <div class="p-3 bg-gray-400 shadow mt-24 opacity-90 rounded-3xl ">
        <h5 className="text-3xl font-serif mb-3 ml-72">Update Company Details</h5>
          <div class="grid grid-cols-1 md:grid-cols-3">
            {/* profile pic */}
            <div class=""></div>
          </div>

          <div class="justify-center">
            {/* <div key={ProductIdea._id}> */}
            <div class="flex flex-col p-[20px] w-[850px] mt-1 mr-20 ml-5 justify-center m-auto font-serif">
              {/* Mentor private details */}
              <form class="flex flex-col mt-[20px] gap-5 ">

                {/* Company Name */}
                <TextField //single line
                  id="outlined-read-only-input"
                  label="Company Name"
                  // value={reviewTitle}
                  // onChange={(e) => setReviewTitle(e.target.value)}
                />

                {/* Company Email */}
                <TextField //only 3 lines showing after that extended inside
                  id="outlined-multiline-static"
                  label="Company Email"
                  // defaultValue={reviewLocation}
                  // onChange={(e) => setReviewLocation(e.target.value)}
                />


                {/* Description */}
                <TextField
                  id="outlined-read-only-input"
                  label="Description"
                  // defaultValue={reviewDescription}
                  // onChange={(e) => setReviewDescription(e.target.value)}
                  multiline
                  rows={3}
                />

                
              </form>
            </div>

            <div className="flex justify-end mt-3">
              <button
                className=" w-28 h-10 mr-5 -mt-1 rounded-3xl bg-cyan-700 text-black"
                type="submit"
                //   onClick={handleUpdate}
              >
                Save
              </button>

              <button
                className="w-28 h-10 mr-[60px] -mt-1 rounded-3xl bg-cyan-700 text-black opacity-95"
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

export default NewProfileUpdate;
