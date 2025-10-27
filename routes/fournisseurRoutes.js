import express from 'express'; 

import { createFournisseur, } from '../controllers/fournisseurController.js'; 

const router = express.Router(); 

router.post('/', createFournisseur); 
 
export default router; 