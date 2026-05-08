-- ==========================================================
-- ANAGRAFICHE DI BASE
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
('b117', 'Funzioni intellettive'), ('d110', 'Guardare'), ('d115', 'Ascoltare'),
('d130', 'Copiare'), ('d131', 'Imparare a giocare'), ('d133', 'Acquisire il linguaggio'),
('d140', 'Imparare a leggere'), ('d145', 'Imparare a scrivere'), ('d150', 'Imparare a calcolare'),
('d155', 'Acquisizione di abilità pratiche'), ('d160', 'Attenzione focalizzata'),
('d161', 'Dirigere l''attenzione'), ('d166', 'Lettura'), ('d170', 'Scrittura'),
('d172', 'Calcolo'), ('d175', 'Risoluzione di problemi'), ('d210', 'Intraprendere un compito singolo'),
('d2102', 'Intraprendere un compito complesso'), ('d220', 'Intraprendere compiti articolati'),
('d230', 'Eseguire la routine quotidiana'), ('d240', 'Gestire la tensione e altre richieste psicologiche'),
('d310', 'Comunicare con - ricevere - messaggi verbali'), ('d315', 'Comunicare con - ricevere - messaggi non verbali'),
('d330', 'Parlare'), ('d335', 'Produrre messaggi non verbali'), ('d350', 'Conversazione'),
('d710', 'Interazioni interpersonali semplici'), ('d720', 'Interazioni interpersonali complesse'),
('d820', 'Istruzione scolastica (partecipazione)'), ('e115', 'Prodotti e tecnologia per l''uso personale quotidiano'),
('e125', 'Prodotti e tecnologia per la mobilità'), ('e130', 'Prodotti e tecnologia per l''istruzione (compensativi)'),
('e310', 'Famiglia ristretta'), ('e330', 'Persone in posizione di autorità (insegnanti)');

-- ==========================================================
--  INDICATORI (CON CATEGORIA DSA/BES/'Entrambi')
-- ==========================================================

-- STRUMENTI COMPENSATIVI
INSERT INTO "Indicatore" ("Tipologia", "Categoria", "Descrizione") VALUES 
('Entrambi', 'Strumenti compensativi', 'PC + controllo sintattico + controllo ortografico + sintesi vocale'),
('Entrambi', 'Strumenti compensativi', 'software specifico per la lettura – scrittura – attività di studio'),
('Entrambi', 'Strumenti compensativi', 'tavola delle coniugazioni verbali'),
('Entrambi', 'Strumenti compensativi', 'cartine geografiche e storiche'),
('Entrambi', 'Strumenti compensativi', 'formulari (realizzati sotto la guida dell’insegnante)'),
('Entrambi', 'Strumenti compensativi', 'calcolatrice'),
('Entrambi', 'Strumenti compensativi', 'audio registratore o lettore MP3 (con cuffia) e/o smart pen'),
('Entrambi', 'Strumenti compensativi', 'vocabolario multimediale anche per la L2 – L3'),
('Entrambi', 'Strumenti compensativi', 'enciclopedia informatica multimediale'),
('DSA', 'Strumenti compensativi', 'testi scolastici in formato digitale'),
('BES', 'Strumenti compensativi', 'testi scolastici con allegati CD ROM/digitali'),
('Entrambi', 'Strumenti compensativi', 'testi in formato PDF – Biblioteca Digitale A.I.D - Audiolibri'),
('Entrambi', 'Strumenti compensativi', 'pianificazione in sequenze delle attività/recupero'),
('Entrambi', 'Strumenti compensativi', 'uso di mappe concettuali (realizzate sotto la guida dell’insegnante)'),
('Entrambi', 'Strumenti compensativi', 'uso di schemi riassuntivi (realizzati sotto la guida dell’insegnante)'),
('Entrambi', 'Strumenti compensativi', 'uso di tablet/smartphone (solo se previsto dalla certificazione)');

