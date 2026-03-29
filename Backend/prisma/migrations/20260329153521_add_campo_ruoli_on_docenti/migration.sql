-- CreateEnum
CREATE TYPE "Ruolo" AS ENUM ('Docente', 'Admin');

-- AlterTable
ALTER TABLE "Docente" ADD COLUMN     "Ruolo" "Ruolo" NOT NULL DEFAULT 'Docente';