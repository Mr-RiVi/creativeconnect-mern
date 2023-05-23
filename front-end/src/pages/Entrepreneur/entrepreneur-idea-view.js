import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import h1 from "../../assets/images/Entrepreneur/ThermalJacket.jpg";
// import c1 from "../assets/Entrepreneur/images/company.jpg";
import "../../assets/styles/buttonHover.css";

const EntrepreneurIdeaDetail = () => {
  const [Entrepreneur, setEntrepreneur] = useState({});
  const [ProductIdeas, setProductIdea] = useState([]);

  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/idea/getOneIdea/${id}`);
        const json = await response.json();
        if (response.ok) {
          setProfile(json);
        } else {
          throw new Error("Failed to fetch profile");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  const getProducts = (entId) => {
      if (profile && profile.entId === entId) {
        return profile.productIdeas;
      } else {
        return [];
      }
    };


  return (
    <div className="w-[1382px] justify-center h-auto  bg-gray-200 ">
      <br></br>
      <h1 className="text-3xl font-bold text-center mr-7">Company Detail & Innovation Idea Details</h1>   

      {/* Card view for Company & Product & Product Ideas */}
      <div className="flex flex-wrap justify-center gap-8 mt-6 mb-10 ">
        {profile && (
          <div >

            {/* Card view for Profile & Company */}
              <div className="p-6 w-[1200px] ml-24">
                <ul className="flex items-center bg-slate-300 border-2 border-gray-500 rounded-md p-4">
                  <li className="pl-6">
                    <p className="text-gray-900 text-xl font-bold">.::Employee Details::.</p>
                    <ul className="list-disc w-[350px] p-1">
                      <li className="text-gray-600 p-1"><strong>Name:</strong> {profile.entName}</li>
                      <li className="text-gray-600 p-1"><strong>Email:</strong> {profile.entEmail}</li>
                      <li className="text-gray-600 p-1"><strong>Contact:</strong> {profile.entContact}</li>
                    </ul>
                  </li>
                  <li className="border-l-2 border-gray-500 pl-8">
                    <p className="text-gray-900 text-lg font-bold">.::Company Details::.</p>
                    <ul className="list-disc p-1">
                      <li className="text-gray-600 p-1"><strong>Company Name:</strong> {profile.entComName} </li>
                      <li className="text-gray-600 p-1"><strong>Email:</strong> {profile.entComEmail}</li>
                      <li className="text-gray-600 p-1"><strong>Country:</strong> {profile.entComCountry}</li>
                      <li className="text-gray-600 p-1 text-justify"><strong>Description:</strong> {profile.entComDes}</li>
                    </ul>
                  </li>
                  <li className="border-l-2 border-gray-500 pl-8">
                    <ul className=" p-1">
                    <div className="flex">

                      <Link to ={`../entrepreneurdetail/${profile.entId}`}>
                      <button 
                      className="button-1 text-sky-700 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full ml-auto"
                      type="submit"
                        onClick={() => {
                          console.log(profile.entId);
                        }}
                        >
                        Update
                      </button>
                      </Link>

                    </div>  
                    </ul>
                  </li> 
                </ul>
              </div>

            {/* Button for Add Product Items */}
            <div className="justify-center ml-28">
                <Link to={`../ideaadd/${profile.entId}`}>
                  <button className="button-1 w-96 h-12  rounded-full ml-[390px] font-extrabold text-sky-700"
                  type="submit" 
                  onClick={() => {
                    // console.log(ProductIdeas._id);
                  }}
                  >
                    Add Innovation Idea
                  </button>
                </Link>
            </div>

            {/* Product Ideas */}
            <div className="flex flex-wrap justify-center gap-8 mt-6 mb-10 drop-shadow-2xl ">
              {getProducts(profile.entId).map((product, i) => (
                <div class="flex p-6 mt-5 ml-5  font-mono bg-sky-100" key={product.prodId}>
                  <div class="flex-none w-48 mb-10 relative z-10  before:absolute before:bottom-1 before:right-1 before:w-full before:h-full before:bg-teal-400">
                    <img
                      src={product.ideaImg}
                      alt=""
                      class="absolute inset-0 w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <form class="flex-auto pl-6" >
                    <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                      <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                        {product.ideaName}
                      </h1>

                      <div class="relative uppercase text-teal-400 ml-3 ">
                      {product.ideaIndustry}
                      <h1 hidden>{i + 1}</h1>
                      </div>
                    </div>

                    <div class="flex space-x-2 text-sm font-medium bg-sky-100 mb-4 w-80 ">
                      <p class="text-xs leading-6 text-slate-500">
                      {product.ideaDescription}
                      
                      </p>
                    </div>

                    <div class="flex space-x-2 text-sm font-medium bg-sky-100 mb-4 w-80 ">
                      <p>Budget : RS.{product.ideaBudget}.00</p>
                      </div>

                    <div class="flex space-x-2 mb- text-sm font-medium">
                      <div class="flex space-x-4">

                        <Link to={`../ideaupdate/${profile.entId}/${product.prodId}`}>
                          <button
                            className="button-1 h-10 rounded-full font-extrabold text-sky-700"
                            type="submit"
                            onClick={() => {
                              console.log(product.prodId);
                            }}
                          >
                            Update
                          </button>                       
                        </Link>

                      </div>
                    </div>
                  </form>
                </div>
              ))}
            </div>

          </div>    
        )}   
      </div>     
    </div>
  );
};

export default EntrepreneurIdeaDetail;
