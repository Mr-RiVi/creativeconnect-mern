import {
  createUserAccount,
  getUserAccount,
  getUserAccounts,
  updateUserAccounts,
  deleteUserAccounts,
} from '../repository/userAccount.js';

// creating user account details
export const addUserAccount = async ({
  fullName,
  emailAdress,
  contactNumber,
  country,
  password,
  role,
}) => {
  // validate required fields
  if (
    !fullName ||
    !emailAdress ||
    !contactNumber ||
    !country ||
    !password ||
    !role
  ) {
    throw new Error('Missing required fields');
  }

  // validate fullName field
  if (fullName.trim().length === 0) {
    throw new Error('fullName cannot be empty');
  }

  const details = {
    fullName,
    emailAdress,
    contactNumber,
    country,
    password,
    role,
  };

  const b = await createUserAccount(details);
  return b.msg;
};

//Get one User account
export const getUserAccountById = async (id) => {
  return await getUserAccount(id);
};

//Get all User accounts
export const getAllUserAccounts = async () => {
  return await getUserAccounts();
};

//Updating user account Details
export const updateUserAccountById = async (id, ob) => {
  console.log(ob);
  const y = await updateUserAccounts(id, ob);
  return y;
};

// Delete user account Details
export const deleteUserAccountsById = async (id) => {
  return await deleteUserAccounts(id);
};
