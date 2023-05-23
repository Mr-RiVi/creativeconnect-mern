import asyncHandler from '../middleware/async.js';
import {
  insertInnovationToDB,
  retrieveInnovationFromDB,
  retrieveAllInnovationsFromDB,
  searchInnovations,
  updateInnovationsFromDB,
  deleteInnovationsFromDB,
  calculateInnovationValuation,
} from '../services/innovation.js';

export const insertInnovation = async (req, res) => {
  try {
    const insertedInnovation = await insertInnovationToDB(req.body);
    res.send(insertedInnovation);
  } catch (error) {
    res.status(404).send({ error: 'Insertion Faild' });
  }
};

export const getInnovation = async (req, res) => {
  try {
    const retrievedInnovation = await retrieveInnovationFromDB(req.params.id);
    res.send(retrievedInnovation);
  } catch (error) {
    res.status(404).send({ error: 'No document found for the given ID' });
  }
};
export const getAllInnovation = async (req, res) => {
  try {
    const retrievedInnovation = await retrieveAllInnovationsFromDB();
    res.send(retrievedInnovation);
  } catch (error) {
    res.status(404).send({ error: 'No documents found' });
  }
};

export const searchInnovationHandler = async (req, res) => {
  try {
    const searchRes = await searchInnovations(req.query.keyword);
    res.send(searchRes);
  } catch (error) {
    res.status(404).send({ error: 'No document found' });
  }
};

export const modifyInnovation = async (req, res) => {
  try {
    const modifiedInnovation = await updateInnovationsFromDB(
      req.params.id,
      req.body
    );
    res.send(modifiedInnovation);
  } catch (error) {
    res.status(404).send({ error: 'No document found for the given ID' });
  }
};

export const removeInnovation = asyncHandler(async (req, res) => {
  try {
    const removedInnovation = await deleteInnovationsFromDB(req.params.id);
    res.json(removedInnovation);
  } catch (error) {
    res.status(404).send({ error: 'No document found for the given ID' });
  }
});

export const InnovationValuationHandler = asyncHandler(async (req, res) => {
  const estimatedValues = await calculateInnovationValuation(req.params.id);
  try {
    // const estimatedValues = await calculateInnovationValuation(req.params.id);
    res.send(estimatedValues);
  } catch (error) {
    res.status(404).send({ error: "Can't perform analysis" });
  }
});
