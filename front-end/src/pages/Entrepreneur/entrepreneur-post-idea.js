
import {useState} from "react";
import axios from "axios";


export default function EntrepreneurPostIdea(){    
  
  const Register= () => {
    axios.post('http://localhost:3000/api/idea/addIdea', {
      entName:entName,
      entEmail:entEmail,
      entContact:entContact,
      entComName:entComName,
      entComEmail:entComEmail,
      entComCountry:entComCountry,
      entComDes:entComDes,
      ideaName:ideaName,
      ideaDescription:ideaDescription,
      ideaIndustry:ideaIndustry,
      ideaBudget:ideaBudget
    })  
        
    
  }
    const [entName,setentName]=useState("");    
    const [entEmail, setentEmail] = useState("");
    const [entContact, setContact] = useState("");
    const [entComName, setentComName] = useState("");
    const [entComEmail, setentComEmail] = useState("");
    const [entComCountry, setentComCountry] = useState("");
    const [entComDes, setentComDes] = useState("");
    const [ideaName, setideaName] = useState("");
    const [ideaDescription, setideaDescription] = useState("");
    const [ideaIndustry, setideaIndustry] = useState("");
    const [ideaBudget, setideaBudget] = useState("");

    return ( 
    //   <div className="Header">
    //     <Header/>
          
      
      <div className = "container bg-green-200 rounded-xl shadow border p-8 m-8 ">
        <h1 className = "text-5xl">Idea Form</h1>
        <div className = "mt-6 space-y-6">
          <div className = "-space-y-px rounded-md shadow-sm">
          <div>
            <label  className="sr-only">Entrepreneur Name</label>
            <input id="businessName" name="businessName" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Business Name" onChange={(e)=>{setentName(e.target.value)}}/>
          </div>
         <div>
            <label  className="sr-only">Entrepreneur Email</label>
            <input id="address" name="address" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Address" onChange={(e)=>{setentEmail(e.target.value)}}/>
          </div>
          <div>
            <label  className="sr-only">Entrepreneur Contact Number</label>
            <input id="phone" name="phone" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Phone" onChange={(e)=>{setContact(e.target.value)}}/>
          </div>
          <div>
            <label  className="sr-only">Entrepreneur Company Name</label>
            <input id="email" name="email" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email" onChange={(e)=>{setentComName(e.target.value)}}/>
          </div>
          <div>
            <label  className="sr-only">Entrepreneur Company Email</label>
            <input id="credentialId" name="credentialId" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Credential Id" onChange={(e)=>{setentComEmail(e.target.value)}}/>
          </div>
          <div>
            <label  className="sr-only">Entrepreneur Country</label>
            <input id="transportConditions" name="transportConditions" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Transportation Conditions" onChange={(e)=>{setentComCountry(e.target.value)}}/>
          </div>
          <div>
            <label  className="sr-only">Entrepreneur Company Description</label>
            <input id="OperationalArea" name="OperationalArea" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Operational Area" onChange={(e)=>{setentComDes(e.target.value)}}/>
          </div>
          <div>
            <label  className="sr-only">Innovation Idea Name</label>
            <input id="OperationalArea" name="OperationalArea" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Operational Area" onChange={(e)=>{setideaName(e.target.value)}}/>
          </div>
          <div>
            <label  className="sr-only">Innovation Idea Description</label>
            <input id="OperationalArea" name="OperationalArea" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Operational Area" onChange={(e)=>{setideaDescription(e.target.value)}}/>
          </div>
          <div>
            <label  className="sr-only">Innovation Idea Industry</label>
            <input id="OperationalArea" name="OperationalArea" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Operational Area" onChange={(e)=>{setideaIndustry(e.target.value)}}/>
          </div>
          <div>
            <label  className="sr-only">Innovation Idea Budget</label>
            <input id="OperationalArea" name="OperationalArea" type="text" required className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Operational Area" onChange={(e)=>{setideaBudget(e.target.value)}}/>
          </div>
          <br></br>
            <div>
              <button onClick={Register} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button>
            </div>
          </div>
        </div>
      </div>     
       
    //</div>
    )   

}

                  
                  
               