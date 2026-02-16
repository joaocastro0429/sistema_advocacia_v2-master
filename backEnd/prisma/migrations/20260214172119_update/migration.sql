-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELED', 'NO_SHOW');

-- CreateEnum
CREATE TYPE "FilingStatus" AS ENUM ('DRAFT', 'PENDING', 'SUBMITTED', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "FilingType" AS ENUM ('PETITION', 'RECOURSE', 'EVIDENCE', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "oab" TEXT,
    "oab_uf" TEXT,
    "cpf" TEXT,
    "phone" TEXT,
    "specialty" TEXT,
    "office" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "cpf" TEXT,
    "cnpj" TEXT,
    "cpf_cnpj" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip_code" TEXT,
    "notes" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "maritalStatus" TEXT,
    "profession" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processes" (
    "id" TEXT NOT NULL,
    "processNumber" TEXT NOT NULL,
    "court" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'open',
    "lawyerId" TEXT,
    "clientId" TEXT,
    "hearingDate" TIMESTAMP(3) NOT NULL,
    "caseValue" DECIMAL(15,2) NOT NULL,
    "internalNotes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "processes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lawyers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "oabNumber" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lawyers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "AppointmentStatus" NOT NULL DEFAULT 'SCHEDULED',
    "eventType" TEXT,
    "location" TEXT,
    "clientId" TEXT,
    "lawyerId" TEXT,
    "processId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "FilingType" NOT NULL,
    "status" "FilingStatus" NOT NULL DEFAULT 'DRAFT',
    "factsSummary" TEXT,
    "fileUrl" TEXT,
    "protocolNumber" TEXT,
    "processId" TEXT,
    "clientId" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,

    CONSTRAINT "Filing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clients_cpf_key" ON "clients"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "clients_cnpj_key" ON "clients"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "processes_processNumber_key" ON "processes"("processNumber");

-- CreateIndex
CREATE UNIQUE INDEX "lawyers_email_key" ON "lawyers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "lawyers_oabNumber_key" ON "lawyers"("oabNumber");

-- AddForeignKey
ALTER TABLE "processes" ADD CONSTRAINT "processes_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "lawyers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processes" ADD CONSTRAINT "processes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "lawyers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filing" ADD CONSTRAINT "Filing_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filing" ADD CONSTRAINT "Filing_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filing" ADD CONSTRAINT "Filing_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "lawyers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
