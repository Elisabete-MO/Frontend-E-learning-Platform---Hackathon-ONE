* Diagrama de Arquitetura (alto nível):
```
React (frontend) → Spring Boot API → PostgreSQL
```

* Diagrama de Fluxo de Usuário (Exemplo):
```
Student → Login → Catálogo → Inscrição → Progresso

Instructor → Login → Criar Curso → Publicar

Admin → Login → Dashboard CRUD
```

* Diagrama ER (simplificado):
```
User (1..*) -- (0..*) Enrollment (0..*) -- (1) Course
```
