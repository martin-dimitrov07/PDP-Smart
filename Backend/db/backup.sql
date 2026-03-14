--
-- PostgreSQL database dump
--

\restrict QhpaYFbeITKTaijugOBpoiF09evrwlhd6XzyLAOf21izL4x820CgtRVcDEAUp8Q

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2026-03-14 17:35:10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 20058)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 5143 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- TOC entry 881 (class 1247 OID 20098)
-- Name: Categoria; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Categoria" AS ENUM (
    'Strumenti compensativi',
    'Misure dispensative',
    'Modalità di verifica',
    'Criteri di valutazione'
);


ALTER TYPE public."Categoria" OWNER TO postgres;

--
-- TOC entry 872 (class 1247 OID 20076)
-- Name: Stato; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Stato" AS ENUM (
    'In bozza',
    'Validato',
    'Scaduto'
);


ALTER TYPE public."Stato" OWNER TO postgres;

--
-- TOC entry 875 (class 1247 OID 20084)
-- Name: Tipologia_Doc; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Tipologia_Doc" AS ENUM (
    'DSA',
    'BES'
);


ALTER TYPE public."Tipologia_Doc" OWNER TO postgres;

--
-- TOC entry 878 (class 1247 OID 20090)
-- Name: Tipologia_Ind; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Tipologia_Ind" AS ENUM (
    'DSA',
    'BES',
    'Entrambi'
);


ALTER TYPE public."Tipologia_Ind" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 230 (class 1259 OID 20170)
-- Name: Allegato; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Allegato" (
    "Id" integer NOT NULL,
    "Nome" text NOT NULL,
    "Percorso" text NOT NULL,
    "Documento_Id" integer NOT NULL
);


ALTER TABLE public."Allegato" OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 20169)
-- Name: Allegato_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Allegato_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Allegato_Id_seq" OWNER TO postgres;

--
-- TOC entry 5145 (class 0 OID 0)
-- Dependencies: 229
-- Name: Allegato_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Allegato_Id_seq" OWNED BY public."Allegato"."Id";


--
-- TOC entry 222 (class 1259 OID 20116)
-- Name: Classe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Classe" (
    "Id" integer NOT NULL,
    "Classe" integer NOT NULL,
    "Sezione" character(1) NOT NULL,
    "Indirizzo" character varying(5) NOT NULL,
    "Anno_Scolastico" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Classe" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 20115)
-- Name: Classe_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Classe_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Classe_Id_seq" OWNER TO postgres;

--
-- TOC entry 5146 (class 0 OID 0)
-- Dependencies: 221
-- Name: Classe_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Classe_Id_seq" OWNED BY public."Classe"."Id";


--
-- TOC entry 233 (class 1259 OID 20200)
-- Name: Classe_Studente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Classe_Studente" (
    "Classe_Id" integer NOT NULL,
    "Studente_Email" text NOT NULL
);


ALTER TABLE public."Classe_Studente" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 20107)
-- Name: Docente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Docente" (
    "Email" character varying(255) NOT NULL,
    "Nome" character varying(50) NOT NULL,
    "Cognome" character varying(50) NOT NULL
);


ALTER TABLE public."Docente" OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 20138)
-- Name: Documento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Documento" (
    "Id" integer NOT NULL,
    "Studente_Email" character varying(255) NOT NULL,
    "Anno" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "Stato" public."Stato" NOT NULL,
    "Tipologia" public."Tipologia_Doc" NOT NULL,
    "Data_Approvazione" timestamp(3) without time zone
);


ALTER TABLE public."Documento" OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 20228)
-- Name: Documento_ICF; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Documento_ICF" (
    "ICF_Codice" text NOT NULL,
    "Documento_Id" integer NOT NULL
);


ALTER TABLE public."Documento_ICF" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 20137)
-- Name: Documento_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Documento_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Documento_Id_seq" OWNER TO postgres;

--
-- TOC entry 5147 (class 0 OID 0)
-- Dependencies: 224
-- Name: Documento_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Documento_Id_seq" OWNED BY public."Documento"."Id";


