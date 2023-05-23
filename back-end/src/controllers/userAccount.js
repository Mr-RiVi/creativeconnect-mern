import asyncHandler from '../middleware/async.js';
import makeResponse from '../middleware/response.js';
import {
  addUserAccount,
  getUserAccountById,
  getAllUserAccounts,
  updateUserAccountById,
  deleteUserAccountsById,
} from '../services/userAccount.js';

//adding user account details
export const userAccountRegister = asyncHandler(async (req, res) => {
  const a = await addUserAccount(req.body);
  //res.send(a)
  return makeResponse({
    res,
    status: 201,
    data: a,
    message: 'New User account has been created',
  });
});

//Get one User Account details
export const getUserAccount = asyncHandler(async (req, res) => {
  const a = await getUserAccountById(req.params.UserAccount_id, req.body);
  return makeResponse({
    res,
    status: 202,
    data: a,
    message: 'Get user account details',
  });
});

//Get all user account details
export const getUserAccounts = asyncHandler(async (req, res) => {
  const a = await getAllUserAccounts();
  res.json(a);
});

//Updating user account Details
export const updateUserAccount = asyncHandler(async (req, res) => {
  const a = await updateUserAccountById(req.params.UserAccount_id, req.body);
  //res.send(a)
  return makeResponse({
    res,
    status: 203,
    data: a,
    message: 'User Account details updated',
  });
});

// Delete user account Details
export const deleteUserAccount = asyncHandler(async (req, res) => {
  const a = await deleteUserAccountsById(req.params.UserAccount_id);
  //res.send(a)
  return makeResponse({
    res,
    status: 204,
    data: a,
    message: 'Delete User Account Details',
  });
});
