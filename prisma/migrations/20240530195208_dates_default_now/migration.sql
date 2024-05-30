-- AlterTable
ALTER TABLE "insumo" ALTER COLUMN "fecha_ing_insumo" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "materia_prima" ALTER COLUMN "fecha_ing_mat_prima" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ventas" ALTER COLUMN "fecha_fac" SET DEFAULT CURRENT_TIMESTAMP;