--
-- TOC entry 231 (class 1259 OID 20182)
-- Name: ICF; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ICF" (
    "Codice" text NOT NULL,
    "Descrizione" text
);


ALTER TABLE public."ICF" OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 20157)
-- Name: Indicatore; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Indicatore" (
    "Id" integer NOT NULL,
    "Tipologia" public."Tipologia_Ind" NOT NULL,
    "Categoria" public."Categoria" NOT NULL,
    "Descrizione" text NOT NULL
);


ALTER TABLE public."Indicatore" OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 20156)
-- Name: Indicatore_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Indicatore_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Indicatore_Id_seq" OWNER TO postgres;

--
-- TOC entry 5148 (class 0 OID 0)
-- Dependencies: 227
-- Name: Indicatore_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Indicatore_Id_seq" OWNED BY public."Indicatore"."Id";


--
-- TOC entry 232 (class 1259 OID 20190)
-- Name: Insegnamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Insegnamento" (
    "Docente_Email" text NOT NULL,
    "Classe_Id" integer NOT NULL,
    "Materia_Nome" text NOT NULL
);


ALTER TABLE public."Insegnamento" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 20150)
-- Name: Materia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Materia" (
    "Nome" character varying(50) NOT NULL
);


ALTER TABLE public."Materia" OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 20219)
-- Name: Materia_Documento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Materia_Documento" (
    "Materia_Nome" text NOT NULL,
    "Documento_Id" integer NOT NULL
);


ALTER TABLE public."Materia_Documento" OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 20209)
-- Name: Materia_Indicatore; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Materia_Indicatore" (
    "Materia_Nome" text NOT NULL,
    "Indicatore_Id" integer NOT NULL,
    "Valore" boolean NOT NULL,
    "Nota" text
);


ALTER TABLE public."Materia_Indicatore" OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 20128)
-- Name: Studente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Studente" (
    "Email" character varying(255) NOT NULL,
    "Nome" character varying(50) NOT NULL,
    "Cognome" character varying(50) NOT NULL,
    "DSA_BES" boolean NOT NULL
);


ALTER TABLE public."Studente" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 20059)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- TOC entry 4930 (class 2604 OID 20173)
-- Name: Allegato Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Allegato" ALTER COLUMN "Id" SET DEFAULT nextval('public."Allegato_Id_seq"'::regclass);


--
-- TOC entry 4925 (class 2604 OID 20119)
-- Name: Classe Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Classe" ALTER COLUMN "Id" SET DEFAULT nextval('public."Classe_Id_seq"'::regclass);


--
-- TOC entry 4927 (class 2604 OID 20141)
-- Name: Documento Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Documento" ALTER COLUMN "Id" SET DEFAULT nextval('public."Documento_Id_seq"'::regclass);


--
-- TOC entry 4929 (class 2604 OID 20160)
-- Name: Indicatore Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Indicatore" ALTER COLUMN "Id" SET DEFAULT nextval('public."Indicatore_Id_seq"'::regclass);


--
-- TOC entry 5131 (class 0 OID 20170)
-- Dependencies: 230
-- Data for Name: Allegato; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Allegato" ("Id", "Nome", "Percorso", "Documento_Id") FROM stdin;
1	diagnosi_marco.pdf	/uploads/diagnosi_marco.pdf	1
2	relazione_dsa.pdf	/uploads/relazione_dsa.pdf	1
\.


--
-- TOC entry 5123 (class 0 OID 20116)
-- Dependencies: 222
-- Data for Name: Classe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Classe" ("Id", "Classe", "Sezione", "Indirizzo", "Anno_Scolastico") FROM stdin;
7	1	A	INF	2024-09-01 00:00:00
8	2	A	INF	2024-09-01 00:00:00
\.


--
-- TOC entry 5134 (class 0 OID 20200)
-- Dependencies: 233
-- Data for Name: Classe_Studente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Classe_Studente" ("Classe_Id", "Studente_Email") FROM stdin;
7	marco.neri@studenti.it
7	giulia.conti@studenti.it
8	luca.gallo@studenti.it
\.


