import Fuse from 'fuse.js';

import {
  insertInnovationDetails,
  readInnovationDetails,
  readAllInnovationDetails,
  updateInnovationDetails,
  deleteInnovationDetails,
} from '../repository/innovation.js';

export const insertInnovationToDB = async (innovation) => {
  const {
    title,
    industry,
    stage,
    description,
    marketPotential,
    fundingNeeds,
    intellectualPropertyInformation,
    teamMembers,
    contactInformation,
  } = innovation;

  const innovationDetails = {
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
  };
  const response = await insertInnovationDetails(innovationDetails);
  return response;
};

export const retrieveInnovationFromDB = async (id) => {
  return await readInnovationDetails(id);
};
export const retrieveAllInnovationsFromDB = async () => {
  return await readAllInnovationDetails();
};

export const searchInnovations = async (query) => {
  const options = {
    keys: ['title', 'industry', 'stage', 'description'],
  };
  try {
    const innovations = await readAllInnovationDetails();
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
