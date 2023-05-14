import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import TextField from "@mui/material/TextField";
import "../../assets/styles/buttonHover.css";

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
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">
      <div class="p-16 -mt-10 ">
        {ProductIdea && (
          <div class="p-8 bg-white shadow mt-4">
            <div class=" flex flex-col justify-center ">

              <div key={ProductIdea._id}>
                <div class="flex flex-col p-[20px] w-[1100px] justify-center m-auto">
                  {/* Mentor private details */}
                  <form class="flex flex-col gap-6 ">
                    <div class="upload-image ml-4 mt-4 bg-slate-300">
                      <img 
                        className='upload-image w-60'
                        src={updatedProductIdea.ideaImg || ProductIdea.ideaImg}
                        alt=""
                        />
                    </div>
                    <div className='mb-2'>
                      <input
                        className="bg-gray-50 border border-gray-300 mt-2 "
                        id="default_size"
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        // required
                      />
                    </div>

                    {/* Name */}
                    <TextField //single line
                      id="outlined-read-only-input"
                      label="Idea Name"
                      defaultValue={ProductIdea.ideaName}
                      onChange={(e) => setUpdatedProductIdea({ ...updatedProductIdea, ideaName: e.target.value })}
                    />

                    {/* Description */}
                    <TextField //only 3 lines showing after that extended inside
                      id="outlined-multiline-static"
                      label="Idea Description"
                      multiline
                      rows={3}
                      defaultValue={ProductIdea.ideaDescription}
                      onChange={(e) => setUpdatedProductIdea({ ...updatedProductIdea, ideaDescription: e.target.value })}
                    />

                    {/* Work History */}
                    <TextField
                      id="outlined-multiline-static"
                      label="Industry"
                      multiline
                      rows={2}
                      defaultValue={ProductIdea.ideaIndustry}
                      onChange={(e) => setUpdatedProductIdea({ ...updatedProductIdea, ideaIndustry: e.target.value })}
                    />

                    {/* Education */}
                    <TextField
                      id="outlined-read-only-input"
                      label="Budget"
                      multiline
                      rows={2}
                      defaultValue={ProductIdea.ideaBudget}
                      onChange={(e) => setUpdatedProductIdea({ ...updatedProductIdea, ideaBudget: e.target.value })}
                    />

                  </form>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    className="button-1 w-36 mr-8 -mt-4 rounded-2xl text-gray-600"
                    onClick={handleUpdateProductIdea}
                  >
                    Save
                  </button>
                  <button
                    className="button-1 w-36 mr-8 -mt-4 rounded-2xl text-gray-600"
                    onClick={handleDeleteProductIdea}
                  >
                    Delete
                  </button>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
