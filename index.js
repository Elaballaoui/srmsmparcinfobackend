// const express = require('express')
// const app = express()
// const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// server.js
// const express = require('express')
// const pool = require('./config/db.js')
// import express from "express";
// import pool from "./config/db.js";

// const app = express();
// app.use(express.json());

// Exemple de route pour tester la connexion
// app.get("/test-db", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     res.json({
//       message: "✅ Database connected!",
//       time: result.rows[0].now,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Database connection failed" });
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

import express from 'express'; 

import sequelize from 'config/db.js'; 

import fournisseurRoutes from 'routes/fournisseurRoutes.js'; 

const app = express();  

app.use(express.json()); 

app.use('/api/fournisseurs', fournisseurRoutes); 

 
const PORT = process.env.PORT || 5000; 


// Synchroniser la base et démarrer le serveur 

sequelize.sync().then(() => { 

  console.log('✅ Base de données synchronisée'); 

  app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`)); 

}); 
