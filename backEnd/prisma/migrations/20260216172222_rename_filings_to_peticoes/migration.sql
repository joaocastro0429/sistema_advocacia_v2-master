/*
  Warnings:

  - You are about to drop the `Filing` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PeticaoStatus" AS ENUM ('DRAFT', 'PENDING', 'SUBMITTED', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "PeticaoType" AS ENUM ('INITIAL_PETITION', 'PETITION', 'RECOURSE', 'EVIDENCE', 'OTHER');

-- DropForeignKey
ALTER TABLE "Filing" DROP CONSTRAINT "Filing_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Filing" DROP CONSTRAINT "Filing_lawyerId_fkey";

-- DropForeignKey
ALTER TABLE "Filing" DROP CONSTRAINT "Filing_processId_fkey";

-- DropTable
DROP TABLE "Filing";

-- DropEnum
DROP TYPE "FilingStatus";

-- DropEnum
DROP TYPE "FilingType";

-- CreateTable
CREATE TABLE "Peticao" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "PeticaoType" NOT NULL,
    "status" "PeticaoStatus" NOT NULL DEFAULT 'DRAFT',
    "factsSummary" TEXT,
    "fileUrl" TEXT,
    "protocolNumber" TEXT,
    "processId" TEXT,
    "clientId" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,

    CONSTRAINT "Peticao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Peticao" ADD CONSTRAINT "Peticao_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peticao" ADD CONSTRAINT "Peticao_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peticao" ADD CONSTRAINT "Peticao_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "lawyers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
