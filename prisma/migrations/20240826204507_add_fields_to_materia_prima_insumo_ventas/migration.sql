-- AlterTable
ALTER TABLE "insumo" ADD COLUMN     "cantidad" INTEGER,
ADD COLUMN     "descripcion" TEXT;

-- AlterTable
ALTER TABLE "materia_prima" ADD COLUMN     "cantidad" INTEGER,
ADD COLUMN     "descripcion" TEXT,
ADD COLUMN     "medida" VARCHAR(20);

-- AlterTable
ALTER TABLE "ventas" ADD COLUMN     "cantidad_producto" INTEGER;
