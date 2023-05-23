import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import Background from "../../assets/images/Entrepreneur/background.jpg";
import TextField from '@mui/material/TextField';

const EntrepreneurIdeaAdd = () => {
  const { entId } = useParams();
  const [productIdea, setProductIdea] = useState({
    ideaName: "",
    ideaDescription: "",
    ideaIndustry: "",
    ideaBudget: "",
    ideaImg: "",
  });

  useEffect(() => {
    const fetchProductIdea = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/idea/getOneIdea/${entId}`);
        if (response.ok) {
          const data = await response.json();
          let nextProdId;
          if (data && data.productIdeas && data.productIdeas.length > 0) {
            const lastProdId = data.productIdeas[data.productIdeas.length - 1].prodId;
            nextProdId = parseInt(lastProdId.slice(1)) + 1;
          } else {
            nextProdId = 1;
          }
          setProductIdea(prevState => ({
            ...prevState,
            prodId: `P${nextProdId.toString().padStart(3, "0")}`,
          }));
        } else {
          throw new Error("Failed to get product ideas");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductIdea();
  }, [entId]);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    const imageRef = ref(storage, `/entreprenure/${v4()}`);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then(url => {
        setProductIdea(prevState => ({ ...prevState, ideaImg: url }));
      });
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductIdea(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:3000/api/idea/addProductIdea/${entId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productIdea),
      });
      if (response.ok) {
        alert("Product idea created successfully");
        window.location.replace(`/entrepreneurHome/ideadetail/${entId}`)
        setProductIdea({
          ideaName: "",
          ideaDescription: "",
          ideaIndustry: "",
          ideaBudget: "",
          ideaImg: "",
        });
      } else {
        throw new Error("Failed to create product idea");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <div className="w-[1200px] justify-center h-auto ">
      <div className="review">
        <img src={Background} alt="" className="fixed h-auto w-auto" />
      </div>
      
        <div className=" ml-44 p-10 -mt-24">
        <form onSubmit={handleSubmit}>
          <div class="p-8 bg-gray-400 shadow mt-28 opacity-90 rounded-3xl ">
            <h5 className="text-3xl font-serif mb-3 ml-56">Add New Innovation Idea</h5>
            <div class="grid grid-cols-1 md:grid-cols-3">

              {/* profile pic */}
              <div class="relative">
                <div class="w-96 h-60 bg-gray-500 mx-auto rounded-xl shadow-2xl absolute mt-9 -ml-[470px] flex items-center justify-center text-slate-700 left-[500px] ">
                  <img src={productIdea.ideaImg} alt="" className="w-60"/>
                </div>
                <div className="mr-6">
                  <input
                    className="mt-[300px] ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="default_size"
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>

            <div class="justify-center" >
              {/* <div key={ProductIdea._id}> */}
              <div class="flex flex-col p-[20px] w-96 -mt-[350px] mr-10 justify-center m-auto font-serif">
                {/* Mentor private details */}
                <form class="flex flex-col mt-[20px] gap-6 ">
                  
                  {/* Idea Name */}
                  <TextField //single line
                    id="outlined-read-only-input"
                    label="Idea Name"
                    name="ideaName"
                    value={productIdea.ideaName}
                    onChange={handleChange}
                  />

                  {/* Idea Industry */}
                  <TextField //only 3 lines showing after that extended inside
                    id="outlined-multiline-static"
                    label="Idea Industry"
                    name="ideaIndustry"
                    value={productIdea.ideaIndustry}
                    onChange={handleChange}
                  />

                  {/* Idea Budget*/}
                  <TextField
                    id="outlined-multiline-static"
                    label="Idea Budget"
                    type="number"
                    name="ideaBudget"
                    value={productIdea.ideaBudget}
                    onChange={handleChange}
                  />

                  {/* Idea Description */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Description"
                    name="ideaDescription"
                    value={productIdea.ideaDescription}
                    onChange={handleChange}
                    multiline
                    rows={2}
                  />
                 
                </form>
              </div>

              <div className="flex justify-end mt-3">
                <button
                  className=" w-28 h-10 mr-14 -mt-1 rounded-3xl bg-cyan-700 text-black"
                  type="submit"
                 
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
        </div>
      
    </div>
  );
};

export default EntrepreneurIdeaAdd;
