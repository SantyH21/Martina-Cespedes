import { PrismaClient } from '@prisma/client';

class DeleteController {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async deleteAllRecords(req, res) {
    const table = req.params.table;

    try {
      await this.prisma[table].deleteMany({});
      console.log(`Todos los registros de la tabla ${table} han sido borrados.`);
      return res.status(200).json({ message: `Todos los registros de la tabla ${table} han sido borrados.` });
    } catch (error) {
      console.error(`Error borrando todos los registros de la tabla ${table}:`, error);
      return res.status(500).json({ error: `Error borrando todos los registros de la tabla ${table}.` });
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async deleteRecordById(req, res) {
    const table = req.params.table;
    const idField = req.params.idField;
    const idValue = req.params.idValue;

    try {
      const deletedRecord = await this.prisma[table].delete({
        where: { [idField]: idValue },
      });
      console.log(`Registro con ${idField} = ${idValue} de la tabla ${table} ha sido borrado.`);
      return res.status(200).json({ message: `Registro con ${idField} = ${idValue} de la tabla ${table} ha sido borrado.` });
    } catch (error) {
      console.error(`Error borrando el registro de la tabla ${table} con ${idField} = ${idValue}:`, error);
      return res.status(500).json({ error: `Error borrando el registro de la tabla ${table} con ${idField} = ${idValue}.` });
    } finally {
      await this.prisma.$disconnect();
    }
  }
}

export default DeleteController;

