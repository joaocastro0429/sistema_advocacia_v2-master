-- DropForeignKey
ALTER TABLE "Petition" DROP CONSTRAINT "Petition_clientId_fkey";

-- AlterTable
ALTER TABLE "Petition" ALTER COLUMN "clientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Petition" ADD CONSTRAINT "Petition_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
