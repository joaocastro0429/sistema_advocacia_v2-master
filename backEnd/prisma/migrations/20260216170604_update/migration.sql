-- DropForeignKey
ALTER TABLE "Filing" DROP CONSTRAINT "Filing_lawyerId_fkey";

-- AlterTable
ALTER TABLE "Filing" ALTER COLUMN "lawyerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Filing" ADD CONSTRAINT "Filing_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "lawyers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
