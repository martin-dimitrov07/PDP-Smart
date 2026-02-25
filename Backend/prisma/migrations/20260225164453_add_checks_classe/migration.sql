ALTER TABLE "Classe"
    ADD CONSTRAINT check_sezione
    CHECK ("Sezione" ~ '^[A-Z]*$');

ALTER TABLE "Classe"
    ADD CONSTRAINT check_indirizzo
    CHECK ("Indirizzo" ~ '^[A-Z]*$');

ALTER TABLE "Classe"
    ADD CONSTRAINT check_numero
    CHECK("Numero" > 0 AND "Numero" < 6)