import express from 'express';
import { createEntAccount, getAllEntAccounts, getOneEntAccount, updateEntAccount, deleteEntAccount, getAllProductsController, createProductIdea, getAllProductIdeas, getOneProductIdea, updateOneProductIdea, deleteOneProductIdea, } from '../controllers/innoProduct.js';

const router = express.Router();

router.post('/addIdea', createEntAccount);
router.get('/getAllIdeas', getAllEntAccounts);
router.get('/getOneIdea/:entId', getOneEntAccount);
router.put('/updateIdea/:entId', updateEntAccount);
router.delete('/deleteIdea/:entId', deleteEntAccount);

router.get('/allProducts', getAllProductsController);
router.post('/addProductIdea/:entId', createProductIdea);
router.get('/allProductIdeas/:entId', getAllProductIdeas);
router.get('/oneProductIdea/:entId/:prodId', getOneProductIdea);
router.put('/updateProductIdea/:entId/:prodId', updateOneProductIdea);
router.delete('/deleteProductIdea/:entId/:prodId', deleteOneProductIdea);

export default router;
