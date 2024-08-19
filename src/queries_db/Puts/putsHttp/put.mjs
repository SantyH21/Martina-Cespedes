import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateRecord(req, res) {
  const { table, searchData, updateData } = req.body;

  try {
    const updatedRecord = await prisma[table].update({
      where: searchData,
      data: updateData,
    });
    
    return res.status(200).json({
      message: `Registro en tabla ${table} actualizado correctamente.`,
      updatedRecord,
    });
  } catch (error) {
    console.error(`Error actualizando registro en la tabla ${table}:`, error);
    
    if (error.code === 'P2025') {
      // El código P2025 corresponde a un error de "Record not found" en Prisma
      return res.status(404).json({
        error: `Registro no encontrado en la tabla ${table} con el criterio dado.`,
      });
    }
    
    return res.status(500).json({
      error: `Error actualizando registro en la tabla ${table}.`,
      details: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
}
