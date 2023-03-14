import express from 'express';

import { insertInnovationToDB } from '../services/innovation.js';

export const insertInnovation = async (req, res) => {
  const ans = await insertInnovationToDB(req.body);
  res.send(ans);
};
