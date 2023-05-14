import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import "../../assets/styles/buttonHover.css";

const ProfileDetailUpdate = () => {
  const { id } = useParams();
  const [mentor, setMentor] = useState({});
  const [updateMentor, setUpdatedMentor] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/mentor/viewMentor/${id}`);
        const json = await response.json();
        if (response.ok) {
          setMentor(json.data);
          setUpdatedMentor(json);
          console.log(mentor); // <-- add this line
        } else {
          throw new Error("Failed to fetch profile");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  const handleImageChange = async (e) => {
    try {
      const file = e.target.files[0];
      const storageRef = ref(storage, `images/${v4()}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setUpdatedMentor({ ...updateMentor, mentImg: downloadURL });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const updatedMentorData = { ...updateMentor };
      const response = await fetch(`http://localhost:3000/api/mentor/updateMentor/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMentorData),
      });
      if (response.ok) {
        alert("Profile updated successfully");
        // window.location.replace(`../ideadetail/${id}`)
      } else {
        throw new Error('Failed to update Profile');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">
      <div class="p-16 -mt-10 ">
      {mentor && (
        <div key={mentor._id} class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            {/* profile pic */}
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute -mt-24 flex items-center justify-center text-indigo-500 left-[500px] ">
                <img
                  className="rounded-full"
                  src={updateMentor.mentImg || mentor.mentImg} //profiles photo
                  alt=""
                />
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

            </div>
          </div>

          <div class="mt-28 text-center pb-6 border-b border-gray-400">
            <div className='mb-2 pb-6' style={{ borderBottom: '1px solid gray', borderBottomWidth: '4px' }}>

              <input
                className="bg-gray-50 border border-gray-300 mt-2"
                id="default_size"
                type="file"
                name="image"
                onChange={handleImageChange}
                // required
              />
            </div>

            <p class="mt-5 text-lg text-gray-500">{mentor.phone}</p>
            <p class="text-lg text-gray-500">{mentor.email}</p>
            <p class="text-xl mt-3 font-medium text-gray-600 ">Sri Lanka</p>
          </div>

          <div class=" flex flex-col justify-center ">
            <div key={mentor._id}>
              <div class="flex flex-col p-[20px] w-[1100px] justify-center m-auto">
                {/* Mentor private details */}
                <form class="flex flex-col mt-[20px] gap-6 ">

                  {/* socail media buttons link */}
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      <FacebookIcon
                        sx={{
                          color: "action.active",
                          mr: 1,
                          my: 0.5,
                          fontSize: 40,
                        }}
                      />
                      <TextField
                        id="input-with-sx"
                        label="Facebook Link"
                        variant="standard"
                        sx={{ width: "470px" }}
                        onChange={(e) => setUpdatedMentor({ ...updateMentor, fbLink: e.target.value })}
                        defaultValue={mentor.fbLink}
                      />
                    </Box>

                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      <LinkedInIcon
                        sx={{
                          color: "action.active",
                          mr: 1,
                          my: 0.5,
                          fontSize: 40,
                        }}
                      />
                      <TextField
                        id="input-with-sx"
                        label="LinkedIn Link"
                        variant="standard"
                        sx={{ width: "470px" }}
                        onChange={(e) => setUpdatedMentor({ ...updateMentor, linkedinLink: e.target.value })}
                        defaultValue={mentor.linkedinLink}
                      />
                    </Box>
                  </Box>

                  {/* Name */}
                  <TextField //single line
                    id="outlined-read-only-input"
                    label="Name"
                    onChange={(e) => setUpdatedMentor({ ...updateMentor, mentName: e.target.value })}
                    defaultValue={mentor.mentName}
                  />

                  {/* Description */}
                  <TextField //only 3 lines showing after that extended inside
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={3}
                    onChange={(e) => setUpdatedMentor({ ...updateMentor, description: e.target.value })}
                    defaultValue={mentor.description}
                  />

                  {/* Work History */}
                  <TextField
                    id="outlined-multiline-static"
                    label="Work History"
                    multiline
                    rows={2}
                    onChange={(e) => setUpdatedMentor({ ...updateMentor, workHistory: e.target.value })}
                    defaultValue={mentor.workHistory}
                  />

                  {/* Education */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Education"
                    onChange={(e) => setUpdatedMentor({ ...updateMentor, education: e.target.value })}
                    defaultValue={mentor.education}
                    multiline
                    rows={2}
                  />

                  {/* Language */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Language"
                    multiline
                    onChange={(e) => setUpdatedMentor({ ...updateMentor, language: e.target.value })}
                    defaultValue={mentor.language}
                  />

                  {/* Area of Experties */}
                  <TextField
                    id="outlined-read-only-input"
                    label="Area of Experties"
                    onChange={(e) => setUpdatedMentor({ ...updateMentor, expertiseArea: e.target.value })}
                    defaultValue={mentor.expertiseArea}
                    multiline
                    rows={2}
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

                <Link to={`../profiledetaildelete/${mentor._id}`}>
                  <button
                    className="button-1 w-36 mr-16 -mt-4 rounded-2xl text-gray-600"
                    //value={mentor._id}
                    onClick={(e) => {
                      console.log(e.target.value);
                    }}
                  >
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ProfileDetailUpdate;
