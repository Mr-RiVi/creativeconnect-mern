import express from 'express';
import { createUserAccount } from '../controllers/userAccount.js';

const userAccount_router = express.Router();

userAccount_router.post('/addUserAccount', createUserAccount);

export default userAccount_router;