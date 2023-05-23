import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import h1 from "../../assets/images/Entrepreneur/ThermalJacket.jpg";
import home1 from "../../assets/images/Entrepreneur/bg5.jpg";
import e1 from "../../assets/images/Entrepreneur/e1.jpg";
import e2 from "../../assets/images/Entrepreneur/e2.jpg";
import e3 from "../../assets/images/Entrepreneur/e3.jpg";
import e4 from "../../assets/images/Entrepreneur/e4.jpg";
import e5 from "../../assets/images/Entrepreneur/e5.jpg";

import "../../assets/styles/flipCard.css";

const EntrepreneurAdminHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState('ideaName');

  //reponsive images
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) =>
        currentImageIndex < 2 ? currentImageIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const images = [e1, e2, e5];

  //All Product card views
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/idea/getAllIdeas");
        const json = await response.json();
        console.log("json:", json);
        if (response.ok) {
          setProfiles(json);
        } else {
          throw new Error("Failed to fetch profiles");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfiles();
  }, []);

  const filteredProfiles = profiles.filter((profile) => {
    return profile.productIdeas.some((product) => {
      if (searchBy === 'ideaName') {
        return product.ideaName.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (searchBy === 'ideaIndustry') {
        return product.ideaIndustry.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
  }).map((profile) => {
    return {
      ...profile,
      productIdeas: profile.productIdeas.filter((product) => {
        if (searchBy === 'ideaName') {
          return product.ideaName.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (searchBy === 'ideaIndustry') {
          return product.ideaIndustry.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
      })
    };
  });

  const getProductIdea = (entId, prodId) => {
    const profile = profiles.find((p) => p.entId === entId);
    if (profile) {
      const productIdea = profile.productIdeas.find((idea) => idea.prodId === prodId);
      if (productIdea) {
        return productIdea;
      }
    }
    return null;
  };

  return (
    <div className="w-[1385px] justify-center h-auto bg-gray-200 ">

      {/* blue coloure border with reponsive images */}
      <div className="relative h-[470px] bg-slate-700 overflow-hidden">
        <img src={home1} alt="" className="h-auto w-full" />
        <div className="absolute top-0 right-0">
          <img
            src={images[currentImageIndex]}
            alt=""
            className="h-auth-[410px] w-[410px] object-cover max-h-full mt-6 mr-14 rounded-3xl border-double border-4 border-slate-400"
          />
        </div>

        {/* This is for text in the image */}
        <div className="absolute top-0 left-10  h-full w-full flex  items-center">
          <div className="">
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-3">Increase your</h1>
              <h1 className="text-4xl font-bold mb-3">business growth & </h1>
              <h1 className="text-4xl font-bold mb-3">revenue to the next level</h1>
              <h1 className="text-4xl font-bold mb-3">level</h1>
            </div>

            <div className="max-w-xl bg-black bg-opacity-30 shadow-md py-6 px-8 rounded-lg mt-6 mb-8">
              <p className="text-2xl font-semibold ">
              “My biggest motivation? Just to keep challenging myself. — every day I’m learning something new.”
-Richard Branson, founder Virgin Group
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* This is the entrepunar card views-static */}
      <div className="flex flex-wrap justify-center gap-8 mt-6 mb-10 bg-slate-200">
        <div class="flip-card-container">

          {/* 1-card */}
          <div class="flip-card mr-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="flex-wrap rounded-xl" src={e1} alt="" />
                <p class="title">Sajeev Rajaputhra</p>
                {/* <p>Hover Me</p> */}
              </div>
              <div class="flip-card-back">
            
                <p class="title1 font-light text-base text-center">Sajeev Rajaputhra, President and Chief Executive Officer of the SAS3 
                  Trading Company. He was born in Sri Lanka and moved to Japan. And has been 
                  living in Japan for over 30 years and attended international schools 
                  to pursue his studies. He currently owns a multitude of businesses 
                  that span across multiple countries.</p>
                {/* <p>Leave Me</p> */}
              </div>
            </div>
          </div>

          {/* 2-card */}
          <div class="flip-card mr-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="flex-wrap rounded-xl " src={e2} alt="" />
                <p class="title ">Jiffry </p>
                <p class="title "> Zulfer</p> 
                
                {/* <p>Hover Me</p> */}
              </div>
              <div class="flip-card-back">
            
                <p class="title1 font-light text-base text-center">The founder of PickMe, the Sri Lankan version of Uber, and he has 
                  worked to understand more about GPS and GIS system, coupled with the 
                  knowledge of good business.</p>
                {/* <p>Leave Me</p> */}
              </div>
            </div>
          </div>

          {/* 3-card */}
          <div class="flip-card mr-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="flex-wrap rounded-xl mb-3" src={e3} alt="" />
                <p class="title">Kamaj </p>
                <p class="title">Silva</p>

                {/* <p>Hover Me</p> */}
              </div>
              <div class="flip-card-back">
            
                <p class="title1 font-light text-base text-center">Kamaj Silva, is a Sri Lankan born, Canadian entrepreneur and serial 
                  sneakerhead as well as a musician. He is the Founder and CEO of Sneakertub, 
                  the world's first and only Sneaker subscription service delivering a 
                  monthly package of several world renowned commercial shoe brands.</p>
                {/* <p>Leave Me</p> */}
              </div>
            </div>
          </div>

          {/* 4-card */}
          <div class="flip-card mr-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="flex-wrap rounded-xl" src={e4} alt="" />
                <p class="title">Fernando Raymond</p>
                {/* <p>Hover Me</p> */}
              </div>
              <div class="flip-card-back">
            
                <p class="title1 font-light text-base text-center">Fernando Raymond is one of the top digital entrepreneurs in the world.
                  Born in Sri Lanka, Fernando is currently based in London, the UK, and 
                  has the SEO and online marketing agency ClickDo™Born in Sri Lanka, 
                  Fernando is currently based in London, the UK, and has the SEO and 
                  online marketing agency ClickDo™</p>
                {/* <p>Leave Me</p> */}
              </div>
            </div>
          </div>

          {/* 5-card */}
          <div class="flip-card mr-3">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="flex-wrap rounded-xl" src={e5} alt="" />
                <p class="title">Dhanika</p>
                <p class="title">Perera</p>

                {/* <p>Hover Me</p> */}
              </div>
              <div class="flip-card-back">
            
                <p class="title1 font-light text-base text-center">Dhanika Perera is the founder of Bhasha and Payhere, which is a solution 
                  to the problem of Sri Lankans not having a proper online transaction 
                  method as PayPal wasn’t available in SriLanka.</p>
                {/* <p>Leave Me</p> */}
              </div>
            </div>
          </div>
          
        </div>

      </div>

      <div className="absolute,  ml-80">
        <div className="flex flex-row">
          <h1 className="text-5xl  text-black font-serif mt-5 mb-0 ml-52 drop-shadow-lg shadow-black">
            Innovation Ideas
          </h1>

          {/* search bar */}
          <div className="search-container">
            <div className="border-double border-4 border-sky-300 rounded-3xl ml-20 mt-7 bg-sky-100">
              <input
                className="w-[230px] h-[35px] rounded-3xl text-center ml-2 mt-1 mb-1"
                type="text"
                placeholder="Search by idea name or industry"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="rounded-3xl ml-1 mr-2"
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
              >
                <option value="ideaName">Name</option>
                <option value="ideaIndustry">Industry</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      

      {/* product card views-dynamic */}
      <div className="flex flex-wrap justify-center gap-8 mt-6 mb-10 drop-shadow-2xl">
      {filteredProfiles.map((profile, i) => (
          profile.productIdeas.map((product) => (
              <div key={product.prodId} className="flex p-6 mt-5 ml-5 font-mono bg-sky-100">
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
                {/* <h1 hidden>{i + 1}</h1> */}
                </div>
              </div>

              <div class="flex space-x-2 text-sm font-medium bg-sky-100 mb-4 w-80 pb-2 ">
                <p class="text-xs leading-6 text-slate-500">
                {product.ideaDescription}
                </p>
              </div >
              
              <div class="flex space-x-2 text-sm font-medium bg-sky-100 mb-4 w-80 ">
              <p>Budget : RS.{product.ideaBudget}.00</p>
              </div>

              <div class="flex space-x-2 mb- text-sm font-medium">
                <div class="flex space-x-4">

                <Link to={`../ideadetail/${profile.entId}`}>
                    <button
                      class="button-1 rounded-full font-extrabold text-sky-700"
                      type="submit"
                      onClick={() => {
                        const productIdea = getProductIdea(profile.entId, product.prodId);
                        console.log(productIdea);
                      }}
                    >
                      View More
                    </button>
                  </Link>

                </div>
              </div>

            </form>
          </div>
))
))}
      </div>

    </div>
  )
}

export default EntrepreneurAdminHome;
