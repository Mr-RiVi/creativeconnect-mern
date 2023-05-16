import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Background from "../../assets/images/Mentor/bg1.jpg";
import TextField from "@mui/material/TextField";

const NewMentorQuestionView = () => {
  const [mentor, setMentor] = useState({});
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/mentor/viewMentor/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMentor(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:3000/api/question/getAllQuestion")
      .then((response) => response.json())
      .then((data) => {
        console.log("All Questions:", data);
        console.log("Mentor ID:", mentor._id);

        if (mentor._id) {
          const filteredQuestions = data.filter((question) => question.empId === mentor._id);
          console.log("Filtered Questions:", filteredQuestions);
          setQuestions(filteredQuestions);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [mentor._id]);

    return (
        <div className="w-[1000px] justify-center h-auto " key={mentor._id}>
        <div className="review">
          <img src={Background} alt="" className="fixed h-auto w-auto" />
        </div>
  
        <div className="ml-56 p-10 -mt-20">
          <div class="p-3 bg-gray-400 shadow mt-24 opacity-90 rounded-3xl ">
          <h5 className="text-left font-serif mb-0 ml-36">Innovation problems</h5>   
          <p>My Name: {mentor.mentName}</p>         
            <div class="justify-center">       
              <div class="flex flex-col p-[20px] w-[550px] mt-1 mr-20 ml-5 justify-center m-auto font-serif">  
                <form class="flex flex-col mt-[20px] gap-2 ">
                  {questions.map((question) => (  
                    <div key={question._id}>
                      <p>Name: {question.empName}</p>
                      <p>Email: {question.email}</p>
                      <p>Problem: {question.description}</p>
                    </div>
                  ))}                  
                </form>
              </div>             
            </div>
          </div>
        </div>
      </div> 
    );
};

export default NewMentorQuestionView;