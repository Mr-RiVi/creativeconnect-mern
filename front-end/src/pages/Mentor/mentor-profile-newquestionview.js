import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Background from "../../assets/images/Mentor/bg1.jpg";
import TextField from "@mui/material/TextField";

const NewMentorQuestionView = () => {
    return (
        <div className="w-[1000px] justify-center h-auto ">
        <div className="review">
          <img src={Background} alt="" className="fixed h-auto w-auto" />
        </div>
  
        <div className="ml-56 p-10 -mt-20">
          <div class="p-3 bg-gray-400 shadow mt-24 opacity-90 rounded-3xl ">
          <h5 className="text-left font-serif mb-0 ml-36">Innovation problems</h5>
            
  
            <div class="justify-center">
          
              <div class="flex flex-col p-[20px] w-[550px] mt-1 mr-20 ml-5 justify-center m-auto font-serif">
   
                <form class="flex flex-col mt-[20px] gap-2 ">
                
                <div>
                <p>Name     :maleesha shavindi</p>
                <p>Email    :maleeshashavindi@gmail.com</p>
                <p>Problem  :A questionnaire is a research tool used to conduct surveys. It includes specific questions with the goal to understand a topic from the respondents' point of view. Questionnaires typically have</p>
                </div>
                                    

                </form>
              </div>
  
              
            </div>
          </div>
        </div>
      </div> 
    );
};

export default NewMentorQuestionView;