-- MISURE DISPENSATIVE
INSERT INTO "Indicatore" ("Tipologia", "Categoria", "Descrizione") VALUES 
('Entrambi', 'Misure dispensative', 'dispensa dalla lettura a voce alta'),
('Entrambi', 'Misure dispensative', 'dispensa dalla scrittura veloce sotto dettatura'),
('Entrambi', 'Misure dispensative', 'dispensa dalla ricopiatura dalla lavagna'),
('Entrambi', 'Misure dispensative', 'dispensa dall’uso del corsivo e dello stampato minuscolo'),
('Entrambi', 'Misure dispensative', 'dispensa dall’uso del vocabolario'),
('Entrambi', 'Misure dispensative', 'dispensa dallo studio mnemonico delle coniugazioni verbali'),
('Entrambi', 'Misure dispensative', 'dispensa dall’uso mnemonico delle formule (presenti nel formulario compilato sotto la guida dell’insegnante)'),
('DSA', 'Misure dispensative', 'dispensa, ove necessario e possibile, dallo studio delle lingue straniere in forma scritta*'),
('Entrambi', 'Misure dispensative', 'riduzione graduale degli esercizi/degli sviluppi delle prove scritte in corso d’anno'),
('Entrambi', 'Misure dispensative', 'riduzione per selezione dei contenuti di studio'),
('Entrambi', 'Misure dispensative', 'dispensa dall’utilizzo di tempi standard'),
('Entrambi', 'Misure dispensative', 'dispensa da un eccessivo carico di compiti con riadattamento e riduzione delle pagine da studiare, senza modificare gli obiettivi formativi');

-- MODALITÀ DI VERIFICA
INSERT INTO "Indicatore" ("Tipologia", "Categoria", "Descrizione") VALUES 
('Entrambi', 'Modalità di verifica', 'tempi più lunghi per le prove scritte'),
('Entrambi', 'Modalità di verifica', 'organizzazione delle prove scritte in più parti'),
('Entrambi', 'Modalità di verifica', 'testo della verifica scritta in formato digitale con carattere e interlinea adeguati al soggetto'),
('Entrambi', 'Modalità di verifica', 'lettura del testo della verifica scritta da parte dell’insegnante o di un tutor'),
('Entrambi', 'Modalità di verifica', 'lettura del testo della verifica scritta con l’utilizzo della sintesi vocale e cuffie'),
('Entrambi', 'Modalità di verifica', 'riduzione/selezione della quantità di esercizi nelle verifiche scritte'),
('Entrambi', 'Modalità di verifica', 'riduzione delle dimensioni standard richieste degli elaborati scritti'),
('Entrambi', 'Modalità di verifica', 'interrogazioni programmate'),
('Entrambi', 'Modalità di verifica', 'più tempo a disposizione per elaborare la risposta orale'),
('Entrambi', 'Modalità di verifica', 'prove orali in compensazione alle prove scritte ad esito negativo'),
('Entrambi', 'Modalità di verifica', 'predisposizione di interrogazioni orali per le materie che prevedono un voto esclusivamente orale in pagella'),
('Entrambi', 'Modalità di verifica', 'utilizzo di prove strutturate negli scritti'),
('Entrambi', 'Modalità di verifica', 'modalità di presentazione delle verifiche (cartacea – al PC – con software specifici – altro ...)'),
('Entrambi', 'Modalità di verifica', 'uso di mediatori didattici durante le interrogazioni (mappe – schemi – immagini concordati/e con l’insegnante)');

-- CRITERI DI VALUTAZIONE
INSERT INTO "Indicatore" ("Tipologia", "Categoria", "Descrizione") VALUES 
('Entrambi', 'Criteri di valutazione', 'non vengono sottolineati gli errori ortografici'),
('Entrambi', 'Criteri di valutazione', 'non vengono valutati gli errori ortografici'),
('Entrambi', 'Criteri di valutazione', 'non si valutano gli errori ortografici in lingua straniera'),
('Entrambi', 'Criteri di valutazione', 'la valutazione delle prove scritte e orali tiene conto del contenuto e non della forma'),
('Entrambi', 'Criteri di valutazione', 'si adotta una valutazione che apprezzi le conoscenze rispetto alle competenze'),
('Entrambi', 'Criteri di valutazione', 'si adotta una valutazione che eviti di privilegiare il nozionismo e un approccio esclusivamente mnemonico'),
('BES', 'Criteri di valutazione', 'si adotta una valutazione calibrata sugli obiettivi didattici e di contenuto eventualmente riformulati (vedi infra)');

-- ==========================================================
-- PERSONALE DOCENTE
-- ==========================================================

