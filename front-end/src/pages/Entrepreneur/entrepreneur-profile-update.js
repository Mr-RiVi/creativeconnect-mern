import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Background from "../../assets/images/Entrepreneur/background.jpg";

export default function EntrepreneurProfileUpdate() {
  const [profile, setProfile] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/idea/getOneIdea/${id}`);
        const json = await response.json();
        if (response.ok) {
          setProfile(json);
          setUpdatedProfile(json);
        } else {
          throw new Error('Failed to fetch profile');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [id]);

  const handleUpdateProfile = async () => {
    try {
      const updatedProfileData = { ...updatedProfile, };
      const response = await fetch(`http://localhost:3000/api/idea/updateIdea/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfileData),
      });
      if (response.ok) {
        alert("Profile updated successfully");
        // window.location.replace(`../ideadetail/${id}`)
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProfile = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this profile?");
  
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:3000/api/idea/deleteIdea/${id}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          setDeleteSuccess(true);
          alert("Profile Deleted successfully");
          // window.location.href = `../idea`
        } else {
          throw new Error("Failed to delete profile");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-[1200px] justify-center h-auto ">
      <div className="review">
        <img src={Background} alt="" className="fixed h-auto w-auto" />
      </div>

      <div className=" ml-44 p-10 -mt-20">
      {profile && (
        <div class="p-3 bg-gray-400 shadow mt-24 opacity-90 rounded-3xl ">
        <h5 className="text-3xl font-serif mb-3 ml-72">Update Company Details</h5>
          <div class="grid grid-cols-1 md:grid-cols-3">
            {/* profile pic */}
            <div class=""></div>
          </div>

          <div class="justify-center">
            {/* <div key={ProductIdea._id}> */}
            <div class="flex flex-col p-[20px] w-[850px] mt-1 mr-20 ml-5 justify-center m-auto font-serif">
              {/* Mentor private details */}
              <form class="flex flex-col mt-[20px] gap-5 ">

                {/* Company Name */}
                <TextField //single line
                  id="outlined-read-only-input"
                  label="Company Name"
                  defaultValue={profile.entComName}
                  onChange={(e) => setUpdatedProfile({...updatedProfile, entComName: e.target.value})}
                />

                {/* Company Email */}
                <TextField //only 3 lines showing after that extended inside
                  id="outlined-multiline-static"
                  label="Company Email"
                  defaultValue={profile.entComEmail}
                  onChange={(e) => setUpdatedProfile({...updatedProfile, entComEmail: e.target.value})}
                />


                {/* Description */}
                <TextField
                  id="outlined-read-only-input"
                  label="Description"
                  multiline
                  rows={3}
                  defaultValue={profile.entComDes}
                  onChange={(e) => setUpdatedProfile({...updatedProfile, entComDes: e.target.value})}
                />

                
              </form>
            </div>

            <div className="flex justify-end mt-3">
              <button
                className=" w-28 h-10 mr-5 -mt-1 rounded-3xl bg-cyan-700 text-black"
                type="submit"
                onClick={handleUpdateProfile}
              >
                Save
              </button>

              <button
                className="w-28 h-10 mr-[60px] -mt-1 rounded-3xl bg-cyan-700 text-black opacity-95"
                type="submit"
                onClick={handleDeleteProfile}
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
};
