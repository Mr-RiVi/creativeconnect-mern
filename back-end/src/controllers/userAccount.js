import asyncHandler from '../middleware/async.js';
import makeResponse from '../middleware/response.js';
import { addUserAccount } from '../services/userAccount.js';

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
