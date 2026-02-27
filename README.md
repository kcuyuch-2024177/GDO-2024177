📘 Sprint 3 – Módulo de Comentarios
📌 Descripción

Implementación del módulo de comentarios para el sistema Gestión de Opiniones (GDO).

Incluye operaciones CRUD protegidas mediante autenticación JWT y validaciones por endpoint.

🏗 Arquitectura

Estructura basada en separación por capas:
src/comments/
├── comment.model.js
├── comment.service.js
├── comment.controller.js
└── comment.routes.js

🔐 Autenticación

Se utiliza JWT (JSON Web Token).

Cada request protegida debe enviar:

Authorization: Bearer <token>

El middleware:

Verifica el token

Extrae sub como authorId

Adjunta los datos en req.user

La API es stateless (no utiliza sesiones).

📌 Endpoints
Crear comentario

POST /GDO/v1/comments

Obtener comentarios por publicación

GET /GDO/v1/comments/publication/:publicationId

Actualizar comentario

PUT /GDO/v1/comments/:commentId

Eliminar comentario

DELETE /GDO/v1/comments/:commentId
