/*
  Warnings:

  - You are about to alter the column `bookPrice` on the `rentals` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "rentals" ALTER COLUMN "bookPrice" SET DATA TYPE INTEGER;
