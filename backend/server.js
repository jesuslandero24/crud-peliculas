require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

const PORT = process.env.PORT || 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// probar conexión
pool.query("SELECT NOW()", (err) => {
  if (err) {
    console.log("Error conectando", err);
  } else {
    console.log("PostgreSQL conectado");
  }
});

app.use(cors());
app.use(express.json());

// rutas
const peliculasRoutes = require("./routes/peliculas.routes");
app.use("/peliculas", peliculasRoutes);

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = pool;