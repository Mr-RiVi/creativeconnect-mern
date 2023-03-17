import mongoose from "mongoose";
import UserAccount from "../models/user_account_details.js";

export const insertAccountDelails = async (details) =>{
    console.log(details)
    try{
        const userAccount = new UserAccount({
            fullName: details.fullName,
            emailAdress: details.emailAdress,
            contactNumber: details.contactNumber,
            country: details.country,
            password: details.password,
            role: details.role,
    
        })
        await userAccount.save()
        return { msg: 'Account Create Succesfully' };
    }catch(error){
        console.log(error)
        return { msg: 'Account Error' }
    }
};