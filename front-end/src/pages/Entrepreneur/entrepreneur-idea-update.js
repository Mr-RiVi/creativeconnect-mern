import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import TextField from "@mui/material/TextField";
import Background from "../../assets/images/Entrepreneur/background.jpg";

export default function EntrepreneurIdeaUpdate() {
  const { entId, prodId } = useParams();
  const [ProductIdea, setProductIdea] = useState([]);
  const [updatedProductIdea, setUpdatedProductIdea] = useState({});
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/idea/oneProductIdea/${entId}/${prodId}`);
        const json = await response.json();
        if (response.ok) {
          setProductIdea(json);
          setUpdatedProductIdea(json);
        } else {
          throw new Error("Failed to fetch profile");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [entId, prodId]);

  const handleImageChange = async (e) => {
    try {
      const file = e.target.files[0];
      const storageRef = ref(storage, `images/${v4()}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setUpdatedProductIdea({ ...updatedProductIdea, ideaImg: downloadURL });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProductIdea = async () => {
    try {
      const updatedProductIdeaData = { ...updatedProductIdea };
      const response = await fetch(`http://localhost:3000/api/idea/updateProductIdea/${entId}/${prodId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProductIdeaData),
      });
      if (response.ok) {
        alert("Product updated successfully");
        // window.location.replace(`../ideadetail/${id}`)
      } else {
        throw new Error('Failed to update Product');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProductIdea = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this Product?");
  
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:3000/api/idea/deleteProductIdea/${entId}/${prodId}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          setDeleteSuccess(true);
          alert("Product Deleted successfully");
          // window.location.href = `../idea`
        } else {
          throw new Error("Failed to delete Product");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className="w-[1200px] justify-center h-auto ">
      <div className="review">
        <img src={Background} alt="" className="fixed h-auto w-auto" />
      </div>
      
        <div className=" ml-44 p-10 -mt-24">
          {ProductIdea && (
            <div class="p-8 bg-gray-400 shadow mt-28 opacity-90 rounded-3xl " key={ProductIdea._id}>
              <h5 className="text-3xl font-serif mb-3 ml-56">Update Innovation Idea</h5>
              <div class="grid grid-cols-1 md:grid-cols-3">

                {/* profile pic */}
                <div class="relative">
                  <div class="w-96 h-60 bg-gray-500 mx-auto rounded-xl shadow-2xl absolute mt-9 -ml-[470px] flex items-center justify-center text-slate-700 left-[500px] ">
                    <img 
                      className='upload-image w-60'
                      src={updatedProductIdea.ideaImg || ProductIdea.ideaImg}
                      alt=""
                    />

                  </div>
                  <div className="mr-6">
                    <input
                      className="mt-[300px] ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="default_size"
                      type="file"
                      name="image"
                      required
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </div>

              <div class="justify-center">
                {/* <div key={ProductIdea._id}> */}
                <div class="flex flex-col p-[20px] w-96 -mt-[350px] mr-10 justify-center m-auto font-serif">
                  {/* Mentor private details */}
                  <form class="flex flex-col mt-[20px] gap-6 ">
                    
                    {/* Idea Name */}
                    <TextField //single line
                      id="outlined-read-only-input"
                      label="Idea Name"
                      defaultValue={ProductIdea.ideaName}
                      onChange={(e) => setUpdatedProductIdea({ ...updatedProductIdea, ideaName: e.target.value })}
                    />

                    {/* Idea Industry */}
                    <TextField //only 3 lines showing after that extended inside
                      id="outlined-multiline-static"
                      label="Idea Industry"
                      defaultValue={ProductIdea.ideaIndustry}
                      onChange={(e) => setUpdatedProductIdea({ ...updatedProductIdea, ideaIndustry: e.target.value })}
                    />

                    {/* Idea Budget*/}
                    <TextField
                      id="outlined-multiline-static"
                      label="Idea Budget"
                      type="number"
                      defaultValue={ProductIdea.ideaBudget}
                      onChange={(e) => setUpdatedProductIdea({ ...updatedProductIdea, ideaBudget: e.target.value })}
                    />

                    {/* Idea Description */}
                    <TextField
                      id="outlined-read-only-input"
                      label="Description"
                      multiline
                      rows={2}
                      defaultValue={ProductIdea.ideaDescription}
                      onChange={(e) => setUpdatedProductIdea({ ...updatedProductIdea, ideaDescription: e.target.value })}
                    />
                  </form>
                </div>

                <div className="flex justify-end mt-3">
                  <button
                    className=" w-28 h-10 mr-5 -mt-4 rounded-3xl bg-cyan-700 text-black"
                    type="submit"
                    onClick={handleUpdateProductIdea}
                  >
                    Save
                  </button>

                  <button
                    className="w-28 h-10 mr-[60px] -mt-4 rounded-3xl bg-cyan-700 text-black opacity-95"
                    type="submit"
                    onClick={handleDeleteProductIdea}
                  >
                    Delete
                  </button>

                </div>
              </div>
            </div>
          )}
        </div>
      
    </div>
  );
}
