-- ==========================================================
-- 1. ANAGRAFICHE DI BASE (Materie, ICF, Indicatori)
-- ==========================================================

-- 25 MATERIE REALI
INSERT INTO "Materia" ("Nome") VALUES
('Matematica'), ('Italiano'), ('Inglese'), ('Storia'), ('Geografia'),
('Informatica'), ('Sistemi e Reti'), ('Tecnologie e Progettazione'), ('Gestione Progetto'),
('Elettronica'), ('Elettrotecnica'), ('Automazione'), ('Meccanica e Macchine'),
('Disegno Tecnico'), ('Tecnologia Meccanica'), ('Economia Aziendale'), ('Diritto'),
('Relazioni Internazionali'), ('Fisica'), ('Chimica'), ('Scienze Naturali'),
('Lingua Spagnola'), ('Lingua Tedesca'), ('Scienze Motorie'), ('Religione');

-- CODICI ICF
INSERT INTO "ICF" ("Codice", "Descrizione") VALUES 
('d160', 'Attenzione focalizzata'), ('d170', 'Scrittura'), 
('d175', 'Risoluzione di problemi'), ('b117', 'Funzioni intellettive');

-- INDICATORI (Misure e Strumenti)
INSERT INTO "Indicatore" ("Tipologia", "Categoria", "Descrizione") VALUES 
('DSA', 'Strumenti compensativi', 'Uso di mappe concettuali e schemi strutturati'),
('DSA', 'Misure dispensative', 'Dispensa dalla lettura ad alta voce in classe'),
('BES', 'Modalità di verifica', 'Tempo aggiuntivo del 30% per ogni prova'),
('BES', 'Criteri di valutazione', 'Valutazione del contenuto prioritaria sulla forma');

-- ==========================================================
-- 2. PERSONALE DOCENTE (10 Record)
-- ==========================================================

INSERT INTO "Docente" ("Email", "Nome", "Cognome", "Ruolo") VALUES
('l.martino.3175@vallauri.edu', 'Luca', 'Martino', 'Admin'),
('m.dimitrov.3065@vallauri.edu', 'Mikhail', 'Dimitrov', 'Admin'),
('f.valsecchi.4421@vallauri.edu', 'Francesco Maria', 'Valsecchi', 'Coordinatore'),
('g.mastroianni.9928@vallauri.edu', 'Giulia Maddalena', 'Mastroianni', 'Coordinatore'),
('a.sangiovanni.1123@vallauri.edu', 'Antonio Alberto', 'Sangiovanni', 'Coordinatore'),
('s.bevilacqua.5564@vallauri.edu', 'Silvia Annamaria', 'Bevilacqua', 'Coordinatore'),
('m.franceschini.7782@vallauri.edu', 'Marco Alessandro', 'Franceschini', 'Coordinatore'),
('e.castelnuovo.3341@vallauri.edu', 'Elena Sofia', 'Castelnuovo', 'Docente'),
('p.montezemolo.2210@vallauri.edu', 'Paolo Giovanni', 'Montezemolo', 'Docente'),
('r.quattrociocche.8890@vallauri.edu', 'Roberta Beatrice', 'Quattrociocche', 'Docente');

-- ==========================================================
-- 3. CLASSI (30 Record su 3 anni scolastici)
-- ==========================================================

DO $$
DECLARE
    ind_list TEXT[] := ARRAY['INF', 'ELT', 'MEC', 'AFM', 'LIC', 'TUR', 'ENE'];
    anni_list TIMESTAMP[] := ARRAY['2024-09-01', '2025-09-01', '2026-09-01'];
    coord_emails TEXT[];
BEGIN
    SELECT array_agg("Email") INTO coord_emails FROM "Docente" WHERE "Ruolo" IN ('Coordinatore', 'Admin');
    FOR i IN 1..30 LOOP
        INSERT INTO "Classe" ("Classe", "Sezione", "Indirizzo", "Anno_Scolastico", "Coordinatore_Email")
        VALUES (
            ((i-1)%5)+1, 
            CHR(65+(i-1)%5), 
            ind_list[((i-1)%7)+1], 
            anni_list[((i-1)%3)+1], 
            coord_emails[((i-1)%7)+1]
        );
    END LOOP;
END $$;

-- ==========================================================
-- 4. POOL DI STUDENTI (600 Record, Nomi moderni e lunghi)
-- ==========================================================

DO $$
DECLARE
    nomi TEXT[] := ARRAY['Gianmarco', 'Pierfrancesco', 'Alessandro', 'Massimiliano', 'Leonardo', 'Francesco Maria', 'Riccardo', 'Edoardo', 'Filippo', 'Christian', 'Mariagiulia', 'Beatrice Sofia', 'Elisabetta', 'Francesca', 'Valentina', 'Margherita', 'Annamaria', 'Alessandra'];
    cognomi TEXT[] := ARRAY['Mastroianni', 'Bevilacqua', 'Franceschini', 'Quattrociocche', 'Castelnuovo', 'Montezemolo', 'Pasqualantonio', 'Tagliaferri', 'Scaramuzzino', 'Dell''Acqua', 'Santamaria', 'Pietrangeli', 'Valsecchi', 'Innocenti', 'Ghirardelli'];
    v_nome TEXT;
    v_cognome TEXT;
    v_email TEXT;
