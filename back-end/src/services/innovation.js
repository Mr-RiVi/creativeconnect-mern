import Fuse from 'fuse.js';
import mlr from 'ml-regression-multivariate-linear';

import {
  insertInnovationDetails,
  readInnovationDetails,
  readAllInnovationDetails,
  updateInnovationDetails,
  deleteInnovationDetails,
} from '../repository/innovation.js';

export const insertInnovationToDB = async (innovation) => {
  const {
    imageUrl,
    title,
    industry,
    stage,
    description,
    marketPotential,
    fundingNeeds,
    intellectualPropertyInformation,
    teamMembers,
    contactInformation,
    estimatedPrice,
  } = innovation;

  const innovationDetails = {
    imageUrl,
    title,
    industry,
    stage,
    description,
    marketPotential: {
      ...marketPotential,
      competitivePricingAnalysis: {
        ...marketPotential.competitivePricingAnalysis,
      },
    },
    fundingNeeds,
    intellectualPropertyInformation,
    teamMembers,
    contactInformation,
    estimatedPrice,
  };
  const response = await insertInnovationDetails(innovationDetails);
  return response;
};

export const retrieveInnovationFromDB = async (id) => {
  return await readInnovationDetails(id);
};
export const retrieveAllInnovationsFromDB = async () => {
  const projection = {
    imageUrl: 1,
    title: 1,
    industry: 1,
    stage: 1,
    description: 1,
  };
  return await readAllInnovationDetails(projection);
};

export const searchInnovations = async (query) => {
  const options = {
    keys: ['title', 'industry', 'stage', 'description'],
  };
  const projection = { title: 1, industry: 1, stage: 1, description: 1 };
  try {
    const innovations = await readAllInnovationDetails(projection);
    const fuse = new Fuse(innovations, options);
    const searchResults = fuse.search(query);
    return searchResults;
  } catch (err) {
    return err;
  }
};

export const updateInnovationsFromDB = async (id, updatedInfo) => {
  return await updateInnovationDetails(id, updatedInfo);
};

export const deleteInnovationsFromDB = async (id) => {
  return await deleteInnovationDetails(id);
};

export const calculateInnovationValuation = async (id) => {
  let v1 = [];
  //independ variables
  // ..Market size (X1)
  // ..Market demand (X2)
  // ..Level of competition in the target market (X3)
  // ..Time to penetrate the market and achieve profitability (X4)
  // ..Estimated cost (X5)
  // ..Target selling price (X6)
  // .Funding needed (X7)

  const independVariables = {
    marketSize: '',
    demand: '',
    levelOfCompetitionInTargetMarket: '',
    timeToPenetrateMarketAndAchieveProfitability: '',
    estimatedCost: '',
    targetSellingPrice: '',
    fundingNeeded: '',
  };

  const projection = {
    'marketPotential.marketSize': 1,
    'marketPotential.demand': 1,
    'marketPotential.levelOfCompetitionInTargetMarket': 1,
    'marketPotential.timeToPenetrateMarketAndAchieveProfitability': 1,
    'marketPotential.competitivePricingAnalysis.estimatedCost': 1,
    'marketPotential.competitivePricingAnalysis.targetSellingPrice': 1,
    'fundingNeeds.fundingNeeded': 1,
    estimatedPrice: 1,
  };

  const demandMapping = {
    Low: 0,
    Moderate: 1,
    High: 2,
  };
  const levelOfCompetitionInTargetMarketMapping = {
    Low: 0,
    Medium: 1,
    High: 2,
    Unknown: 3,
  };

  const timeToPenetrateMarketAndAchieveProfitabilityMapping = {
    'Less than 6 months': 0,
    '6-12 months': 1,
    '1-2 years': 2,
    '2-3 years': 3,
    'More than 3 years': 4,
  };

  const innovationsData = await readAllInnovationDetails(projection);

  const data = innovationsData.map((innovation) => {
    if (innovation._id.toString() === id) {
      v1 = [
        innovation.marketPotential.marketSize,
        demandMapping[innovation.marketPotential.demand],
        levelOfCompetitionInTargetMarketMapping[
          innovation.marketPotential.levelOfCompetitionInTargetMarket
        ],
        timeToPenetrateMarketAndAchieveProfitabilityMapping[
          innovation.marketPotential
            .timeToPenetrateMarketAndAchieveProfitability
        ],
        innovation.marketPotential.competitivePricingAnalysis.estimatedCost,
        innovation.marketPotential.competitivePricingAnalysis
          .targetSellingPrice,
        innovation.fundingNeeds.fundingNeeded,
      ];
      return null;
    } else {
      return [
        innovation.marketPotential.marketSize,
        demandMapping[innovation.marketPotential.demand],
        levelOfCompetitionInTargetMarketMapping[
          innovation.marketPotential.levelOfCompetitionInTargetMarket
        ],
        timeToPenetrateMarketAndAchieveProfitabilityMapping[
          innovation.marketPotential
            .timeToPenetrateMarketAndAchieveProfitability
        ],
        innovation.marketPotential.competitivePricingAnalysis.estimatedCost,
        innovation.marketPotential.competitivePricingAnalysis
          .targetSellingPrice,
        innovation.fundingNeeds.fundingNeeded,
        innovation.estimatedPrice,
      ];
    }
  });

  const filteredData = data.filter(
    (item) => item !== null && !item.includes(undefined)
  );

  const x = filteredData.map((row) => row.slice(0, -1)); // independent variables
  const y = filteredData.map((row) => row.slice(-1)); // dependent variable
  console.log(x);
  console.log(y);

  const model = new mlr(x, y);

  console.log(model);

  const predictedPrice = model.predict(v1);
  console.log(predictedPrice);
  console.log(v1);
  await updateInnovationDetails(id, { estimatedPrice: Number(predictedPrice) });

  // calcualting r2 value
  const n = y.length;
  const dependVariableArray = y.map((currentValue) => currentValue[0]);
  const yMean =
    dependVariableArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) / n;

  console.log(yMean);

  const SSR = predictedPrice.reduce(
    (a, b, i) => a + Math.pow(b - dependVariableArray[i], 2),
    0
  ); // sum of squared residuals (SSR)
  const SST = dependVariableArray.reduce(
    (a, b) => a + Math.pow(b - yMean, 2),
    0
  ); //total sum of squares (SST)
  const R2 = 1 - SSR / SST;
  console.log('r2value is: ' + R2);

  //intercept
  const intercept = model.weights[0];

  // most significant factor
  const coefficients = model.weights.slice(-7);
  const coefficientsArray = coefficients.map((innerArr) => innerArr[0]);
  for (const [index, key] of Object.keys(independVariables).entries()) {
    independVariables[key] = coefficientsArray[index];
  }

  const coObjectArray = Object.entries(independVariables);
  coObjectArray.sort((a, b) => b[1] - a[1]);
  const sortedIndependVariables = Object.fromEntries(coObjectArray);

  const result = {
    estimatedInnovationPrice: Number(predictedPrice).toFixed(2),
    rSquared: Math.floor(R2 * 100) / 100,
    intercept,
    sortedIndependVariables,
  };

  return result;
};
