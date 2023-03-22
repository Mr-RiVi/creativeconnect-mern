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
