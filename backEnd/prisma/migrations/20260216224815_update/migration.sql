-- DropForeignKey
ALTER TABLE "Petition" DROP CONSTRAINT "Petition_lawyerId_fkey";

-- AlterTable
ALTER TABLE "Petition" ALTER COLUMN "lawyerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Petition" ADD CONSTRAINT "Petition_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "lawyers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
