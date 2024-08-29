/*
  Warnings:

  - You are about to drop the column `id_ventas` on the `producto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "producto" DROP CONSTRAINT "fk_prod_ventas";

-- AlterTable
ALTER TABLE "producto" DROP COLUMN "id_ventas";

-- CreateTable
CREATE TABLE "VentaProducto" (
    "id" SERIAL NOT NULL,
    "id_ventas" INTEGER NOT NULL,
    "id_prod" INTEGER NOT NULL,

    CONSTRAINT "VentaProducto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VentaProducto" ADD CONSTRAINT "VentaProducto_id_ventas_fkey" FOREIGN KEY ("id_ventas") REFERENCES "ventas"("id_ventas") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VentaProducto" ADD CONSTRAINT "VentaProducto_id_prod_fkey" FOREIGN KEY ("id_prod") REFERENCES "producto"("id_prod") ON DELETE RESTRICT ON UPDATE CASCADE;
