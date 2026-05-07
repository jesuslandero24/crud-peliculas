const pool = require("./db");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Error conectando", err);
  } else {
    console.log("PostgreSQL conectado");
  }
});

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// rutas
const peliculasRoutes = require("./routes/peliculas.routes");
app.use("/peliculas", peliculasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});