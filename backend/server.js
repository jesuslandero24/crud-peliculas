require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

pool.query("SELECT NOW()", (err) => {
  if (err) {
    console.log("Error conectando", err);
  } else {
    console.log("PostgreSQL conectado");
  }
});

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

const peliculasRoutes = require("./routes/peliculas.routes");
app.use("/peliculas", peliculasRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});


app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});