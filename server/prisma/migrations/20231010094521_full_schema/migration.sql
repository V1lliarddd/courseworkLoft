/*
  Warnings:

  - Added the required column `price` to the `Purchase_story` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Purchase_story` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchase_story" ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
