import { createUserAccount } from '../repository/userAccount,js';

// creating mentor details
export const addUserAccount = async ({
  fullName,
  emailAdress,
  contactNumber,
  country,
  password,
  role,
}) => {
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
