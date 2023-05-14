import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EntrepreneurAdminHome = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState('ideaName');

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
    <div className="w-[1382px] justify-center h-auto bg-gray-200 ">
      {/* search bar */}
      <div className="search-container">
        <div className="border-double border-4 border-sky-300 rounded-3xl ml-32 mt-7 bg-sky-100">
          <input
            className="w-[230px] h-[35px] rounded-3xl text-center ml-2 mt-1 mb-1"
            type="text"
            placeholder="Search by idea name or industry"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="ml-2"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <option value="ideaName">Name</option>
            <option value="ideaIndustry">Industry</option>
          </select>
        </div>
      </div>
      {/* product card views-dynamic */}
      <div className="grid grid-cols-2 gap-8 mt-6 mb-10 drop-shadow-2xl">
        {filteredProfiles.map((profile, i) => (
          profile.productIdeas.map((product) => (
            <div key={product.prodId} className="flex flex-col p-6 mt-5 ml-5 font-mono bg-sky-100">
              <div class="flex flex-col justify-start p-6">
                <h1 hidden>{i + 1}</h1>
                <h5 class="mb-2 text-xl "> {product.ideaImg}</h5>
                <h5 class="mb-2 text-xl "> {product.ideaName}</h5>
                <h5 class="mb-2 text-xl "> {product.ideaIndustry}</h5>
                <p class="text-xs text-neutral-500 dark:text-neutral-300">
                  {product.ideaDescription}
                  cfvefgefefefe egr ee erii rie i
                  gdddd  ee erii rie
                </p>
              </div>
              <div class="flex space-x-2 mt-2 text-sm font-medium">
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
            </div>
          ))
        ))}
      </div>
    </div>
  )
}

export default EntrepreneurAdminHome;
