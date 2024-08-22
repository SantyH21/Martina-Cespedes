/*
  Warnings:

  - You are about to drop the `rol` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rol" DROP CONSTRAINT "rol_id_empleado_fkey";

-- AlterTable
ALTER TABLE "empleado" ADD COLUMN     "contrasena_empleado" VARCHAR(20),
ADD COLUMN     "mail_empleado" VARCHAR(40);

-- DropTable
DROP TABLE "rol";
