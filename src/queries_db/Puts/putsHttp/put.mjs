import { PrismaClient } from '@prisma/client';

class PutController {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async updateRecord(req, res) {
    const { table, searchData, updateData } = req.body;

    try {
      const updatedRecord = await this.prisma[table].update({
        where: searchData,
        data: updateData,
      });
      
      return res.status(200).json({
        message: `Registros en tabla ${table} actualizados correctamente.`,
        updatedRecord,
      });
    } catch (error) {
      console.error(`Error error actualizando los registros en la tabla: ${table}:`, error);
      
      if (error.code === 'P2025') {
        // El código P2025 corresponde a un error de "Record not found" en Prisma
        return res.status(404).json({
          error: `No se encontraron registros en la tabla ${table} con el criterio dado.`,
        });
      }
      
      return res.status(500).json({
        error: `Error actualizando registros en la tabla ${table}.`,
        details: error.message,
      });
    } finally {
      await this.prisma.$disconnect();
    }
  }
}

export default PutController;
