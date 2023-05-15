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
          <div class="grid grid-cols-1 md:grid-cols-3">
            {/* profile pic */}
            <div class=""></div>
          </div>

          <div class="justify-center">
            {/* <div key={ProductIdea._id}> */}
            <div class="flex flex-col p-[20px] w-[850px] mt-1 mr-20 ml-5 justify-center m-auto font-serif">
              {/* Mentor private details */}
              <form class="flex flex-col mt-[20px] gap-5 ">
                {/* Name */}
                <TextField //single line
                  id="outlined-read-only-input"
                  label="Title"
                  // value={reviewTitle}
                  // onChange={(e) => setReviewTitle(e.target.value)}
                />

                {/* Description */}
                <TextField //only 3 lines showing after that extended inside
                  id="outlined-multiline-static"
                  label="Location"
                  // defaultValue={reviewLocation}
                  // onChange={(e) => setReviewLocation(e.target.value)}
                />

                {/* Work History */}
                <TextField
                  id="outlined-multiline-static"
                  type="date"
                  // value={reviewDate}
                  // onChange={(e) => setReviewDate(e.target.value)}
                />

                {/* Education */}
                <TextField
                  id="outlined-read-only-input"
                  label="Description"
                  // defaultValue={reviewDescription}
                  // onChange={(e) => setReviewDescription(e.target.value)}
                  multiline
                  rows={2}
                />

                {/* Education */}
                <TextField
                  id="outlined-read-only-input"
                  label="Rate(1-5)"
                  // defaultValue={reviewRate}
                  // onChange={(e) => setReviewRate(e.target.value)}
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

export default NewProfileUpdate;
