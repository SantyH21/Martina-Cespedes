-- AlterTable
ALTER TABLE "ciudad" ALTER COLUMN "nombre_ciudad" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "cliente" ALTER COLUMN "segmento" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "nom_resp_cliente" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "coment_cliente" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "domicilio" ALTER COLUMN "calle_dom" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "insumo" ALTER COLUMN "nom_insumo" SET DATA TYPE VARCHAR(30);

-- AlterTable
ALTER TABLE "materia_prima" ALTER COLUMN "nom_mat_prima" SET DATA TYPE VARCHAR(30);

-- AlterTable
ALTER TABLE "personas" ALTER COLUMN "nom_persona" SET DATA TYPE VARCHAR(30),
ALTER COLUMN "apel_persona" SET DATA TYPE VARCHAR(30);

-- AlterTable
ALTER TABLE "producto" ALTER COLUMN "nom_prod" SET DATA TYPE VARCHAR(30);

-- AlterTable
ALTER TABLE "stock" ALTER COLUMN "nom_prod_stock" SET DATA TYPE VARCHAR(30);
