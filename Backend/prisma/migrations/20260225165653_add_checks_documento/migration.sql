ALTER TABLE "Documento"
    ADD CONSTRAINT check_stato
    CHECK("Stato" IN ('Valido', 'In Bozza'));
  
ALTER TABLE "Documento"
    ADD CONSTRAINT check_tipo
    CHECK("Tipo" IN ('BES', 'DSA'));