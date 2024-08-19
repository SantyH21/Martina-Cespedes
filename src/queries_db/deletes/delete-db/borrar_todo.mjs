import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllRecords() {
  try {
    // Eliminar registros de la tabla 'ventas'
    await prisma.ventas.deleteMany({});

    // Eliminar registros de la tabla 'insumo'
    await prisma.insumo.deleteMany({});

    // Eliminar registros de la tabla 'materia_prima'
    await prisma.materia_prima.deleteMany({});

    // Eliminar registros de la tabla 'stock'
    await prisma.stock.deleteMany({});

    // Eliminar registros de la tabla 'rol'
    await prisma.rol.deleteMany({});

    // Eliminar registros de la tabla 'telefono'
    await prisma.telefono.deleteMany({});

    // Eliminar registros de la tabla 'empleado'
    await prisma.empleado.deleteMany({});

    // Eliminar registros de la tabla 'cliente'
    await prisma.cliente.deleteMany({});

    // Eliminar registros de la tabla 'domicilio'
    await prisma.domicilio.deleteMany({});

    // Eliminar registros de la tabla 'producto'
    await prisma.producto.deleteMany({});

    // Eliminar registros de la tabla 'ciudad'
    await prisma.ciudad.deleteMany({});

    // Eliminar registros de la tabla 'personas'
    await prisma.personas.deleteMany({});

    console.log('Todos los registros han sido eliminados correctamente.');
  } catch (error) {
    console.error('Error eliminando registros:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar la función principal
deleteAllRecords().catch((error) => {
  console.error('Error en la función deleteAllRecords:', error);
});
