# 🎬 CRUD Películas - SPA

Aplicación web tipo SPA que permite gestionar películas usando CRUD completo con Node.js, Express y PostgreSQL.

---

## 🚀 Tecnologías

- HTML
- CSS
- JavaScript
- Node.js
- Express
- PostgreSQL

---

## 📁 Estructura del proyecto

```
frontend/
backend/
```

---

## ⚙️ Instalación

### 1. Clonar proyecto
```bash
git clone <url-del-repositorio>
```

### 2. Backend
```bash
cd backend
npm install
```

---

## 🔐 Variables de entorno

Crear archivo `.env` en backend usando:

```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=crud-peliculas
DB_PASSWORD=tu_password
DB_PORT=5432
PORT=3000
```

---

## 🗄️ Base de datos

Crear la base de datos:

```sql
CREATE DATABASE crud-peliculas;
```

Crear tabla:

```sql
CREATE TABLE peliculas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255),
  director VARCHAR(255),
  anio INT,
  genero VARCHAR(100),
  calificacion NUMERIC(3,1)
);
```

---

## ▶️ Ejecutar backend

```bash
node server.js
```

Servidor:

```
http://localhost:3000
```

---

## 🌐 Ejecutar frontend

Abrir:

```
frontend/index.html
```

---

## ✨ Funcionalidades

- Crear películas
- Listar películas
- Editar películas
- Eliminar películas
- Persistencia en PostgreSQL
- SPA sin recargas

---

## 👨‍💻 Autor

Proyecto académico CRUD Full Stack