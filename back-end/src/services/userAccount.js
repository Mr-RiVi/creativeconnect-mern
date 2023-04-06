// import { createUserAccount } from '../repository/userAccount.js';

// // creating mentor details
// export const addUserAccount = async ({
//   fullName,
//   emailAdress,
//   contactNumber,
//   country,
//   password,
//   role,
// }) => {
//   const details = {
//     fullName,
//     emailAdress,
//     contactNumber,
//     country,
//     password,
//     role,
//   };

//   const b = await createUserAccount(details);
//   return b.msg;
// };
import { createUserAccount } from '../repository/userAccount.js';

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
  if (!fullName || !emailAdress || !contactNumber || !country || !password || !role) {
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
