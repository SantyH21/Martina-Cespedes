import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllRecords(req, res) {
  const { tableName } = req.params;

  try {
    // Verifica si el nombre de la tabla es válido
    if (!prisma[tableName]) {
      return res.status(400).json({ error: `Table ${tableName} does not exist.` });
    }

    // Utiliza el cliente Prisma para obtener todos los registros de la tabla
    const records = await prisma[tableName].findMany();
    return res.status(200).json(records);
  } catch (error) {
    console.error(`Error devolviendo registro de: ${tableName}:`, error);
    return res.status(500).json({ error: `Error devolviendo registro de: ${tableName}.`, details: error.message });
  } finally {
    await prisma.$disconnect();
  }
}

async function getRecordsByAttribute(req, res) {
  const { tableName, attribute, value } = req.params;

  try {
    // Verifica si el nombre de la tabla es válido
    if (!prisma[tableName]) {
      return res.status(400).json({ error: `Tabla ${tableName} no existe.` });
    }

    // Construye el filtro dinámico
    const filter = {};
    filter[attribute] = value;

    // Utiliza el cliente Prisma para obtener los registros que coinciden con el filtro
    const records = await prisma[tableName].findMany({
      where: filter,
    });

    if (records.length === 0) {
      return res.status(404).json({ message: `No hay registros en ${tableName} donde ${attribute} es ${value}.` });
    }

    return res.status(200).json(records);
  } catch (error) {
    console.error(`Error devolviendo registro de: ${tableName} donde ${attribute} es ${value}:`, error);
    return res.status(500).json({ error: `Error devolviendo registro de: ${tableName} donde ${attribute} es ${value}.`, details: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
