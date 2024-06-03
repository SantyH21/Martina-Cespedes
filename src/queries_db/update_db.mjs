import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateRecord(table, searchData, updateData) {
  try {
    const updatedRecord = await prisma[table].update({
      where: searchData,
      data: updateData,
    });
    return updatedRecord;
  } catch (error) {
    console.error(`Error updating record in table ${table}:`, error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Ejemplo de uso
async function update_ejemplo() {
  try {
    // Actualizar registro en la tabla 'ciudad' usando el ID
    const tableName = 'ciudad';
    const searchData = { id_ciudad: 5 }; // Condición para encontrar el registro a actualizar
    const updateData = { nombre_ciudad: 'Ciudad Actualizada por ID' }; // Nuevos datos para actualizar

    const updatedRecord = await updateRecord(tableName, searchData, updateData);
    console.log('Registro actualizado:', updatedRecord);
    
    // Actualizar registro en la tabla 'ciudad' usando otro campo único
    const searchDataByName = { nombre_ciudad: 'Ciudad 2' }; // Condición para encontrar el registro a actualizar
    const updateDataByName = { nombre_ciudad: 'Ciudad Actualizada por Nombre' }; // Nuevos datos para actualizar

    const updatedRecordByName = await updateRecord(tableName, searchDataByName, updateDataByName);
    console.log('Registro actualizado:', updatedRecordByName);
    
  } catch (error) {
    console.error('Error actualizando registro:', error);
  }
};

update_ejemplo()
