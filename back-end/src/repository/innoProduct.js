import EntDetail from '../models/innoProduct.js';

  //create
  export const createEntAccount = async (details) => {
    try {
      const entAccounts = new EntDetail({
        entId: details.entId,
        entName: details.entName,
        entEmail: details.entEmail,
        entContact: details.entContact,
        entComName: details.entComName,
        entComEmail: details.entComEmail,
        entComCountry: details.entComCountry,
        entComDes: details.entComDes,
        productIdeas: details.productIdeas || [], 
      });
  
      await entAccounts.save();
      return { msg: 'Idea created' };
    } catch (error) {
      console.log(error);
      return { msg: 'Idea not created' };
    }
  };

  //get all
  export const getAllEntAccounts = async () => {
    try {
      const entAccounts = await EntDetail.find({});
      return entAccounts;
    } catch (error) {
      console.log(error);
      return { msg: 'Error getting all entAccounts' };
    }
  };

  //get one
  export const getOneEntAccount = async (entId) => {
    try {
      const entAccounts = await EntDetail.findOne({ entId: entId });
      if (!entAccounts) {
        return { msg: 'entAccounts not found' };
      }
      return entAccounts;
    } catch (error) {
      console.log(error);
      return { msg: 'Error getting entAccounts' };
    }
  };

  // update
  export const updateEntAccount = async (entId, updatedDetails) => {
    try {
      const entAccount = await EntDetail.findOneAndUpdate(
        { entId: entId },
        { $set: updatedDetails },
        { new: true }
      );
      if (!entAccount) {
        return { msg: 'entAccount not found' };
      }
      return { msg: 'entAccount updated successfully' };
    } catch (error) {
      console.log(error);
      return { msg: 'Error updating entAccount' };
    }
  };
  
  // delete
  export const deleteEntAccount = async (entId) => {
    try {
      const entAccount = await EntDetail.findOneAndDelete({ entId: entId });
      if (!entAccount) {
        return { msg: 'entAccount not found' };
      }
      return { msg: 'entAccount deleted successfully' };
    } catch (error) {
      console.log(error);
      return { msg: 'Error deleting entAccount' };
    }
  };


  
  //get all products
  export const getAllProducts = async () => {
    try {
      const entDetails = await EntDetail.find({});
      let products = [];
      entDetails.forEach((entDetail) => {
        products = [...products, ...entDetail.productIdeas];
      });
      return { products };
    } catch (error) {
      console.log(error);
      return { msg: 'Error retrieving products' };
    }
  };
  
  //create product Idea
  export const createProductIdea = async (entId, productIdea) => {
    try {
      const entDetail = await EntDetail.findOne({ entId: entId });
      if (!entDetail) {
        return { msg: 'Profile not found' };
      }
  
      entDetail.productIdeas.push(productIdea);
      await entDetail.save();
      return { msg: 'Product idea added successfully' };
    } catch (error) {
      console.log(error);
      return { msg: 'Product idea not added' };
    }
  };

  //get all product ideas
  export const getAllProductIdeas = async (entId) => {
    try {
      const entDetail = await EntDetail.findOne({ entId: entId });
      if (!entDetail) {
        return { msg: 'Profile not found' };
      }
  
      const productIdeas = entDetail.productIdeas;
      return { productIdeas };
    } catch (error) {
      console.log(error);
      return { msg: 'Error retrieving product ideas' };
    }
  };
  
  //get one product idea
  export const getOneProductIdeaRepo = async (entId, prodId) => {
    try {
      const entDetail = await EntDetail.findOne({ entId });
      if (!entDetail) {
        return { msg: 'Profile not found' };
      }
  
      const productIdea = entDetail.productIdeas.find(
        (idea) => idea.prodId === prodId
      );
  
      if (!productIdea) {
        return { msg: 'Product idea not found' };
      }
  
      return productIdea;
    } catch (error) {
      console.log(error);
      return { msg: 'Error retrieving product idea' };
    }
  };

  //update product idea
  export const updateProductIdeaRepo = async (entId, prodId, updatedProductIdea) => {
    try {
      const entDetail = await EntDetail.findOne({ entId });
      if (!entDetail) {
        return { msg: 'Profile not found' };
      }
  
      const productIdeaIndex = entDetail.productIdeas.findIndex((idea) => idea.prodId === prodId);
      if (productIdeaIndex === -1) {
        return { msg: 'Product idea not found' };
      }
  
      entDetail.productIdeas[productIdeaIndex] = updatedProductIdea;
      await entDetail.save();
  
      return { msg: 'Product idea updated successfully' };
    } catch (error) {
      console.log(error);
      return { msg: 'Error updating product idea' };
    }
  };  

  //delete product idea
  export const deleteProductIdeaRepo = async (entId, prodId) => {
    try {
      const entDetail = await EntDetail.findOne({ entId });
      if (!entDetail) {
        return { msg: 'Profile not found' };
      }
  
      const productIdeaIndex = entDetail.productIdeas.findIndex((idea) => idea.prodId === prodId);
      if (productIdeaIndex === -1) {
        return { msg: 'Product idea not found' };
      }
  
      entDetail.productIdeas.splice(productIdeaIndex, 1);
      await entDetail.save();
  
      return { msg: 'Product idea deleted successfully' };
    } catch (error) {
      console.log(error);
      return { msg: 'Error deleting product idea' };
    }
  };
  
  