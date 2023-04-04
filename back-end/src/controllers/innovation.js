import asyncHandler from '../middleware/async.js';
import {
  insertInnovationToDB,
  retrieveInnovationFromDB,
  retrieveAllInnovationsFromDB,
  updateInnovationsFromDB,
  deleteInnovationsFromDB,
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
    res.status(404).send({ error: 'No document found for the given ID' });
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
