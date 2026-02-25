ALTER TABLE "Docente"
    ADD CONSTRAINT check_email
    CHECK ("Email" ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'); -- ~* rende la regex case-insensitive

ALTER TABLE "Docente"
    ADD CONSTRAINT check_nome
    CHECK ("Nome" ~ '^[[:alpha:]\s''-]+$'); -- [:alpha] -> classe POSIX: qualsiasi lettera alfabetica (anche lettere accentate)

ALTER TABLE "Docente"
    ADD CONSTRAINT check_cognome
    CHECK ("Cognome" ~ '^[[:alpha:]\s''-]+$');
