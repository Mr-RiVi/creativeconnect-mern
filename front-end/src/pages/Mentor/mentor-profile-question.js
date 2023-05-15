import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MentorProfileQuestion = () => {
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
    <div className="w-[1382px] justify-center h-auto bg-sky-200" key={mentor._id}>
      <form className="flex flex-col mt-[20px] gap-6 w-96 ml-20 mb-5">
        <p>My Name: {mentor.mentName}</p>
        {questions.map((question) => (
          <div key={question._id}>
            <p>Name: {question.empName}</p>
            <p>Email: {question.email}</p>
            <p>Problem: {question.description}</p>
          </div>
        ))}
      </form>
    </div>
  );
};

export default MentorProfileQuestion;
