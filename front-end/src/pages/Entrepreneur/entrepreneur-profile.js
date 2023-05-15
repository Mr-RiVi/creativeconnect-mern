import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EntrepreneurProfileDetail = () => {
  const [Entrepreneur, setEntrepreneur] = useState({});

  const { id } = useParams();

  useEffect(() => {

    fetch("http://localhost:3000/api/idea/viewIdea/" + id)
      .then((response) => response.json())
      .then((data) => {
        setEntrepreneur(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  return (
    <div className="w-[1399px] justify-center h-auto bg-sky-200 ">

    <div key={Entrepreneur._id}>
        <h1 className="text-3xl">Enterpreneur des </h1>
        <p className="text-lg">Enterpreneur Name : {Entrepreneur.entName}</p>
        <p className="text-lg">Email : {Entrepreneur.entEmail}</p>
        <p className="text-lg">Tel : {Entrepreneur.entContact}</p>
    
        <br></br>
        <h1 className="text-3xl">Company des </h1>
        <p className="text-lg">Company name : {Entrepreneur.entComName}</p>
        {/* <p className="text-2xl">Address : {Enterpreneur.role}</p> */}
        <p className="text-lg">Email : {Entrepreneur.entComEmail}</p>
        <p className="text-lg">Country : {Entrepreneur.entComCountry}</p>
        <p className="text-lg">des : {Entrepreneur.entComDes}</p>
        <br></br>

        <h1 className="text-3xl">Product des </h1>
        <p className="text-lg">Idea name : {Entrepreneur.ideaName}</p>
        <p className="text-lg">Budget {Entrepreneur.ideaBudget}</p>
        <p className="text-lg">Industry : {Entrepreneur.ideaIndustry}</p>
        <p className="text-lg">des : {Entrepreneur.ideaDescription}</p>

    </div>


    </div>
  );
};

export default EntrepreneurProfileDetail;