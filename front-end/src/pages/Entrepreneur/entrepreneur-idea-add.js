import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { storage } from "../../components/widgets/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

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
    <div className="w-[1382px] justify-center h-auto bg-sky-200 ">
      <h1>Product Idea Creation</h1>
      <div class="ml-4 w-[300px] h-[200px] bg-slate-300">
        <img src={productIdea.ideaImg} alt=""/>
      </div>

      <div className="flex-auto pl-6 pr-6">
        <form onSubmit={handleSubmit}>
          {/* Image upload */}
          <input
              type="file"
              name="image"
              onChange={handleImageChange}
              required
            />
          <TextField
            id="ideaName"
            label="Idea Name"
            variant="outlined"
            name="ideaName"
            value={productIdea.ideaName}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Idea Description"
            name="ideaDescription"
            value={productIdea.ideaDescription}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Idea Industry"
            name="ideaIndustry"
            value={productIdea.ideaIndustry}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Idea Budget"
            name="ideaBudget"
            value={productIdea.ideaBudget}
            onChange={handleChange}
          />

          <Button type="submit" variant="contained" color="primary">
            Create Product Idea
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EntrepreneurIdeaAdd;
