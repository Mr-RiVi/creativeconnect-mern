import express from "express"; 
import { insertInnovationDetails } from "../repository/innovation.js";

export const addAccount = async ({fullName, emailAdress, contactNumber, country, password, role}) => {

    const userAccountDetails = {fullName, emailAdress, contactNumber: Number(contactNumber, country, password, role)}

    const ans = await insertInnovationDetails(userAccountDetails);
    return ans;
};