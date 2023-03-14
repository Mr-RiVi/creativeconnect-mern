import express from 'express';
import { insertInnovationDetails } from '../repository/innovation.js';

export const insertInnovationToDB = async (innovationDetails) => {
  const ans = await insertInnovationDetails(innovationDetails);
  return ans;
};