--
-- TOC entry 5121 (class 0 OID 20107)
-- Dependencies: 220
-- Data for Name: Docente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Docente" ("Email", "Nome", "Cognome") FROM stdin;
m.rossi@scuola.it	Mario	Rossi
l.bianchi@scuola.it	Luca	Bianchi
a.verdi@scuola.it	Anna	Verdi
\.


--
-- TOC entry 5126 (class 0 OID 20138)
-- Dependencies: 225
-- Data for Name: Documento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Documento" ("Id", "Studente_Email", "Anno", "Stato", "Tipologia", "Data_Approvazione") FROM stdin;
1	marco.neri@studenti.it	2024-09-01 00:00:00	Validato	DSA	2024-10-01 00:00:00
2	luca.gallo@studenti.it	2024-09-01 00:00:00	In bozza	BES	\N
\.


--
-- TOC entry 5137 (class 0 OID 20228)
-- Dependencies: 236
-- Data for Name: Documento_ICF; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Documento_ICF" ("ICF_Codice", "Documento_Id") FROM stdin;
d166	1
d170	1
d172	2
\.


--
-- TOC entry 5132 (class 0 OID 20182)
-- Dependencies: 231
-- Data for Name: ICF; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ICF" ("Codice", "Descrizione") FROM stdin;
d166	Lettura
d170	Scrittura
d172	Calcolo
\.


--
-- TOC entry 5129 (class 0 OID 20157)
-- Dependencies: 228
-- Data for Name: Indicatore; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Indicatore" ("Id", "Tipologia", "Categoria", "Descrizione") FROM stdin;
7	DSA	Strumenti compensativi	Uso della calcolatrice
8	DSA	Misure dispensative	Dispensa dalla lettura ad alta voce
9	Entrambi	Modalità di verifica	Verifiche orali programmate
\.


--
-- TOC entry 5133 (class 0 OID 20190)
-- Dependencies: 232
-- Data for Name: Insegnamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Insegnamento" ("Docente_Email", "Classe_Id", "Materia_Nome") FROM stdin;
m.rossi@scuola.it	7	Italiano
l.bianchi@scuola.it	8	Matematica
a.verdi@scuola.it	8	Informatica
l.bianchi@scuola.it	7	Matematica
\.


--
-- TOC entry 5127 (class 0 OID 20150)
-- Dependencies: 226
-- Data for Name: Materia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Materia" ("Nome") FROM stdin;
Italiano
Matematica
Informatica
Inglese
\.


--
-- TOC entry 5136 (class 0 OID 20219)
-- Dependencies: 235
-- Data for Name: Materia_Documento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Materia_Documento" ("Materia_Nome", "Documento_Id") FROM stdin;
Italiano	1
Matematica	1
Informatica	2
\.


--
-- TOC entry 5135 (class 0 OID 20209)
-- Dependencies: 234
-- Data for Name: Materia_Indicatore; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Materia_Indicatore" ("Materia_Nome", "Indicatore_Id", "Valore", "Nota") FROM stdin;
Matematica	7	t	Consentita durante le verifiche
Italiano	9	t	Studente dispensato
Informatica	8	t	\N
\.


--
-- TOC entry 5124 (class 0 OID 20128)
-- Dependencies: 223
-- Data for Name: Studente; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Studente" ("Email", "Nome", "Cognome", "DSA_BES") FROM stdin;
marco.neri@studenti.it	Marco	Neri	t
giulia.conti@studenti.it	Giulia	Conti	f
luca.gallo@studenti.it	Luca	Gallo	t
\.


--
-- TOC entry 5120 (class 0 OID 20059)
-- Dependencies: 219
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
ba79986a-274e-4347-a591-da30c00571a5	5ecef5a402bdfdfee1988f7f5321139c6d8493a6404eea1974975c4752f078e8	2026-03-09 13:00:48.596185+01	20260309120048_init	\N	\N	2026-03-09 13:00:48.434354+01	1
\.


