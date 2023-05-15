import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';

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
    <div className="w-[1382px] justify-center h-auto bg-sky-200 " key={mentor._id}>
      <form className="flex flex-col mt-[20px] gap-6 w-96 ml-20 mb-5" onSubmit={addQuestion}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MentorQuestion;
