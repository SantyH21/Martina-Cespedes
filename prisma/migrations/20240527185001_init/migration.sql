-- CreateTable
CREATE TABLE "ciudad" (
    "id_ciudad" SERIAL NOT NULL,
    "nombre_ciudad" VARCHAR(20),

    CONSTRAINT "ciudad_pkey" PRIMARY KEY ("id_ciudad")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id_cliente" SERIAL NOT NULL,
    "segmento" VARCHAR(20),
    "nom_resp_cliente" VARCHAR(20),
    "estado_cliente" VARCHAR(20),
    "coment_cliente" VARCHAR(20),
    "id_persona" INTEGER,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "domicilio" (
    "id_domicilio" SERIAL NOT NULL,
    "numero_dom" INTEGER,
    "calle_dom" VARCHAR(20),
    "id_persona" INTEGER,
    "id_ciudad" INTEGER,

    CONSTRAINT "domicilio_pkey" PRIMARY KEY ("id_domicilio")
);

-- CreateTable
CREATE TABLE "empleado" (
    "id_empleado" SERIAL NOT NULL,
    "cargo_emp" VARCHAR(20),
    "id_persona" INTEGER,

    CONSTRAINT "empleado_pkey" PRIMARY KEY ("id_empleado")
);

-- CreateTable
CREATE TABLE "insumo" (
    "id_insumo" SERIAL NOT NULL,
    "nom_insumo" VARCHAR(20),
    "fecha_ing_insumo" DATE,
    "id_prod" INTEGER,

    CONSTRAINT "insumo_pkey" PRIMARY KEY ("id_insumo")
);

-- CreateTable
CREATE TABLE "materia_prima" (
    "id_mat_prima" SERIAL NOT NULL,
    "nom_mat_prima" VARCHAR(20),
    "fecha_ing_mat_prima" DATE,
    "id_prod" INTEGER,

    CONSTRAINT "materia_prima_pkey" PRIMARY KEY ("id_mat_prima")
);

-- CreateTable
CREATE TABLE "personas" (
    "id_persona" SERIAL NOT NULL,
    "nom_persona" VARCHAR(20),
    "apel_persona" VARCHAR(20),

    CONSTRAINT "personas_pkey" PRIMARY KEY ("id_persona")
);

-- CreateTable
CREATE TABLE "producto" (
    "id_prod" SERIAL NOT NULL,
    "nom_prod" VARCHAR(20),
    "id_ventas" INTEGER,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id_prod")
);

-- CreateTable
CREATE TABLE "rol" (
    "id_rol" SERIAL NOT NULL,
    "tipo_rol" VARCHAR(20),
    "contr_rol" VARCHAR(20),
    "mail_rol" VARCHAR(40),
    "id_empleado" INTEGER,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "stock" (
    "id_stock" SERIAL NOT NULL,
    "nom_prod_stock" VARCHAR(20),
    "cant_stock" INTEGER,
    "id_prod" INTEGER,

    CONSTRAINT "stock_pkey" PRIMARY KEY ("id_stock")
);

-- CreateTable
CREATE TABLE "telefono" (
    "id_telefono" SERIAL NOT NULL,
    "numero_telefono" INTEGER,
    "id_persona" INTEGER,

    CONSTRAINT "telefono_pkey" PRIMARY KEY ("id_telefono")
);

-- CreateTable
CREATE TABLE "ventas" (
    "id_ventas" SERIAL NOT NULL,
    "facturado" VARCHAR(20),
    "cobrado" VARCHAR(20),
    "pendiente" VARCHAR(20),
    "fecha_fac" DATE,
    "id_cliente" INTEGER,
    "id_empleado" INTEGER,

    CONSTRAINT "ventas_pkey" PRIMARY KEY ("id_ventas")
);

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "personas"("id_persona") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "domicilio" ADD CONSTRAINT "domicilio_id_ciudad_fkey" FOREIGN KEY ("id_ciudad") REFERENCES "ciudad"("id_ciudad") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "domicilio" ADD CONSTRAINT "domicilio_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "personas"("id_persona") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "empleado" ADD CONSTRAINT "empleado_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "personas"("id_persona") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "insumo" ADD CONSTRAINT "insumo_id_prod_fkey" FOREIGN KEY ("id_prod") REFERENCES "producto"("id_prod") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "materia_prima" ADD CONSTRAINT "materia_prima_id_prod_fkey" FOREIGN KEY ("id_prod") REFERENCES "producto"("id_prod") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "fk_prod_ventas" FOREIGN KEY ("id_ventas") REFERENCES "ventas"("id_ventas") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rol" ADD CONSTRAINT "rol_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id_empleado") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_id_prod_fkey" FOREIGN KEY ("id_prod") REFERENCES "producto"("id_prod") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "telefono" ADD CONSTRAINT "telefono_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "personas"("id_persona") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "fk_cliente_ventas" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ventas" ADD CONSTRAINT "fk_emp_ventas" FOREIGN KEY ("id_empleado") REFERENCES "empleado"("id_empleado") ON DELETE NO ACTION ON UPDATE NO ACTION;