BEGIN
    FOR i IN 1..600 LOOP
        v_nome := nomi[floor(random() * array_length(nomi, 1) + 1)];
        v_cognome := cognomi[floor(random() * array_length(cognomi, 1) + 1)];
        v_email := lower(replace(v_nome, ' ', '.')) || '.' || lower(replace(v_cognome, ' ', '.')) || '.' || i || '@vallauri.edu';
        
        INSERT INTO "Studente" ("Email", "Nome", "Cognome", "DSA_BES")
        VALUES (v_email, v_nome, v_cognome, (i % 12 = 0));
    END LOOP;
END $$;

-- ==========================================================
-- 5. RELAZIONI (Inserimento variabile 0-20 studenti e PDP)
-- ==========================================================

DO $$
DECLARE
    v_class RECORD;
    v_stud RECORD;
    v_mat_nome TEXT;
    v_num_stud INT;
    v_offset INT := 0;
BEGIN
    FOR v_class IN SELECT "Id", "Coordinatore_Email", "Anno_Scolastico" FROM "Classe" ORDER BY "Id" LOOP
        
        -- Numero di studenti casuale (0-20)
        v_num_stud := floor(random() * 21);
        
        -- Assegnazione studenti alla classe
        FOR v_stud IN (SELECT "Email", "DSA_BES" FROM "Studente" ORDER BY "Email" LIMIT v_num_stud OFFSET v_offset) LOOP
            INSERT INTO "Classe_Studente" ("Classe_Id", "Studente_Email") VALUES (v_class."Id", v_stud."Email");
            
            -- Se lo studente ha bisogni speciali, creiamo il PDP completo
            IF v_stud."DSA_BES" THEN
                INSERT INTO "Documento" ("Studente_Email", "Anno", "Stato", "Tipologia", "Data_Approvazione")
                VALUES (v_stud."Email", v_class."Anno_Scolastico", 'Validato', 'DSA', NOW());

                INSERT INTO "Allegato" ("Nome", "Percorso", "Documento_Studente_Email", "Documento_Anno")
                VALUES ('Certificato_Diagnostico_'||v_class."Id"||'.pdf', '/pdp/storage/'||v_stud."Email"||'.pdf', v_stud."Email", v_class."Anno_Scolastico");

                INSERT INTO "Documento_ICF" ("ICF_Codice", "Documento_Anno", "Documento_Studente_Email")
                VALUES ('d160', v_class."Anno_Scolastico", v_stud."Email"), ('d175', v_class."Anno_Scolastico", v_stud."Email");

                -- Associa 3 materie a caso al PDP
                FOR v_mat_nome IN (SELECT "Nome" FROM "Materia" ORDER BY random() LIMIT 3) LOOP
                    INSERT INTO "Materia_Documento" ("Materia_Nome", "Documento_Anno", "Documento_Studente_Email")
                    VALUES (v_mat_nome, v_class."Anno_Scolastico", v_stud."Email");
                END LOOP;
            END IF;
        END LOOP;
        
        v_offset := v_offset + v_num_stud;

        -- ASSEGNAZIONE INSEGNAMENTI (Martino e Dimitrov)
        -- Lorenzo Martino insegna Matematica in circa il 50% delle classi
        IF random() > 0.5 THEN
            INSERT INTO "Insegnamento" ("Docente_Email", "Classe_Id", "Materia_Nome")
            VALUES ('l.martino.3175@vallauri.edu', v_class."Id", 'Matematica');
        END IF;
        
        -- Martin Dimitrov insegna Informatica in circa il 50% delle classi
        IF random() > 0.5 THEN
            INSERT INTO "Insegnamento" ("Docente_Email", "Classe_Id", "Materia_Nome")
            VALUES ('m.dimitrov.3065@vallauri.edu', v_class."Id", 'Informatica');
        END IF;

        -- Il coordinatore insegna Sistemi e Reti
        INSERT INTO "Insegnamento" ("Docente_Email", "Classe_Id", "Materia_Nome")
        VALUES (v_class."Coordinatore_Email", v_class."Id", 'Sistemi e Reti');
    END LOOP;
END $$;

-- ==========================================================
-- 6. RELAZIONI FINALI (Materia_Indicatore)
-- ==========================================================

INSERT INTO "Materia_Indicatore" ("Materia_Nome", "Indicatore_Id", "Valore")
SELECT "Nome", 1, true FROM "Materia" WHERE "Nome" IN ('Matematica', 'Fisica', 'Elettronica', 'Informatica');

INSERT INTO "Materia_Indicatore" ("Materia_Nome", "Indicatore_Id", "Valore")
SELECT "Nome", 3, true FROM "Materia" WHERE "Nome" IN ('Italiano', 'Inglese', 'Diritto', 'Storia');