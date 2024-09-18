import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Eliminar todos los registros en el orden correcto para evitar conflictos de relaciones
  await prisma.VentaProducto.deleteMany();
  await prisma.ventas.deleteMany();
  await prisma.domicilio.deleteMany();
  await prisma.telefono.deleteMany();
  await prisma.empleado.deleteMany();
  await prisma.cliente.deleteMany();
  await prisma.personas.deleteMany();
  await prisma.stock.deleteMany();
  await prisma.insumo.deleteMany();
  await prisma.materia_prima.deleteMany();
  await prisma.producto.deleteMany();
  await prisma.ciudad.deleteMany();

  // Crear el único registro en la tabla producto
  const producto = await prisma.producto.create({
    data: {
      nom_prod: 'Gin',
    },
  });

  // Crear registros para la tabla ciudad
  const ciudades = await prisma.ciudad.createMany({
    data: [
      { nombre_ciudad: 'Yerba Buena' },
      { nombre_ciudad: 'San Miguel de Tucumán' },
      { nombre_ciudad: 'Madrid' },
      { nombre_ciudad: 'Barcelona' },
      { nombre_ciudad: 'Mar del Plata' },
      { nombre_ciudad: 'Posadas' },
    ],
  });

  // Obtener las ciudades insertadas
  const ciudadesInsertadas = await prisma.ciudad.findMany();

  // Crear registros para la tabla personas y obtener sus IDs
  const personasInsertadas = await prisma.personas.createMany({
    data: [
      { nom_persona: 'Santiago', apel_persona: 'Heredia' },
      { nom_persona: 'Bernardita', apel_persona: 'Peñalba' },
      { nom_persona: 'Pilar', apel_persona: 'Teran' },
      { nom_persona: 'Ernesto', apel_persona: 'Rico' },
      { nom_persona: 'Lorenzo', apel_persona: 'Heredia' },
      { nom_persona: 'Graciana', apel_persona: 'Jimenez' },
    ],
  });

  // Obtener los IDs reales de las personas insertadas
  const personas = await prisma.personas.findMany();

  // Crear domicilios utilizando los IDs de ciudad y persona correctos
  await prisma.domicilio.createMany({
    data: [
      { numero_dom: 101, calle_dom: 'Calle 1', id_ciudad: ciudadesInsertadas[0].id_ciudad, id_persona: personas[0].id_persona },
      { numero_dom: 102, calle_dom: 'Calle 2', id_ciudad: ciudadesInsertadas[1].id_ciudad, id_persona: personas[1].id_persona },
      { numero_dom: 103, calle_dom: 'Calle 3', id_ciudad: ciudadesInsertadas[2].id_ciudad, id_persona: personas[2].id_persona },
      { numero_dom: 104, calle_dom: 'Calle 4', id_ciudad: ciudadesInsertadas[3].id_ciudad, id_persona: personas[3].id_persona },
      { numero_dom: 105, calle_dom: 'Calle 5', id_ciudad: ciudadesInsertadas[4].id_ciudad, id_persona: personas[4].id_persona },
      { numero_dom: 106, calle_dom: 'Calle 6', id_ciudad: ciudadesInsertadas[5].id_ciudad, id_persona: personas[5].id_persona },
    ],
  });

  // Crear teléfonos utilizando los IDs de persona correctos
  await prisma.telefono.createMany({
    data: [
      { numero_telefono: BigInt('1234567890'), id_persona: personas[0].id_persona },
      { numero_telefono: BigInt('2345678901'), id_persona: personas[1].id_persona },
      { numero_telefono: BigInt('3456789012'), id_persona: personas[2].id_persona },
      { numero_telefono: BigInt('4567890123'), id_persona: personas[3].id_persona },
      { numero_telefono: BigInt('5678901234'), id_persona: personas[4].id_persona },
      { numero_telefono: BigInt('6789012345'), id_persona: personas[5].id_persona },
    ],
  });

  // Crear clientes utilizando los IDs de persona correctos
  await prisma.cliente.createMany({
    data: [
      { segmento: 'A', nom_resp_cliente: 'Pedro', estado_cliente: 'Activo', dni_cliente: '11111111', id_persona: personas[0].id_persona },
      { segmento: 'B', nom_resp_cliente: 'Luis', estado_cliente: 'Activo', dni_cliente: '22222222', id_persona: personas[1].id_persona },
      { segmento: 'C', nom_resp_cliente: 'Simon', estado_cliente: 'Inactivo', dni_cliente: '33333333', id_persona: personas[2].id_persona },
      { segmento: 'D', nom_resp_cliente: 'Jorge', estado_cliente: 'Activo', dni_cliente: '44444444', id_persona: personas[3].id_persona },
      { segmento: 'E', nom_resp_cliente: 'Baltazar', estado_cliente: 'Activo', dni_cliente: '55555555', id_persona: personas[4].id_persona },
      { segmento: 'F', nom_resp_cliente: 'Valentin', estado_cliente: 'Inactivo', dni_cliente: '66666666', id_persona: personas[5].id_persona },
    ],
  });

  // Crear empleados utilizando los IDs de persona correctos
  await prisma.empleado.createMany({
    data: [
      { cargo_emp: 'Gerente', contrasena_empleado: 'pass1', mail_empleado: 'emp1@empresa.com', id_persona: personas[0].id_persona },
      { cargo_emp: 'Asistente', contrasena_empleado: 'pass2', mail_empleado: 'emp2@empresa.com', id_persona: personas[1].id_persona },
      { cargo_emp: 'Contador', contrasena_empleado: 'pass3', mail_empleado: 'emp3@empresa.com', id_persona: personas[2].id_persona },
      { cargo_emp: 'Vendedor', contrasena_empleado: 'pass4', mail_empleado: 'emp4@empresa.com', id_persona: personas[3].id_persona },
      { cargo_emp: 'Gerente', contrasena_empleado: 'pass5', mail_empleado: 'emp5@empresa.com', id_persona: personas[4].id_persona },
      { cargo_emp: 'Asistente', contrasena_empleado: 'pass6', mail_empleado: 'emp6@empresa.com', id_persona: personas[5].id_persona },
    ],
  });

  // Crear insumos
  await prisma.insumo.createMany({
    data: [
      { nom_insumo: 'Etiqueta', descripcion: 'Desc Etiqueta', cantidad: 10, id_prod: producto.id_prod },
      { nom_insumo: 'Botella', descripcion: 'Desc Botella', cantidad: 20, id_prod: producto.id_prod },
      { nom_insumo: 'Separadores', descripcion: 'Desc Separador', cantidad: 30, id_prod: producto.id_prod },
      { nom_insumo: 'Tapon', descripcion: 'Desc tapon', cantidad: 40, id_prod: producto.id_prod },
      { nom_insumo: 'Caja', descripcion: 'Desc caja', cantidad: 50, id_prod: producto.id_prod },
      { nom_insumo: 'Termocontraible', descripcion: 'Desc termoc.', cantidad: 60, id_prod: producto.id_prod },
    ],
  });

  // Crear materia prima
  await prisma.materia_prima.createMany({
    data: [
      { nom_mat_prima: 'Enebro', descripcion: 'Desc. Enebro', cantidad: 100, medida: 'kg', id_prod: producto.id_prod },
      { nom_mat_prima: 'Coriando', descripcion: 'Desc. Coriando', cantidad: 200, medida: 'kg', id_prod: producto.id_prod },
      { nom_mat_prima: 'Regaliz', descripcion: 'Desc. Regaliz', cantidad: 300, medida: 'kg', id_prod: producto.id_prod },
      { nom_mat_prima: 'Clavo de olor', descripcion: 'Desc. Clavo de olor', cantidad: 400, medida: 'kg', id_prod: producto.id_prod },
      { nom_mat_prima: 'Canela', descripcion: 'Desc. Canela', cantidad: 500, medida: 'kg', id_prod: producto.id_prod },
      { nom_mat_prima: 'Cedron', descripcion: 'Desc. Cedron', cantidad: 600, medida: 'kg', id_prod: producto.id_prod },
    ],
  });

  // Crear stock utilizando el ID del producto
  await prisma.stock.create({
    data: {
      nom_prod_stock: 'Gin',
      cant_stock: 1000,
      id_prod: producto.id_prod,
    },
  });

  console.log('Datos insertados con éxito');
}

main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});

