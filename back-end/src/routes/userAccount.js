import { express } from 'express';
import { userAccountRegister } from '../controllers/userAccount.js';

const userAccount_router = express.Router();

userAccount_router.post('/addUserAccount', userAccountRegister);

export default userAccount_router;
