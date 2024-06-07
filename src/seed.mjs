import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {

    // Crea 3 registros únicos para cada tabla
    // Tabla ciudad
    const ciudad1 = await prisma.ciudad.create({
      data: { nombre_ciudad: 'Ciudad 1' },
    });
    const ciudad2 = await prisma.ciudad.create({
      data: { nombre_ciudad: 'Ciudad 2' },
    });
    const ciudad3 = await prisma.ciudad.create({
      data: { nombre_ciudad: 'Ciudad 3' },
    });
  
    // Tabla personas
    const persona1 = await prisma.personas.create({
      data: {
        nom_persona: 'Persona 1',
        apel_persona: 'Apellido 1',
      },
    });
    const persona2 = await prisma.personas.create({
      data: {
        nom_persona: 'Persona 2',
        apel_persona: 'Apellido 2',
      },
    });
    const persona3 = await prisma.personas.create({
      data: {
        nom_persona: 'Persona 3',
        apel_persona: 'Apellido 3',
      },
    });
  
    // Tabla cliente
    const cliente1 = await prisma.cliente.create({
      data: {
        segmento: 'Segmento 1',
        nom_resp_cliente: 'Responsable 1',
        estado_cliente: 'Activo',
        coment_cliente: 'Comentario 1',
        id_persona: persona1.id_persona,
      },
    });
    const cliente2 = await prisma.cliente.create({
      data: {
        segmento: 'Segmento 2',
        nom_resp_cliente: 'Responsable 2',
        estado_cliente: 'Activo',
        coment_cliente: 'Comentario 2',
        id_persona: persona2.id_persona,
      },
    });
    const cliente3 = await prisma.cliente.create({
      data: {
        segmento: 'Segmento 3',
        nom_resp_cliente: 'Responsable 3',
        estado_cliente: 'Inactivo',
        coment_cliente: 'Comentario 3',
        id_persona: persona3.id_persona,
      },
    });
  
    // Tabla domicilio
    const domicilio1 = await prisma.domicilio.create({
      data: {
        numero_dom: 123,
        calle_dom: 'Calle 1',
        id_persona: persona1.id_persona,
        id_ciudad: ciudad1.id_ciudad,
      },
    });
    const domicilio2 = await prisma.domicilio.create({
      data: {
        numero_dom: 456,
        calle_dom: 'Calle 2',
        id_persona: persona2.id_persona,
        id_ciudad: ciudad2.id_ciudad,
      },
    });
    const domicilio3 = await prisma.domicilio.create({
      data: {
        numero_dom: 789,
        calle_dom: 'Calle 3',
        id_persona: persona3.id_persona,
        id_ciudad: ciudad3.id_ciudad,
      },
    });
  
    // Tabla empleado
    const empleado1 = await prisma.empleado.create({
      data: {
        cargo_emp: 'Cargo 1',
        id_persona: persona1.id_persona,
      },
    });
    const empleado2 = await prisma.empleado.create({
      data: {
        cargo_emp: 'Cargo 2',
        id_persona: persona2.id_persona,
      },
    });
    const empleado3 = await prisma.empleado.create({
      data: {
        cargo_emp: 'Cargo 3',
        id_persona: persona3.id_persona,
      },
    });
  
    // Tabla insumo
    const insumo1 = await prisma.insumo.create({
      data: {
        nom_insumo: 'Insumo 1',
      },
    });
    const insumo2 = await prisma.insumo.create({
      data: {
        nom_insumo: 'Insumo 2',
      },
    });
    const insumo3 = await prisma.insumo.create({
      data: {
        nom_insumo: 'Insumo 3',
      },
    });
  
    // Tabla materia_prima
    const materiaPrima1 = await prisma.materia_prima.create({
      data: {
        nom_mat_prima: 'Materia Prima 1',
      },
    });
    const materiaPrima2 = await prisma.materia_prima.create({
      data: {
        nom_mat_prima: 'Materia Prima 2',
      },
    });
    const materiaPrima3 = await prisma.materia_prima.create({
      data: {
        nom_mat_prima: 'Materia Prima 3',
      },
    });
  
    // Tabla producto
    const producto1 = await prisma.producto.create({
      data: {
        nom_prod: 'Producto 1',
      },
    });
    const producto2 = await prisma.producto.create({
      data: {
        nom_prod: 'Producto 2',
      },
    });
    const producto3 = await prisma.producto.create({
      data: {
        nom_prod: 'Producto 3',
      },
    });
  
    // Tabla rol
    const rol1 = await prisma.rol.create({
      data: {
        tipo_rol: 'Rol 1',
        contr_rol: 'Contraseña 1',
        mail_rol: 'mail1@example.com',
        id_empleado: empleado1.id_empleado,
      },
    });
    const rol2 = await prisma.rol.create({
      data: {
        tipo_rol: 'Rol 2',
        contr_rol: 'Contraseña 2',
        mail_rol: 'mail2@example.com',
        id_empleado: empleado2.id_empleado,
      },
    });
    const rol3 = await prisma.rol.create({
      data: {
        tipo_rol: 'Rol 3',
        contr_rol: 'Contraseña 3',
        mail_rol: 'mail3@example.com',
        id_empleado: empleado3.id_empleado,
      },
    });
  
    // Tabla stock
    const stock1 = await prisma.stock.create({
      data: {
        nom_prod_stock: 'Stock 1',
        cant_stock: 100,
        id_prod: producto1.id_prod,
      },
    });
    const stock2 = await prisma.stock.create({
      data: {
        nom_prod_stock: 'Stock 2',
        cant_stock: 200,
        id_prod: producto2.id_prod,
      },
    });
    const stock3 = await prisma.stock.create({
      data: {
        nom_prod_stock: 'Stock 3',
        cant_stock: 300,
        id_prod: producto3.id_prod,
      },
    });
  
    // Tabla telefono
    const telefono1 = await prisma.telefono.create({
      data: {
        numero_telefono: 1234567890n,
        id_persona: persona1.id_persona,
      },
    });
    const telefono2 = await prisma.telefono.create({
      data: {
        numero_telefono: 2345678901n,
        id_persona: persona2.id_persona,
      },
    });
    const telefono3 = await prisma.telefono.create({
      data: {
        numero_telefono: 3456789012n,
        id_persona: persona3.id_persona,
      },
    });
  
    // Tabla ventas
    const ventas1 = await prisma.ventas.create({
      data: {
        facturado: 'Sí',
        cobrado: 'Sí',
        pendiente: 'No',
        id_cliente: cliente1.id_cliente,
        id_empleado: empleado1.id_empleado,
      },
    });
    const ventas2 = await prisma.ventas.create({
      data: {
        facturado: 'No',
        cobrado: 'No',
        pendiente: 'Sí',
        id_cliente: cliente2.id_cliente,
        id_empleado: empleado2.id_empleado,
      },
    });
    const ventas3 = await prisma.ventas.create({
      data: {
        facturado: 'Sí',
        cobrado: 'No',
        pendiente: 'Sí',
        id_cliente: cliente3.id_cliente,
        id_empleado: empleado3.id_empleado,
      },
    });
  
    console.log('Datos de ejemplo insertados correctamente.');
  }
  
  seed()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  
  
  
  
  
  
  
  
  