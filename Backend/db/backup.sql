-- TABELLE DI BASE

-- STUDENTI
INSERT INTO "Studente" ("Email", "Nome", "Cognome", "DSA_BES") VALUES
('marco.neri@studenti.it', 'Marco', 'Neri', true),
('giulia.conti@studenti.it', 'Giulia', 'Conti', false),
('luca.gallo@studenti.it', 'Luca', 'Gallo', true);

-- CLASSI
INSERT INTO "Classe" ("Id", "Classe", "Sezione", "Indirizzo", "Anno_Scolastico") VALUES
(7, 1, 'A', 'INF', '2024-09-01 00:00:00'),
(8, 2, 'A', 'INF', '2024-09-01 00:00:00');

-- DOCENTI
INSERT INTO "Docente" ("Email", "Nome", "Cognome") VALUES
('m.rossi@scuola.it', 'Mario', 'Rossi'),
('l.bianchi@scuola.it', 'Luca', 'Bianchi'),
('a.verdi@scuola.it', 'Anna', 'Verdi');

-- MATERIE
INSERT INTO "Materia" ("Nome") VALUES
('Italiano'),
('Matematica'),
('Informatica'),
('Inglese');

-- ICF
INSERT INTO "ICF" ("Codice", "Descrizione") VALUES
('d166', 'Lettura'),
('d170', 'Scrittura'),
('d172', 'Calcolo');

-- INDICATORI
INSERT INTO "Indicatore" ("Id", "Tipologia", "Categoria", "Descrizione") VALUES
(7, 'DSA', 'Strumenti compensativi', 'Uso della calcolatrice'),
(8, 'DSA', 'Misure dispensative', 'Dispensa dalla lettura ad alta voce'),
(9, 'Entrambi', 'Modalità di verifica', 'Verifiche orali programmate');

-- TABELLE CON DIPENDENZE SU STUDENTE E CLASSE

-- DOCUMENTI
INSERT INTO "Documento" ("Studente_Email", "Anno", "Stato", "Tipologia", "Data_Approvazione") VALUES
('marco.neri@studenti.it', '2024-09-01 00:00:00', 'Validato', 'DSA', '2024-10-01 00:00:00'),
('luca.gallo@studenti.it', '2024-09-01 00:00:00', 'In bozza', 'BES', NULL);

-- CLASSE_STUDENTE
INSERT INTO "Classe_Studente" ("Classe_Id", "Studente_Email") VALUES
(7, 'marco.neri@studenti.it'),
(7, 'giulia.conti@studenti.it'),
(8, 'luca.gallo@studenti.it');

-- TABELLE CHE DIPENDONO DA DOCUMENTO, INDICATORE, MATERIA, ICF

-- DOCUMENTO_ICF
INSERT INTO "Documento_ICF" ("ICF_Codice", "Documento_Anno", "Documento_Studente_Email") VALUES
('d166', '2024-09-01 00:00:00', 'marco.neri@studenti.it'),
('d170', '2024-09-01 00:00:00', 'marco.neri@studenti.it'),
('d172', '2024-09-01 00:00:00', 'luca.gallo@studenti.it');

-- ALLEGATI
INSERT INTO "Allegato" ("Nome", "Percorso", "Documento_Studente_Email", "Documento_Anno") VALUES
('diagnosi_marco.pdf', '/uploads/diagnosi_marco.pdf', 'marco.neri@studenti.it', '2024-09-01 00:00:00'),
('relazione_dsa.pdf', '/uploads/relazione_dsa.pdf', 'marco.neri@studenti.it', '2024-09-01 00:00:00');

-- MATERIA_DOCUMENTO
INSERT INTO "Materia_Documento" ("Materia_Nome", "Documento_Anno", "Documento_Studente_Email") VALUES
('Italiano', '2024-09-01 00:00:00', 'marco.neri@studenti.it'),
('Matematica', '2024-09-01 00:00:00', 'marco.neri@studenti.it'),
('Informatica', '2024-09-01 00:00:00', 'luca.gallo@studenti.it');

-- MATERIA_INDICATORE
INSERT INTO "Materia_Indicatore" ("Materia_Nome", "Indicatore_Id", "Valore") VALUES
('Matematica', 7, true),
('Italiano', 9, true),
('Informatica', 8, true);

--  INSEGNAMENTI
INSERT INTO "Insegnamento" ("Docente_Email", "Classe_Id", "Materia_Nome") VALUES
('m.rossi@scuola.it', 7, 'Italiano'),
('l.bianchi@scuola.it', 8, 'Matematica'),
('a.verdi@scuola.it', 8, 'Informatica'),
('l.bianchi@scuola.it', 7, 'Matematica');