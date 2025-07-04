# 📚 BibliotecaAPI

**BibliotecaAPI** es una REST API desarrollada con [NestJS](https://nestjs.com/) y [TypeORM](https://typeorm.io/) para la gestión de libros, autores, categorías y usuarios. Permite registrar, actualizar y consultar libros, así como llevar el control de los préstamos a usuarios.

---

## 🚀 Características

- CRUD completo para:
  - 📘 Libros
  - 👤 Usuarios
  - ✍️ Autores
  - 🏷️ Categorías

- 📖 Relaciones entre entidades:
  - Un **libro** pertenece a un **autor** y a una **categoría**.
  - Un **libro** puede ser prestado a un **usuario** (relación opcional).
  - Un **usuario** puede tener varios libros prestados.

---

## 🧰 Tecnologías usadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- Node.js
- TypeScript

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/juanjosevg12/BibliotecaAPI.git
cd BibliotecaAPI
