-- CreateTable
CREATE TABLE "Classe" (
    "Id" SERIAL NOT NULL,
    "Numero" INTEGER NOT NULL,
    "Sezione" CHAR(1) NOT NULL,
    "Indirizzo" VARCHAR(5) NOT NULL,
    "AnnoScolastico" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Classe_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Studente" (
    "Email" VARCHAR(255) NOT NULL,
    "Nome" VARCHAR(50) NOT NULL,
    "Cognome" VARCHAR(50) NOT NULL,
    "DataNascita" TIMESTAMP(3),
    "DSA_BES" BOOLEAN NOT NULL,
    "Classe_Id" INTEGER NOT NULL,

    CONSTRAINT "Studente_pkey" PRIMARY KEY ("Email")
);

-- CreateTable
CREATE TABLE "Documento" (
    "Id" SERIAL NOT NULL,
    "Studente_Email" VARCHAR(255) NOT NULL,
    "DataScadenza" TIMESTAMP(3),
    "Stato" VARCHAR(20) NOT NULL,
    "Tipo" VARCHAR(20) NOT NULL,

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Docente" (
    "Email" VARCHAR(255) NOT NULL,
    "Nome" VARCHAR(50) NOT NULL,
    "Cognome" VARCHAR(50) NOT NULL,

    CONSTRAINT "Docente_pkey" PRIMARY KEY ("Email")
);

-- CreateTable
CREATE TABLE "Materia" (
    "Nome" VARCHAR(50) NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("Nome")
);

-- CreateTable
CREATE TABLE "Insegnamento_Docente_Materia" (
    "Docente_Email" VARCHAR(255) NOT NULL,
    "Materia_Nome" VARCHAR(50) NOT NULL,

    CONSTRAINT "Insegnamento_Docente_Materia_pkey" PRIMARY KEY ("Docente_Email","Materia_Nome")
);

-- CreateTable
CREATE TABLE "Insegnamento_Classe_Docente" (
    "Docente_Email" VARCHAR(255) NOT NULL,
    "Classe_Id" INTEGER NOT NULL,

    CONSTRAINT "Insegnamento_Classe_Docente_pkey" PRIMARY KEY ("Classe_Id","Docente_Email")
);

-- CreateIndex
CREATE UNIQUE INDEX "Documento_Studente_Email_key" ON "Documento"("Studente_Email");

-- AddForeignKey
ALTER TABLE "Studente" ADD CONSTRAINT "Studente_Classe_Id_fkey" FOREIGN KEY ("Classe_Id") REFERENCES "Classe"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_Studente_Email_fkey" FOREIGN KEY ("Studente_Email") REFERENCES "Studente"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insegnamento_Docente_Materia" ADD CONSTRAINT "Insegnamento_Docente_Materia_Docente_Email_fkey" FOREIGN KEY ("Docente_Email") REFERENCES "Docente"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insegnamento_Docente_Materia" ADD CONSTRAINT "Insegnamento_Docente_Materia_Materia_Nome_fkey" FOREIGN KEY ("Materia_Nome") REFERENCES "Materia"("Nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insegnamento_Classe_Docente" ADD CONSTRAINT "Insegnamento_Classe_Docente_Classe_Id_fkey" FOREIGN KEY ("Classe_Id") REFERENCES "Classe"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insegnamento_Classe_Docente" ADD CONSTRAINT "Insegnamento_Classe_Docente_Docente_Email_fkey" FOREIGN KEY ("Docente_Email") REFERENCES "Docente"("Email") ON DELETE RESTRICT ON UPDATE CASCADE;
