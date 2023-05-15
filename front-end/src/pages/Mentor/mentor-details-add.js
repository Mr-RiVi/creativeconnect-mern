import {useState} from "react";
import axios from "axios";
// import {useNavigate} from "react-router-dom";

import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export default function MentorDetailsAdd(){   
  
  const [mentName,setMentName]=useState("");    
  const [role, setRole] = useState("");
  const [mentId, setMentId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [workHistory, setWorkHistory] = useState("");
  const [education, setEducation] = useState("");
  const [language, setLanguage] = useState("");
  const [expertiseArea, setExpertiseArea] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [mentImg, setmentImg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    // Get the file extension from the file name
    const fileExtension = mentImg.name.split('.').pop().toLowerCase();

    // Check if the file is of the allowed types
    const allowedTypes = ['jpg', 'jpeg', 'png'];
    if (!allowedTypes.includes(fileExtension)) {
      console.log('Invalid file type');
      return;
    }

    const BASE_URL = "http://localhost:3000/api/mentor/addMentor";

    const storageRef = ref(storage, `mentor/${Image.name + v4()}`);

    await uploadBytes(storageRef, mentImg)
      .then(() => {
        console.log("uploaded");
      })
      .catch((err) => {
        console.log(err);
      });

    await getDownloadURL(storageRef)
      .then(async (url) => {
        setmentImg(url); //image set to backend attribute 
        console.log(url);

        const newMentor = {
          mentName,
          role,
          mentId,
          phone,
          email,
          description,
          workHistory,
          education,
          language,
          expertiseArea,
          fbLink,
          linkedinLink,
          mentImg: url
        };

        const response = await fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMentor),
        }).catch((err) => {
          window.alert(err);
        });
        const content = await response.json();
        console.log(content);
      })
      .catch((err) => {
        console.log(err);
      });
  }

    return (      
      <div className = " z-0 bg-green-200 rounded-xl shadow border p-8 m-6 ">
        <h1 className = "text-3xl">Mentor Details Form</h1>
        <form onSubmit={onSubmit}>
        <div className = "mt-6 space-y-6  w-[1270px]">
          <div className = " -space-y-px rounded-ml shadow-xl">

          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="default_size"
            type="file"
            name="image"
            onChange={(e) => {
              setmentImg(e.target.files[0]);
            }}
            required
          />

            <div>
                <label  className="sr-only">Mentor Name</label>
                <input id="mentName" name="mentName" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                placeholder="Mentor Name" onChange={(e)=>{setMentName(e.target.value)}}/>
            </div>
            <div>
                <label  className="sr-only">Mentor Role</label>
                <input id="role" name="role" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Mentor Role" onChange={(e)=>{setRole(e.target.value)}}/>
            </div>
            <div>
                <label  className="sr-only">Mentor ID</label>
                <input id="mentId" name="mentId" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                placeholder="Mentor ID" onChange={(e)=>{setMentId(e.target.value)}}/>
            </div>
            <div>
                <label  className="sr-only">Phone</label>
                <input id="phone" name="phone" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">Email</label>
                <input id="email" name="email" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <label  className="sr-only">Description</label>
                <input id="description" name="description" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">WorkHistory</label>
                <input id="workHistory" name="workHistory" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="WorkHistory" onChange={(e)=>{setWorkHistory(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">Education</label>
                <input id="education" name="education" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Education" onChange={(e)=>{setEducation(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">Language</label>
                <input id="language" name="language" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Language" onChange={(e)=>{setLanguage(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">ExpertiseArea</label>
                <input id="expertiseArea" name="expertiseArea" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="ExpertiseArea" onChange={(e)=>{setExpertiseArea(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">FB Link</label>
                <input id="fbLink" name="fbLink" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="FB Link" onChange={(e)=>{setFbLink(e.target.value)}}/>
            </div>

            <div>
                <label  className="sr-only">Linkedin Link</label>
                <input id="linkedinLink" name="linkedinLink" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Linkedin Link" onChange={(e)=>{setLinkedinLink(e.target.value)}}/>
            </div>

            <br></br>
            <div>
                <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Register</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    )   
}

                  
                    