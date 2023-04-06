import express from 'express';

import {
  userAccountRegister,
  getUserAccount,
  getUserAccounts,
  updateUserAccount,
  deleteUserAccount,
} from '../controllers/userAccount.js';

const userAccount_router = express.Router();

userAccount_router.post('/addUserAccount', userAccountRegister);
userAccount_router.get('/viewAllUserAccounts', getUserAccounts);
userAccount_router.get('/viewUserAccount', getUserAccount);
userAccount_router.put('/updateUserAccount', updateUserAccount);
userAccount_router.delete('/deleteUserAccount', deleteUserAccount);
export default userAccount_router;
