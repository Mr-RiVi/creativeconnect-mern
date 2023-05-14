import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '../../assets/styles/buttonHover.css';

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
    <div className="w-[1382px] justify-center h-auto bg-sky-200">
      <div className="p-16 -mt-10">
        {profile && (
          <div className="p-8 bg-white shadow mt-8">
            <div className="flex flex-col justify-center">
              <div>
                <div className="flex flex-col p-[20px] w-[1100px] justify-center m-auto">
                  <form className="flex flex-col mt-[20px] gap-6">
                    <TextField
                      id="outlined-read-only-input"
                      label="Company Name"
                      defaultValue={profile.entComName}
                      onChange={(e) => setUpdatedProfile({...updatedProfile, entComName: e.target.value})}
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Company Email"
                      multiline
                      rows={2}
                      defaultValue={profile.entComEmail}
                      onChange={(e) => setUpdatedProfile({...updatedProfile, entComEmail: e.target.value})}
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Company Description"
                      multiline
                      rows={3}
                      defaultValue={profile.entComDes}
                      onChange={(e) => setUpdatedProfile({...updatedProfile, entComDes: e.target.value})}
                    />
                  </form>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    className="button-1 w-36 mr-8 -mt-4 rounded-2xl text-gray-600"
                    onClick={handleUpdateProfile}
                  >
                    Save
                  </button>

                  <button
                    className="button-1 w-36 mr-16 -mt-4 rounded-2xl text-gray-600"
                    onClick={handleDeleteProfile}
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
