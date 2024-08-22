import { PrismaClient } from '@prisma/client';

export class GetController {
  constructor() {
    this.prisma = new PrismaClient();
  }

  static async getAllRecords(req, res) {
    const { tableName } = req.params;

    try {
      // Verifica si el nombre de la tabla es válido
      if (!this.prisma[tableName]) {
        return res.status(400).json({ error: `Tabla ${tableName} no existe.` });
      }

      // Utiliza el cliente Prisma para obtener todos los registros de la tabla
      const records = await this.prisma[tableName].findMany();
      return res.status(200).json(records);
    } catch (error) {
      console.error(`Error buscando registros de la tabla ${tableName}:`, error);
      return res.status(500).json({ error: `Error buscando registros de la tabla ${tableName}.`, details: error.message });
    } finally {
      await this.prisma.$disconnect();
    }
  }

  static async getRecordsByAttribute(req, res) {
    const { tableName, attribute, value } = req.params;

    try {
      // Verifica si el nombre de la tabla es válido
      if (!this.prisma[tableName]) {
        return res.status(400).json({ error: `Tabla ${tableName} no existe.` });
      }

      // Construye el filtro dinámico
      const filter = {};
      filter[attribute] = value;

      // Utiliza el cliente Prisma para obtener los registros que coinciden con el filtro
      const records = await this.prisma[tableName].findMany({
        where: filter,
      });

      if (records.length === 0) {
        return res.status(404).json({ message: `No se encontraron registros en la tabla ${tableName} donde ${attribute} es ${value}.` });
      }

      return res.status(200).json(records);
    } catch (error) {
      console.error(`No se encontraron registros en la tabla ${tableName} donde ${attribute} es ${value}:`, error);
      return res.status(500).json({ error: `No se encontraron registros en la tabla ${tableName} donde ${attribute} es ${value}`, details: error.message });
    } finally {
      await this.prisma.$disconnect();
    }
  }
}

