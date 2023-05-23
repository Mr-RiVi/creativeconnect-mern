import asyncHandler from '../middleware/async.js'
import makeResponse from '../middleware/response.js'
import { addEntAccount, getAllAccounts, getOneAccount, modifyAccount, removeAccount, getAllProductsService, addProductIdea, getProductIdeas, getProductIdea, updateProductIdea, deleteProductIdea, } from '../services/innoProduct.js'

  //create
  export const createEntAccount = async (req, res) => {
    try {
      const entAccounts = await addEntAccount(req.body);
      res.json(entAccounts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Server Error' });
    }
  };

  //get all
  export const getAllEntAccounts = asyncHandler(async (req, res) => {
    const entAccounts = await getAllAccounts();
    res.json(entAccounts);
  });
  
  //get one
  export const getOneEntAccount = async (req, res) => {
    const { entId } = req.params;
    try {
        const entAccounts = await getOneAccount(entId);
        if (entAccounts.message) {
        return res.status(404).json({ message: entAccounts.message });
        }
        return res.status(200).json(entAccounts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
  };

  // update
export const updateEntAccount = asyncHandler(async (req, res) => {
    const { entId } = req.params;
    const updatedDetails = req.body;
    try {
      const entAccount = await modifyAccount(entId, updatedDetails);
      if (entAccount.message) {
        return res.status(404).json({ message: entAccount.message });
      }
      return res.status(200).json(entAccount);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server Error" });
    }
  });
  
  // delete
  export const deleteEntAccount = asyncHandler(async (req, res) => {
    const { entId } = req.params;
    try {
      const entAccount = await removeAccount(entId);
      if (entAccount.message) {
        return res.status(404).json({ message: entAccount.message });
      }
      return res.status(200).json(entAccount);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server Error" });
    }
  });



  export const getAllProductsController = async (req, res) => {
    try {
      const products = await getAllProductsService();
      res.status(200).json({ products });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };

  //create product idea
  export const createProductIdea = async (req, res) => {
    try {
      const result = await addProductIdea(req.params.entId, req.body);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Server Error' });
    }
  };

  // Get All Product Ideas
  export const getAllProductIdeas = async (req, res) => {
    try {
        const entId = req.params.entId;
        const productIdeas = await getProductIdeas(entId);
        res.json(productIdeas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Server Error' });
    }
  }; 

 //Get One Product Idea
 export const getOneProductIdea = async (req, res) => {
    try {
      const entId = req.params.entId;
      const prodId = req.params.prodId;
      const productIdea = await getProductIdea(entId, prodId);
      if (productIdea.msg) {
        return res.status(404).json(productIdea);
      }
      return res.json(productIdea);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  //Update
  export const updateOneProductIdea = async (req, res) => {
    const { entId, prodId } = req.params;
    const updatedProductIdea = req.body;
    
    try {
      const result = await updateProductIdea(entId, prodId, updatedProductIdea);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Internal server error' });
    }
  };
  
  // Delete Product Idea
  export const deleteOneProductIdea = async (req, res) => {
    const { entId, prodId } = req.params;
  
    try {
      const result = await deleteProductIdea(entId, prodId);
      if (result.msg) {
        return res.status(404).json(result);
      }
      return res.json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };
  