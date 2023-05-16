import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const MentorReport = () => {
  const [mentors, setMentors] = useState([]);
  
  //get all mentors
  useEffect(() => {
    const fetchMentors = async () => {
      const response = await fetch("http://localhost:3000/api/mentor/viewAllMentors");
      const json = await response.json();
      if (response.ok) {
        setMentors(json);
        countKeywordsV(json);
        countKeywords(json);
      }
    };

    fetchMentors();
  }, []);

  //check keywords 
  const [keywordCounts, setKeywordCounts] = useState({
    Speaker: 0,
    'Software Engineer': 0,
    'Data Scientist': 0,
    Director: 0,
    Coach: 0,
  });

  const countKeywords = (mentors) => {
    const counts = {
      Speaker: 0,
      'Software Engineer': 0,
      'Data Scientist': 0,
      Director: 0,
      Coach: 0,
    };

    mentors.forEach((mentor) => {
      if (mentor.role.includes('Speaker')) {
        counts.Speaker++;
      }
      if (mentor.role.includes('Software Engineer')) {
        counts['Software Engineer']++;
      }
      if (mentor.role.includes('Data Scientist')) {
        counts['Data Scientist']++;
      }
      if (mentor.role.includes('Director')) {
        counts.Director++;
      }
      if (mentor.role.includes('Coach')) {
        counts.Coach++;
      }
    });

    setKeywordCounts(counts);
  };

  const options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: Object.keys(keywordCounts),
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series = Object.values(keywordCounts);

  //verified or not verified
  const [keywordCountsV, setKeywordCountsV] = useState({
    'not verified': 0,
    'verified': 0,
  });

  const countKeywordsV = (mentors) => {
    const counts = {
      'not verified': 0,
      'verified': 0,
    };

    mentors.forEach((mentor) => {
      if (mentor.mentState === 'not verified') {
        counts['not verified']++;
      }
      if (mentor.mentState === 'verified') {
        counts['verified']++;
      }
    });

    setKeywordCountsV(counts);
  };

  const optionsV = {
    series: [
      {
        data: [keywordCountsV['not verified'], keywordCountsV['verified']],
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
      categories: ['Not Verified', 'Verified'],
      tickAmount: 6,
      labels: {
        formatter: function (value) {
          return parseInt(value); // To display integer values
        },
      },
    },
  };

  return (
    <div className="w-full bg-gray-200">
      {/* check keywords */}
      <div>
        <h1>Graph 1</h1>
        <div id="chart">
            <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width={380}
            />
        </div>
      </div>
      {/* verified or not verified */}
      <div >
      <h1>Graph 2</h1>
        <ReactApexChart options={optionsV} series={optionsV.series} type="bar" height={200} width={600} />
      </div>
    </div>
  );
};

export default MentorReport;