INSERT INTO "Docente" ("Email", "Nome", "Cognome", "Ruolo") VALUES
('l.martino.3175@vallauri.edu', 'Luca', 'Martino', 'Admin'),
('m.dimitrov.3065@vallauri.edu', 'Mikhail', 'Dimitrov', 'Admin'),
('f.valsecchi.4421@vallauri.edu', 'Francesco Maria', 'Valsecchi', 'Docente'),
('g.mastroianni.9928@vallauri.edu', 'Giulia Maddalena', 'Mastroianni', 'Docente'),
('a.sangiovanni.1123@vallauri.edu', 'Antonio Alberto', 'Sangiovanni', 'Docente'),
('s.bevilacqua.5564@vallauri.edu', 'Silvia Annamaria', 'Bevilacqua', 'Docente'),
('m.franceschini.7782@vallauri.edu', 'Marco Alessandro', 'Franceschini', 'Docente'),
('e.castelnuovo.3341@vallauri.edu', 'Elena Sofia', 'Castelnuovo', 'Docente'),
('p.montezemolo.2210@vallauri.edu', 'Paolo Giovanni', 'Montezemolo', 'Docente'),
('r.quattrociocche.8890@vallauri.edu', 'Roberta Beatrice', 'Quattrociocche', 'Docente');

-- ==========================================================
-- CLASSI E POOL STUDENTI (600 Record)
-- ==========================================================

DO $$
DECLARE
    ind_list TEXT[] := ARRAY['INF', 'ELT', 'MEC', 'AFM', 'LIC', 'TUR', 'ENE'];
    anni_list TIMESTAMP[] := ARRAY['2024-09-01', '2025-09-01', '2023-09-01'];
    nomi TEXT[] := ARRAY['Gianmarco', 'Pierfrancesco', 'Alessandro', 'Massimiliano', 'Leonardo', 'Francesco Maria', 'Riccardo', 'Edoardo', 'Filippo', 'Christian', 'Mariagiulia', 'Beatrice Sofia', 'Elisabetta', 'Francesca', 'Valentina', 'Margherita', 'Annamaria', 'Alessandra'];
    cognomi TEXT[] := ARRAY['Mastroianni', 'Bevilacqua', 'Franceschini', 'Quattrociocche', 'Castelnuovo', 'Montezemolo', 'Pasqualantonio', 'Tagliaferri', 'Scaramuzzino', 'Dell''Acqua', 'Santamaria', 'Pietrangeli', 'Valsecchi', 'Innocenti', 'Ghirardelli'];
    v_nome TEXT;
    v_cognome TEXT;
    v_email TEXT;
    coord_emails TEXT[];
BEGIN
    -- Popolamento Classi
    SELECT array_agg("Email") INTO coord_emails FROM "Docente" WHERE "Ruolo" IN ('Docente', 'Admin');
    FOR i IN 1..30 LOOP
        INSERT INTO "Classe" ("Classe", "Sezione", "Indirizzo", "Anno_Scolastico", "Coordinatore_Email")
        VALUES (((i-1)%5)+1, CHR(65+(i-1)%5), ind_list[((i-1)%7)+1], anni_list[((i-1)%3)+1], coord_emails[((i-1)%7)+1]);
    END LOOP;

    -- Popolamento 600 Studenti
    FOR i IN 1..600 LOOP
        v_nome := nomi[floor(random() * array_length(nomi, 1) + 1)];
        v_cognome := cognomi[floor(random() * array_length(cognomi, 1) + 1)];
        v_email := lower(replace(v_nome, ' ', '.')) || '.' || lower(replace(v_cognome, ' ', '.')) || '.' || i || '@vallauri.edu';
        INSERT INTO "Studente" ("Email", "Nome", "Cognome", "DSA_BES")
        VALUES (v_email, v_nome, v_cognome, (i % 12 = 0));
    END LOOP;
END $$;

-- ==========================================================
-- RELAZIONI E DOCUMENTI (CON STORICO, SCADUTI E BES)
-- ==========================================================

DO $$
DECLARE
    v_class RECORD;
    v_stud RECORD;
    v_mat RECORD;
    v_ins_mat RECORD; -- Variabile per il loop degli insegnamenti
    v_ind_id INT;
    v_num_stud INT;
    v_offset INT := 0;
    v_stato_scelto TEXT;
    v_tipo_scelto TEXT;
    v_data_app TIMESTAMP;
    v_anno_corrente INT := EXTRACT(YEAR FROM NOW());