--
-- TOC entry 5149 (class 0 OID 0)
-- Dependencies: 229
-- Name: Allegato_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Allegato_Id_seq"', 2, true);


--
-- TOC entry 5150 (class 0 OID 0)
-- Dependencies: 221
-- Name: Classe_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Classe_Id_seq"', 8, true);


--
-- TOC entry 5151 (class 0 OID 0)
-- Dependencies: 224
-- Name: Documento_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Documento_Id_seq"', 2, true);


--
-- TOC entry 5152 (class 0 OID 0)
-- Dependencies: 227
-- Name: Indicatore_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Indicatore_Id_seq"', 9, true);


--
-- TOC entry 4947 (class 2606 OID 20181)
-- Name: Allegato Allegato_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Allegato"
    ADD CONSTRAINT "Allegato_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 4953 (class 2606 OID 20208)
-- Name: Classe_Studente Classe_Studente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Classe_Studente"
    ADD CONSTRAINT "Classe_Studente_pkey" PRIMARY KEY ("Studente_Email", "Classe_Id");


--
-- TOC entry 4936 (class 2606 OID 20127)
-- Name: Classe Classe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Classe"
    ADD CONSTRAINT "Classe_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 4934 (class 2606 OID 20114)
-- Name: Docente Docente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Docente"
    ADD CONSTRAINT "Docente_pkey" PRIMARY KEY ("Email");


--
-- TOC entry 4959 (class 2606 OID 20236)
-- Name: Documento_ICF Documento_ICF_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Documento_ICF"
    ADD CONSTRAINT "Documento_ICF_pkey" PRIMARY KEY ("ICF_Codice", "Documento_Id");


--
-- TOC entry 4941 (class 2606 OID 20149)
-- Name: Documento Documento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Documento"
    ADD CONSTRAINT "Documento_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 4949 (class 2606 OID 20189)
-- Name: ICF ICF_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ICF"
    ADD CONSTRAINT "ICF_pkey" PRIMARY KEY ("Codice");


--
-- TOC entry 4945 (class 2606 OID 20168)
-- Name: Indicatore Indicatore_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Indicatore"
    ADD CONSTRAINT "Indicatore_pkey" PRIMARY KEY ("Id");


--
-- TOC entry 4951 (class 2606 OID 20199)
-- Name: Insegnamento Insegnamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Insegnamento"
    ADD CONSTRAINT "Insegnamento_pkey" PRIMARY KEY ("Docente_Email", "Classe_Id", "Materia_Nome");


--
-- TOC entry 4957 (class 2606 OID 20227)
-- Name: Materia_Documento Materia_Documento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materia_Documento"
    ADD CONSTRAINT "Materia_Documento_pkey" PRIMARY KEY ("Materia_Nome", "Documento_Id");


--
-- TOC entry 4955 (class 2606 OID 20218)
-- Name: Materia_Indicatore Materia_Indicatore_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materia_Indicatore"
    ADD CONSTRAINT "Materia_Indicatore_pkey" PRIMARY KEY ("Materia_Nome", "Indicatore_Id");


--
-- TOC entry 4943 (class 2606 OID 20155)
-- Name: Materia Materia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materia"
    ADD CONSTRAINT "Materia_pkey" PRIMARY KEY ("Nome");


--
-- TOC entry 4938 (class 2606 OID 20136)
-- Name: Studente Studente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Studente"
    ADD CONSTRAINT "Studente_pkey" PRIMARY KEY ("Email");


--
-- TOC entry 4932 (class 2606 OID 20072)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 4939 (class 1259 OID 20237)
-- Name: Documento_Studente_Email_Anno_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Documento_Studente_Email_Anno_key" ON public."Documento" USING btree ("Studente_Email", "Anno");


--
-- TOC entry 4961 (class 2606 OID 20243)
-- Name: Allegato Allegato_Documento_Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Allegato"
    ADD CONSTRAINT "Allegato_Documento_Id_fkey" FOREIGN KEY ("Documento_Id") REFERENCES public."Documento"("Id") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4965 (class 2606 OID 20263)
