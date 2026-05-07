const express = require("express");
const router = express.Router();
const pool = require("../db");

function validarPelicula(data) {
  const { titulo, director, anio, genero, calificacion } = data;

  if (!titulo || titulo.trim() === "") {
    return "El título es obligatorio";
  }

  if (!director || director.trim() === "") {
    return "El director es obligatorio";
  }

  if (anio === undefined || isNaN(Number(anio))) {
    return "El año debe ser numérico";
  }

  if (!genero || genero.trim() === "") {
    return "El género es obligatorio";
  }

  if (calificacion === undefined || isNaN(Number(calificacion))) {
    return "La calificación debe ser un número";
  }

  if (Number(calificacion) < 1 || Number(calificacion) > 10) {
    return "La calificación debe estar entre 1 y 10";
  }

  return null;
}

// GET
router.get("/", async (req, res) => {
  try {
    const resultado = await pool.query(
      "SELECT * FROM peliculas ORDER BY id DESC"
    );

    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener películas" });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const error = validarPelicula(req.body);

    if (error) {
      return res.status(400).json({ error });
    }

    const titulo = req.body.titulo.trim();
    const director = req.body.director.trim();
    const anio = Number(req.body.anio);
    const genero = req.body.genero.trim();
    const calificacion = Number(req.body.calificacion);

    const resultado = await pool.query(
      `INSERT INTO peliculas (titulo, director, anio, genero, calificacion)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [titulo, director, anio, genero, calificacion]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar película" });
  }
});

// PUT
router.put("/:id", async (req, res) => {
  try {
    const error = validarPelicula(req.body);

    if (error) {
      return res.status(400).json({ error });
    }

    const id = Number(req.params.id);

    const titulo = req.body.titulo.trim();
    const director = req.body.director.trim();
    const anio = Number(req.body.anio);
    const genero = req.body.genero.trim();
    const calificacion = Number(req.body.calificacion);

    await pool.query(
      `UPDATE peliculas
       SET titulo = $1,
           director = $2,
           anio = $3,
           genero = $4,
           calificacion = $5
       WHERE id = $6`,
      [titulo, director, anio, genero, calificacion, id]
    );

    res.json({ mensaje: "Actualizado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar película" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    await pool.query(
      "DELETE FROM peliculas WHERE id = $1",
      [id]
    );

    res.json({ mensaje: "Eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar película" });
  }
});

module.exports = router;