BEGIN
    FOR v_class IN SELECT "Id", "Coordinatore_Email", "Anno_Scolastico" FROM "Classe" ORDER BY "Id" LOOP
        v_num_stud := floor(random() * 21);
        
        -- Popolamento Studenti per la classe
        FOR v_stud IN (SELECT "Email", "DSA_BES" FROM "Studente" ORDER BY "Email" LIMIT v_num_stud OFFSET v_offset) LOOP
            -- Relazione base
            INSERT INTO "Classe_Studente" ("Classe_Id", "Studente_Email") VALUES (v_class."Id", v_stud."Email");
            
            -- Se lo studente ha un documento (DSA_BES)
            IF v_stud."DSA_BES" THEN
                
                -- 1. DETERMINAZIONE TIPOLOGIA (Alternanza DSA/BES)
                IF (floor(random()*10)::int % 2 = 0) THEN 
                    v_tipo_scelto := 'DSA';
                ELSE 
                    v_tipo_scelto := 'BES';
                END IF;

                -- 2. DETERMINAZIONE STATO E DATA APPROVAZIONE
                IF (EXTRACT(YEAR FROM v_class."Anno_Scolastico") < v_anno_corrente - 1) THEN
                    v_stato_scelto := 'Scaduto';
                    v_data_app := v_class."Anno_Scolastico" + interval '1 month';
                ELSE
                    IF (floor(random()*10)::int % 2 = 0) THEN
                        v_stato_scelto := 'Validato';
                        v_data_app := NOW();
                    ELSE
                        v_stato_scelto := 'In bozza';
                        v_data_app := NULL;
                    END IF;
                END IF;

                -- 3. INSERIMENTO DOCUMENTO
                INSERT INTO "Documento" ("Studente_Email", "Anno", "Stato", "Tipologia", "Data_Approvazione")
                VALUES (
                    v_stud."Email", 
                    v_class."Anno_Scolastico", 
                    v_stato_scelto::"Stato", 
                    v_tipo_scelto::"Tipologia_Doc", 
                    v_data_app
                );

                -- 4. ICF
                INSERT INTO "Documento_ICF" ("ICF_Codice", "Documento_Anno", "Documento_Studente_Email")
                VALUES ('d160', v_class."Anno_Scolastico", v_stud."Email"), 
                       ('d175', v_class."Anno_Scolastico", v_stud."Email");

                -- 5. Allegato
                INSERT INTO "Allegato" ("Nome", "Percorso", "Documento_Studente_Email", "Documento_Anno")
                VALUES ('Certificato_'||v_tipo_scelto||'_'||v_stud."Email", '/pdp/uploads/'||v_stud."Email"||'.pdf', v_stud."Email", v_class."Anno_Scolastico");

                -- 6. MATERIA_DOCUMENTO_INDICATORE
                FOR v_mat IN (SELECT "Nome" FROM "Materia" ORDER BY random() LIMIT 3) LOOP
                    v_ind_id := (SELECT "Id" FROM "Indicatore" 
                                 WHERE "Tipologia" IN (v_tipo_scelto::"Tipologia_Ind", 'Entrambi') 
                                 ORDER BY random() LIMIT 1);
                    
                    IF v_ind_id IS NOT NULL THEN
                        INSERT INTO "Materia_Documento_Indicatore" 
                            ("Materia_Nome", "Indicatore_Id", "Documento_Anno", "Documento_Studente_Email", "Nota")
                        VALUES 
                            (v_mat."Nome", v_ind_id, v_class."Anno_Scolastico", v_stud."Email", 'Nota specifica per ' || v_tipo_scelto);
                    END IF;
                END LOOP;
            END IF;
        END LOOP;
        
        v_offset := v_offset + v_num_stud;

        -- ==========================================================
        -- MODIFICA: INSEGNAMENTI MULTI-MATERIA
        -- ==========================================================
        -- Per ogni classe, inseriamo 3 insegnamenti di materie diverse
        -- scelte casualmente dal database
        FOR v_ins_mat IN (SELECT "Nome" FROM "Materia" ORDER BY random() LIMIT 3) LOOP
            INSERT INTO "Insegnamento" ("Docente_Email", "Classe_Id", "Materia_Nome")
            VALUES (v_class."Coordinatore_Email", v_class."Id", v_ins_mat."Nome");
        END LOOP;

    END LOOP;
END $$;