-- Name: Classe_Studente Classe_Studente_Classe_Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Classe_Studente"
    ADD CONSTRAINT "Classe_Studente_Classe_Id_fkey" FOREIGN KEY ("Classe_Id") REFERENCES public."Classe"("Id") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4966 (class 2606 OID 20268)
-- Name: Classe_Studente Classe_Studente_Studente_Email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Classe_Studente"
    ADD CONSTRAINT "Classe_Studente_Studente_Email_fkey" FOREIGN KEY ("Studente_Email") REFERENCES public."Studente"("Email") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4971 (class 2606 OID 20298)
-- Name: Documento_ICF Documento_ICF_Documento_Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Documento_ICF"
    ADD CONSTRAINT "Documento_ICF_Documento_Id_fkey" FOREIGN KEY ("Documento_Id") REFERENCES public."Documento"("Id") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4972 (class 2606 OID 20293)
-- Name: Documento_ICF Documento_ICF_ICF_Codice_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Documento_ICF"
    ADD CONSTRAINT "Documento_ICF_ICF_Codice_fkey" FOREIGN KEY ("ICF_Codice") REFERENCES public."ICF"("Codice") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4960 (class 2606 OID 20238)
-- Name: Documento Documento_Studente_Email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Documento"
    ADD CONSTRAINT "Documento_Studente_Email_fkey" FOREIGN KEY ("Studente_Email") REFERENCES public."Studente"("Email") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4962 (class 2606 OID 20253)
-- Name: Insegnamento Insegnamento_Classe_Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Insegnamento"
    ADD CONSTRAINT "Insegnamento_Classe_Id_fkey" FOREIGN KEY ("Classe_Id") REFERENCES public."Classe"("Id") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4963 (class 2606 OID 20248)
-- Name: Insegnamento Insegnamento_Docente_Email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Insegnamento"
    ADD CONSTRAINT "Insegnamento_Docente_Email_fkey" FOREIGN KEY ("Docente_Email") REFERENCES public."Docente"("Email") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4964 (class 2606 OID 20258)
-- Name: Insegnamento Insegnamento_Materia_Nome_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Insegnamento"
    ADD CONSTRAINT "Insegnamento_Materia_Nome_fkey" FOREIGN KEY ("Materia_Nome") REFERENCES public."Materia"("Nome") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4969 (class 2606 OID 20288)
-- Name: Materia_Documento Materia_Documento_Documento_Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materia_Documento"
    ADD CONSTRAINT "Materia_Documento_Documento_Id_fkey" FOREIGN KEY ("Documento_Id") REFERENCES public."Documento"("Id") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4970 (class 2606 OID 20283)
-- Name: Materia_Documento Materia_Documento_Materia_Nome_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materia_Documento"
    ADD CONSTRAINT "Materia_Documento_Materia_Nome_fkey" FOREIGN KEY ("Materia_Nome") REFERENCES public."Materia"("Nome") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4967 (class 2606 OID 20278)
-- Name: Materia_Indicatore Materia_Indicatore_Indicatore_Id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materia_Indicatore"
    ADD CONSTRAINT "Materia_Indicatore_Indicatore_Id_fkey" FOREIGN KEY ("Indicatore_Id") REFERENCES public."Indicatore"("Id") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 4968 (class 2606 OID 20273)
-- Name: Materia_Indicatore Materia_Indicatore_Materia_Nome_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Materia_Indicatore"
    ADD CONSTRAINT "Materia_Indicatore_Materia_Nome_fkey" FOREIGN KEY ("Materia_Nome") REFERENCES public."Materia"("Nome") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 5144 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


-- Completed on 2026-03-14 17:35:10

--
-- PostgreSQL database dump complete
--

\unrestrict QhpaYFbeITKTaijugOBpoiF09evrwlhd6XzyLAOf21izL4x820CgtRVcDEAUp8Q

