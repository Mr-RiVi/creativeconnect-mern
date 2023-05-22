import createInnovation from '../models/innovation.js';

export const insertInnovationDetails = async (innovation) => {
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
  try {
    const InnovationCreate = new createInnovation({
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
    });
    return await InnovationCreate.save();
  } catch (error) {
    return error;
  }
};

export const readInnovationDetails = async (id, projections) => {
  const innovation = await createInnovation.findById(id, projections);
  if (!innovation) {
    throw new Error('No document found for the given ID');
  }
  return innovation;
};

export const readAllInnovationDetails = async (projection) => {
  const innovation = await createInnovation.find({}, projection);
  if (!innovation) {
    throw new Error('No documents found');
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
