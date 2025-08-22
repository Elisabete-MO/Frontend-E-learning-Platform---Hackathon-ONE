# 🏗️ Arquitetura

A aplicação segue arquitetura em camadas:

- **Frontend (React):**
  - Catálogo de cursos
  - Formulários de inscrição
  - Dashboard do estudante/instrutor/admin

- **Backend (Spring Boot):**
  - **Camada Controller:** expõe endpoints REST.
  - **Camada Service:** regras de negócio.
  - **Camada Repository:** persistência com Spring Data JPA.
  - **Segurança:** autenticação JWT + autorização por perfil.

- **Banco de dados (PostgreSQL):**
  - Tabelas principais:
    - `users (id, name, email, role, password_hash)`
    - `courses (id, title, description, instructor_id)`
    - `enrollments (id, student_id, course_id, progress)`

---

## Fluxo de Autenticação
1. Usuário registra/login → gera JWT.
2. Token enviado no header `Authorization: Bearer <token>`.
3. Spring Security valida token e libera acesso conforme perfil.
