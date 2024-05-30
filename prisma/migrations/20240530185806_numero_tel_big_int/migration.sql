/*
  Warnings:

  - The `numero_telefono` column on the `telefono` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "telefono" DROP COLUMN "numero_telefono",
ADD COLUMN     "numero_telefono" BIGINT;
