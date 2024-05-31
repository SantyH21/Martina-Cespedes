import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllRecords(table) {
  try {
    await prisma[table].deleteMany({});
    console.log(`Todos los registros de la tabla ${table} han sido borrados.`);
  } catch (error) {
    console.error(`Error borrando todos los registros de la tabla ${table}:`, error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function deleteRecordById(table, idField, idValue) {
  try {
    await prisma[table].delete({
      where: { [idField]: idValue },
    });
    console.log(`Registro con ${idField} = ${idValue} de la tabla ${table} ha sido borrado.`);
  } catch (error) {
    console.error(`Error borrando el registro de la tabla ${table} con ${idField} = ${idValue}:`, error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// // Ejemplo de uso
// (async () => {
//   try {
//     // Borrar todos los registros de la tabla 'ciudad'
//     const tableNameAll = 'ciudad';
//     await deleteAllRecords(tableNameAll);
    
//     // Borrar un registro específico de la tabla 'ciudad' por ID
//     const tableNameById = 'ciudad';
//     const idField = 'id_ciudad';
//     const idValue = 1; // ID del registro a borrar
//     await deleteRecordById(tableNameById, idField, idValue);
//   } catch (error) {
//     console.error('Error en el proceso de borrado:', error);
//   }
// })();
