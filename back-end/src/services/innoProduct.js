import {
    createEntAccount,
    getAllEntAccounts,
    getOneEntAccount,
    updateEntAccount,
    deleteEntAccount,
    getAllProducts,
    createProductIdea,
    getAllProductIdeas,
    getOneProductIdeaRepo,
    updateProductIdeaRepo,
    deleteProductIdeaRepo,
  } from "../repository/innoProduct.js";
  
  //Create
  export const addEntAccount = async (details) => {
    try {
      const entAccounts = await createEntAccount(details);
      return entAccounts;
    } catch (error) {
      console.log(error);
      return { msg: 'Idea account not created' };
    }
  };

  //get all
  export const getAllAccounts = async () => {
    try {
      const entAccounts = await getAllEntAccounts();
      return entAccounts;
    } catch (error) {
      console.log(error);
      return { msg: 'Error fetching Idea Accounts' };
    }
  };
  
  //get one
  export const getOneAccount = async (entId) => {
    try {
      const entAccounts = await getOneEntAccount(entId);
      if (entAccounts.msg) {
        return { message: entAccounts.msg };
      }
      return entAccounts;
    } catch (error) {
      console.log(error);
      return { message: "Server Error" };
    }
  };

  // update
  export const modifyAccount = async (entId, updatedDetails) => {
    try {
      const entAccount = await updateEntAccount(entId, updatedDetails);
      if (entAccount.msg) {
        return { message: entAccount.msg };
      }
      return entAccount;
    } catch (error) {
      console.log(error);
      return { message: "Server Error" };
    }
  };
  
  // delete
  export const removeAccount = async (entId) => {
    try {
      const entAccount = await deleteEntAccount(entId);
      if (entAccount.msg) {
        return { message: entAccount.msg };
      }
      return entAccount;
    } catch (error) {
      console.log(error);
      return { message: "Server Error" };
    }
  };


  export const getAllProductsService = async () => {
    try {
      const { products } = await getAllProducts();
      return products;
    } catch (error) {
      console.log(error);
      throw new Error('Error retrieving products');
    }
  };

  //create product idea
  export const addProductIdea = async (entId, productIdea) => {
    try {
      const result = await createProductIdea(entId, productIdea);
      return result;
    } catch (error) {
      console.log(error);
      return { msg: 'Product idea not added' };
    }
  };

//Get All
export const getProductIdeas = async (entId) => {
    try {
      const productIdeas = await getAllProductIdeas(entId);
      return productIdeas;
    } catch (error) {
      console.log(error);
      return { msg: 'Error retrieving product ideas' };
    }
  };
  
  //Get One
  export const getProductIdea = async (entId, prodId) => {
    try {
      const productIdea = await getOneProductIdeaRepo(entId, prodId);
      return productIdea;
    } catch (error) {
      console.log(error);
      return { msg: 'Error retrieving product idea' };
    }
  }
  
  //Update
  export const updateProductIdea = async (entId, prodId, updatedProductIdea) => {
    try {
      const result = await updateProductIdeaRepo(entId, prodId, updatedProductIdea);
      if (result.msg) {
        return { msg: result.msg };
      }
      return { msg: 'Product idea updated successfully' };
    } catch (error) {
      console.log(error);
      return { msg: 'Error updating product idea' };
    }
  };
  
  //Delete
  export const deleteProductIdea = async (entId, prodId) => {
    try {
      const result = await deleteProductIdeaRepo(entId, prodId);
      if (result.msg) {
        return { msg: result.msg };
      }
      return { msg: 'Product idea deleted successfully' };
    } catch (error) {
      console.log(error);
      return { msg: 'Error deleting product idea' };
    }
  };
  
  