-- CreateEnum
CREATE TYPE "Ruolo" AS ENUM ('Docente', 'Admin');

-- CreateEnum
CREATE TYPE "Stato" AS ENUM ('In bozza', 'Validato', 'Scaduto');

-- CreateEnum
CREATE TYPE "Tipologia_Doc" AS ENUM ('DSA', 'BES');

-- CreateEnum
CREATE TYPE "Tipologia_Ind" AS ENUM ('DSA', 'BES', 'Entrambi');

-- CreateEnum
CREATE TYPE "Categoria" AS ENUM ('Strumenti compensativi', 'Misure dispensative', 'Modalità di verifica', 'Criteri di valutazione');

-- CreateTable
CREATE TABLE "Docente" (
    "Email" VARCHAR(255) NOT NULL,
    "Nome" VARCHAR(50) NOT NULL,
    "Cognome" VARCHAR(50) NOT NULL,
    "Ruolo" "Ruolo" NOT NULL DEFAULT 'Docente',

    CONSTRAINT "Docente_pkey" PRIMARY KEY ("Email")
);

-- CreateTable
CREATE TABLE "Classe" (
    "Id" SERIAL NOT NULL,
    "Classe" INTEGER NOT NULL,
    "Sezione" CHAR(1) NOT NULL,
    "Indirizzo" VARCHAR(5) NOT NULL,
    "Anno_Scolastico" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Classe_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Studente" (
    "Email" VARCHAR(255) NOT NULL,
    "Nome" VARCHAR(50) NOT NULL,
    "Cognome" VARCHAR(50) NOT NULL,
    "DSA_BES" BOOLEAN NOT NULL,

    CONSTRAINT "Studente_pkey" PRIMARY KEY ("Email")
);

-- CreateTable
CREATE TABLE "Documento" (
    "Studente_Email" VARCHAR(255) NOT NULL,
    "Anno" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Stato" "Stato" NOT NULL,
    "Tipologia" "Tipologia_Doc" NOT NULL,
    "Data_Approvazione" TIMESTAMP(3),

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("Studente_Email","Anno")
);

-- CreateTable
CREATE TABLE "Materia" (
    "Nome" VARCHAR(50) NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("Nome")
);

-- CreateTable
CREATE TABLE "Indicatore" (
    "Id" SERIAL NOT NULL,
    "Tipologia" "Tipologia_Ind" NOT NULL,
    "Categoria" "Categoria" NOT NULL,
    "Descrizione" TEXT NOT NULL,

    CONSTRAINT "Indicatore_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Allegato" (
    "Id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Percorso" TEXT NOT NULL,
    "Documento_Studente_Email" TEXT NOT NULL,
    "Documento_Anno" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Allegato_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "ICF" (
    "Codice" TEXT NOT NULL,
    "Descrizione" TEXT,

    CONSTRAINT "ICF_pkey" PRIMARY KEY ("Codice")
);

-- CreateTable
CREATE TABLE "Insegnamento" (
    "Docente_Email" TEXT NOT NULL,
    "Classe_Id" INTEGER NOT NULL,
    "Materia_Nome" TEXT NOT NULL,

    CONSTRAINT "Insegnamento_pkey" PRIMARY KEY ("Docente_Email","Classe_Id","Materia_Nome")
);

-- CreateTable
CREATE TABLE "Classe_Studente" (
    "Classe_Id" INTEGER NOT NULL,
    "Studente_Email" TEXT NOT NULL,

    CONSTRAINT "Classe_Studente_pkey" PRIMARY KEY ("Studente_Email","Classe_Id")
);

-- CreateTable
CREATE TABLE "Materia_Indicatore" (
    "Materia_Nome" TEXT NOT NULL,
    "Indicatore_Id" INTEGER NOT NULL,
    "Valore" BOOLEAN NOT NULL,

    CONSTRAINT "Materia_Indicatore_pkey" PRIMARY KEY ("Materia_Nome","Indicatore_Id")
);

-- CreateTable
CREATE TABLE "Materia_Documento" (
    "Materia_Nome" TEXT NOT NULL,
    "Documento_Anno" TIMESTAMP(3) NOT NULL,
    "Documento_Studente_Email" TEXT NOT NULL,

    CONSTRAINT "Materia_Documento_pkey" PRIMARY KEY ("Materia_Nome","Documento_Anno","Documento_Studente_Email")
);

-- CreateTable
CREATE TABLE "Documento_ICF" (
    "ICF_Codice" TEXT NOT NULL,
    "Documento_Anno" TIMESTAMP(3) NOT NULL,
    "Documento_Studente_Email" TEXT NOT NULL,

    CONSTRAINT "Documento_ICF_pkey" PRIMARY KEY ("ICF_Codice","Documento_Anno","Documento_Studente_Email")
);

-- CreateIndex
CREATE UNIQUE INDEX "Classe_Classe_Sezione_Indirizzo_Anno_Scolastico_key" ON "Classe"("Classe", "Sezione", "Indirizzo", "Anno_Scolastico");

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_Studente_Email_fkey" FOREIGN KEY ("Studente_Email") REFERENCES "Studente"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allegato" ADD CONSTRAINT "Allegato_Documento_Studente_Email_Documento_Anno_fkey" FOREIGN KEY ("Documento_Studente_Email", "Documento_Anno") REFERENCES "Documento"("Studente_Email", "Anno") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insegnamento" ADD CONSTRAINT "Insegnamento_Docente_Email_fkey" FOREIGN KEY ("Docente_Email") REFERENCES "Docente"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insegnamento" ADD CONSTRAINT "Insegnamento_Classe_Id_fkey" FOREIGN KEY ("Classe_Id") REFERENCES "Classe"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insegnamento" ADD CONSTRAINT "Insegnamento_Materia_Nome_fkey" FOREIGN KEY ("Materia_Nome") REFERENCES "Materia"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classe_Studente" ADD CONSTRAINT "Classe_Studente_Classe_Id_fkey" FOREIGN KEY ("Classe_Id") REFERENCES "Classe"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classe_Studente" ADD CONSTRAINT "Classe_Studente_Studente_Email_fkey" FOREIGN KEY ("Studente_Email") REFERENCES "Studente"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia_Indicatore" ADD CONSTRAINT "Materia_Indicatore_Materia_Nome_fkey" FOREIGN KEY ("Materia_Nome") REFERENCES "Materia"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia_Indicatore" ADD CONSTRAINT "Materia_Indicatore_Indicatore_Id_fkey" FOREIGN KEY ("Indicatore_Id") REFERENCES "Indicatore"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia_Documento" ADD CONSTRAINT "Materia_Documento_Materia_Nome_fkey" FOREIGN KEY ("Materia_Nome") REFERENCES "Materia"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia_Documento" ADD CONSTRAINT "Materia_Documento_Documento_Studente_Email_Documento_Anno_fkey" FOREIGN KEY ("Documento_Studente_Email", "Documento_Anno") REFERENCES "Documento"("Studente_Email", "Anno") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento_ICF" ADD CONSTRAINT "Documento_ICF_ICF_Codice_fkey" FOREIGN KEY ("ICF_Codice") REFERENCES "ICF"("Codice") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento_ICF" ADD CONSTRAINT "Documento_ICF_Documento_Studente_Email_Documento_Anno_fkey" FOREIGN KEY ("Documento_Studente_Email", "Documento_Anno") REFERENCES "Documento"("Studente_Email", "Anno") ON DELETE RESTRICT ON UPDATE CASCADE;
