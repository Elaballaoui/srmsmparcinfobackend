import Fournisseur from 'models/fournisseur.js'; 

//  Créer un fournisseur 
export const createFournisseur = async (req, res) => { 
  try { 
    const fournisseur = await Fournisseur.create(req.body); 
    res.status(201).json(fournisseur); 

  } catch (error) { 
    res.status(500).json({ message: error.message }); 
  } 
}; 

