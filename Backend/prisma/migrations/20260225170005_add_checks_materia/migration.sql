ALTER TABLE "Materia"
    ADD CONSTRAINT check_nome
    CHECK ("Nome" ~ '^[[:alpha:]\s''-]+$'); -- [:alpha] -> classe POSIX: qualsiasi lettera alfabetica (anche lettere accentate)