/*
  Warnings:

  - You are about to drop the `Peticao` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PetitionStatus" AS ENUM ('DRAFT', 'PENDING', 'SUBMITTED', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "PetitionType" AS ENUM ('INITIAL_PETITION', 'PETITION', 'RECOURSE', 'EVIDENCE', 'OTHER');

-- DropForeignKey
ALTER TABLE "Peticao" DROP CONSTRAINT "Peticao_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Peticao" DROP CONSTRAINT "Peticao_lawyerId_fkey";

-- DropForeignKey
ALTER TABLE "Peticao" DROP CONSTRAINT "Peticao_processId_fkey";

-- DropTable
DROP TABLE "Peticao";

-- DropEnum
DROP TYPE "PeticaoStatus";

-- DropEnum
DROP TYPE "PeticaoType";

-- CreateTable
CREATE TABLE "Petition" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "PetitionType" NOT NULL,
    "status" "PetitionStatus" NOT NULL DEFAULT 'DRAFT',
    "factsSummary" TEXT,
    "fileUrl" TEXT,
    "protocolNumber" TEXT,
    "processId" TEXT,
    "clientId" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,

    CONSTRAINT "Petition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Petition" ADD CONSTRAINT "Petition_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Petition" ADD CONSTRAINT "Petition_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Petition" ADD CONSTRAINT "Petition_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "lawyers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
