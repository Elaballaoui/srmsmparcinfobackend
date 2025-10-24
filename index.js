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
import express from "express";
import pool from "./config/db.js";

const app = express();
app.use(express.json());

// Exemple de route pour tester la connexion
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "✅ Database connected!",
      time: result.rows[0].now,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
