import UserAccount from '../models/userAccount.js';
import mongoose from 'mongoose';

// adding user account details
export const createUserAccount = async (details) => {
  console.log(details);
  try {
    const userAccount = new UserAccount({
      fullName: details.fullName,
      emailAdress: details.emailAdress,
      contactNumber: details.contactNumber,
      country: details.country,
      password: details.password,
      role: details.role,
    });
    await userAccount.save();
    return { msg: 'Details Add Succesfully' };
  } catch (error) {
    console.log(error);
    return { msg: 'Details Not Add' };
  }
};

//Get one user account Details
export const getUserAccount = async (id) => {
  return await UserAccount.findById(id);
};

//Get All user account Details
export const getUserAccounts = async () => {
  try {
    const a = await UserAccount.find().sort({ createdAt: -1 });
    return a;
  } catch (error) {
    return { msg: 'No User accounts found' };
  }
};

//Updating user account Details
export const updateUserAccounts = async (id, ob) => {
  try {
    await UserAccount.findByIdAndUpdate(id, ob);
    return { msg: 'update successfull' };
  } catch (error) {
    return { msg: 'update Error' };
  }
};

// Delete user account Details
export const deleteUserAccounts = async (id) => {
  try {
    await UserAccount.findByIdAndDelete(id);
    return { msg: 'deletion successfull' };
  } catch (error) {
    return { msg: 'deletion not successfull' };
  }
};
