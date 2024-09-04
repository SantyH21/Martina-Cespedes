import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getAllRecords(tableName) {
  try {
   // Verifica si el nombre de la tabla es válido
    if (!prisma[tableName]) {
      throw new Error(`Table ${tableName} does not exist.`);
    }

    // Utiliza el cliente Prisma para obtener todos los registros de la tabla
    const records = await prisma[tableName].findMany();
    return records;
  } catch (error) {
    console.error(`Error fetching records from ${tableName}:`, error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


async function getRecordsByAttribute(tableName, attribute, value) {
  try {
    // Verifica si el nombre de la tabla es válido
    if (!prisma[tableName]) {
      throw new Error(`Table ${tableName} does not exist.`);
    }

    // Construye el filtro dinámico
    const filter = {};
    filter[attribute] = value;

    // Utiliza el cliente Prisma para obtener los registros que coinciden con el filtro
    const record_unico = await prisma[tableName].findMany({
      where: filter,
    });
    return record_unico;
  } catch (error) {
    console.error(`Error fetching records from ${tableName} where ${attribute} is ${value}:`, error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getEmpleadoByCredentials( mail, password) {
  try {
    // Verifica que ambos valores se proporcionen
    if (!mail || !password) {
      throw new Error("Los valores 'mail empleado' y 'contrasena empleado' son requeridos.");
    }

    // Utiliza el cliente Prisma para obtener los registros que coincidan con el mail y la contraseña
    const empleado = await prisma.empleado.findMany({
      where: {
        mail_empleado: mail,
        contrasena_empleado: password
      }
    });

    return empleado;
  } catch (error) {
    console.error(`Error extrayendo empleado con mail ${mail}`, error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


//Ejemplo de uso
 //getAllRecords('personas')
  //.then(records => console.log(records))
  //.catch(error => console.error(error));

//getRecordsByAttribute('telefono', 'numero_telefono', '1234567890')
  //.then(record_unico => console.log(record_unico))
  //.catch(error => console.error(error));