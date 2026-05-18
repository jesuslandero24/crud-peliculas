require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Verificar conexión PostgreSQL
pool.query("SELECT NOW()", (err) => {
  if (err) {
    console.log("Error conectando", err);
  } else {
    console.log("PostgreSQL conectado");
  }
});

app.use(cors());
app.use(express.json());

// Frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Rutas
const peliculasRoutes = require("./routes/peliculas.routes");

app.use("/peliculas", peliculasRoutes);

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/index.html")
  );
});

app.listen(PORT, () => {
  console.log(
    `Servidor corriendo en http://localhost:${PORT}`
  );
});