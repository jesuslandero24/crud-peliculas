# 🎬 CineVerse - CRUD Full Stack de Películas

Aplicación web tipo SPA (Single Page Application) desarrollada para gestionar películas mediante operaciones CRUD completas (Crear, Leer, Actualizar y Eliminar).

El proyecto fue desarrollado usando un frontend en HTML, CSS y JavaScript puro, junto con un backend en Node.js + Express conectado a PostgreSQL.

---

# 🚀 Tecnologías utilizadas

## Frontend
- HTML5
- CSS3
- JavaScript Vanilla

## Backend
- Node.js
- Express.js

## Base de Datos
- PostgreSQL

## Otras herramientas
- Git
- GitHub
- dotenv
- cors
- pg

---

# 📁 Estructura del proyecto

```plaintext
crud-peliculas/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── backend/
│   ├── routes/
│   │   └── peliculas.routes.js
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ✨ Funcionalidades

- ✅ Crear películas
- ✅ Mostrar películas registradas
- ✅ Editar películas
- ✅ Eliminar películas
- ✅ Persistencia real con PostgreSQL
- ✅ API REST con Express
- ✅ Validaciones de formularios
- ✅ SPA sin recargas de página
- ✅ Interfaz responsive y moderna

---

# ⚙️ Instalación del proyecto

## 1. Clonar el repositorio

```bash
git clone https://github.com/jesuslandero24/crud-peliculas.git
```

---

# 🔐 Configuración del backend

## 2. Entrar a la carpeta backend

```bash
cd backend
```

## 3. Instalar dependencias

```bash
npm install
```

---

# 🔑 Variables de entorno

Crear un archivo `.env` dentro de `backend/` usando esta estructura:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=crud_peliculas
DB_PASSWORD=tu_password
DB_PORT=5432
PORT=3000
```

---

# 🗄️ Configuración de PostgreSQL

## Crear la base de datos

```sql
CREATE DATABASE crud_peliculas;
```

## Crear tabla peliculas

```sql
CREATE TABLE peliculas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL,
  anio INT NOT NULL,
  genero VARCHAR(100) NOT NULL,
  calificacion NUMERIC(3,1) NOT NULL
);
```

---

# ▶️ Ejecutar el backend

Desde la carpeta `backend` ejecutar:

```bash
node server.js
```

Si todo funciona correctamente aparecerá:

```bash
Servidor corriendo en http://localhost:3000
PostgreSQL conectado
```

---

# 🌐 Ejecutar el frontend

Abrir el archivo:

```plaintext
frontend/index.html
```

También puede ejecutarse usando la extensión Live Server de VS Code.

---

# 📡 Endpoints API

## Obtener películas

```http
GET /peliculas
```

## Crear película

```http
POST /peliculas
```

## Actualizar película

```http
PUT /peliculas/:id
```

## Eliminar película

```http
DELETE /peliculas/:id
```

---

# 🎨 Características del diseño

- Diseño moderno estilo streaming/cinema
- Hero section interactiva
- Navbar fija
- Glassmorphism
- Cards dinámicas
- Responsive Design

---

# 👨‍💻 Autor

Proyecto académico desarrollado por:

- Jesús Landero

---

# 📌 Estado del proyecto

✅ Proyecto funcional y finalizado