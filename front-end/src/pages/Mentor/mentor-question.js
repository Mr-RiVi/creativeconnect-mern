import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Background from "../../assets/images/Mentor/bg1.jpg";
import TextField from "@mui/material/TextField";

const MentorQuestion = () => {
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

  const addQuestion = async (e) => {
    e.preventDefault();

    const problemId = e.target.elements.problemId.value;
    const empId = e.target.elements.empId.value;
    const empName = e.target.elements.empName.value;
    const email = e.target.elements.email.value;
    const description = e.target.elements.description.value;

    const questionData = {
      problemId,
      empId,
      empName,
      email,
      description
    };

    const response = await fetch("http://localhost:3000/api/question/addQuestion", {
      method: "POST",
      body: JSON.stringify(questionData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (response.ok) {
      console.log("Question added successfully!");
    } else {
      console.log(json.error);
    }
  };

    return (
        <div className="w-[1200px] justify-center h-auto" >
          <div className="review">
            <img src={Background} alt="" className="fixed h-auto w-auto" />
          </div>
  
          <div className=" ml-44 p-10 -mt-20" key={mentor._id}>
            <div class="p-3 bg-gray-400 shadow mt-24 opacity-90 rounded-3xl ">
            <h5 className="text-4xl font-serif mb-0 ml-96">Contact us</h5>
            {/* <h2>My name is {mentor.mentName} If you have any question Contact me.</h2> */}
              <div class="grid grid-cols-1 md:grid-cols-3">
                {/* profile pic */}
                <div class=""></div>
              </div>
    
              <div class="justify-center" onSubmit={addQuestion}>
                {/* <div key={ProductIdea._id}> */}
                <div class="flex flex-col p-[20px] w-[850px] mt-1 mr-20 ml-5 justify-center m-auto font-serif">
                  {/* Mentor private details */}
                  <form class="flex flex-col mt-[20px] gap-3" >
    
                    <TextField
                      id="problemId"
                      label="Problem Id"
                    />
                    <TextField
                      id="empId"
                      label="Emp Id"
                      defaultValue={mentor._id}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="empName"
                      label="Emp Name"
                    />
                    <TextField
                      id="email"
                      label="Email"
                    />
                    <TextField
                      id="description"
                      label="Description"
                      multiline
                      rows={3}
                    />
                    <button 
                      class="bg-cyan-700 active:bg-gray-400 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none 
                      focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 "
                      type="submit">
                      Submit
                    </button>
    
                  </form>
                </div>
    
                <div class="mt-32 sm:mt-2 ml-[770px]">               
                </div>
              </div>
            </div>
          </div>
      </div> 
    );
};

export default MentorQuestion;