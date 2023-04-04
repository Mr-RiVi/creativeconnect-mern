import mongoose from 'mongoose';
import createInnovation from '../models/innovation.js';

export const insertInnovationDetails = async (innovation) => {
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
  try {
    const InnovationCreate = new createInnovation({
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
    });
    return await InnovationCreate.save();
  } catch (error) {
    return error;
  }
};

export const readInnovationDetails = async (id) => {
  const innovation = await createInnovation.findById(id);
  if (!innovation) {
    throw new Error('No document found for the given ID');
  }
  return innovation;
};
export const readAllInnovationDetails = async (id) => {
  const projection = { title: 1, industry: 1, stage: 1, description: 1 };
  const innovation = await createInnovation.find({}, projection);
  if (!innovation) {
    throw new Error('No document found for the given ID');
  }
  return innovation;
};

export const updateInnovationDetails = async (id, innovationObjcet) => {
  const innovation = await createInnovation.findByIdAndUpdate(
    id,
    innovationObjcet,
    {
      new: true,
    }
  );
  if (!innovation) {
    throw new Error('No document found for the given ID');
  }
  return innovation;
};

export const deleteInnovationDetails = async (id) => {
  const innovation = await createInnovation.findByIdAndDelete(id);
  if (!innovation) {
    throw new Error('No document found for the given ID');
  }
  return innovation;
};
