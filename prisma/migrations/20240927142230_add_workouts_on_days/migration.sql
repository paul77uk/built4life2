/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `WorkoutsOnDays` table. All the data in the column will be lost.
  - Added the required column `order` to the `WorkoutsOnDays` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkoutsOnDays" DROP COLUMN "assignedAt",
ADD COLUMN     "order" INTEGER NOT NULL;
