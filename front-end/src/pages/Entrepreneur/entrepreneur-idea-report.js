import React, { useState, useEffect } from "react";
import ReactApexChart from 'react-apexcharts';

const ProfileReport = () => {
  const [profiles, setProfiles] = useState([]);

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

  const getProductIdeaCount = (entId) => {
    const profile = profiles.find((p) => p.entId === entId);
    if (profile) {
      return profile.productIdeas.length;
    }
    return 0;
  };

  const entrepreneurNames = profiles.map((profile) => profile.entName);
  const productIdeaCounts = profiles.map((profile) => getProductIdeaCount(profile.entId));

  const options = {
    series: [{
      data: productIdeaCounts
    }],
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: ['#008FFB'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: entrepreneurNames,
      labels: {
        style: {
          colors: ['#008FFB'],
          fontSize: '12px'
        }
      },
      title: {
        text: 'Entrepreneur Name',
        style: {
          fontSize: '14px',
          fontWeight: 'bold'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Product Idea Count',
        style: {
          fontSize: '14px',
          fontWeight: 'bold'
        }
      }
    }
  };

  const ideaNames = profiles.map((profile) =>
    profile.productIdeas.map((idea) => idea.ideaName)
  ).flat();
  const ideaBudgets = profiles.map((profile) =>
    profile.productIdeas.map((idea) => idea.ideaBudget)
  ).flat();

  let totalBudget = 0;
  profiles.forEach((profile) => {
    profile.productIdeas.forEach((idea) => {
      totalBudget += idea.ideaBudget;
    });
  });

  const optionsPI = {
    series: [
      {
        data: ideaBudgets,
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ideaNames,
      tickAmount: ideaNames.length,
      labels: {
        formatter: function (value) {
          return value.toString();
        },
      },
      title: {
        text: 'Product Idea Budget',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Product Idea Name',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
        },
      },
    },
  };

  return (
    <div className="w-full bg-slate-300">
      <div className="flex justify-center flex-col">
        <div className="flex justify-center flex-col ml-10 mt-5">
          <h1>Entrepreneur Count: {profiles.length}</h1>
          <h1>Product Idea Count: {productIdeaCounts.reduce((a, b) => a + b, 0)}</h1>
          <h1>Total Budget: {totalBudget}</h1>
        </div>
        <div className="flex flex-row ml-[100px] ">
          <div  className="pr-32">
            <div id="chart1">
              <ReactApexChart options={options} series={options.series} type="bar" height={350} width={500}/>
            </div>
          </div>

          <div className="pr-[73px]">
            <div id="chart2">
              <ReactApexChart options={optionsPI} series={optionsPI.series} type="bar" height={350} width={600} />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default ProfileReport;
