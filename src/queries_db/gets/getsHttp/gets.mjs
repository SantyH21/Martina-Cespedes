import { PrismaClient } from '@prisma/client';

export class GetController {
  static prisma = new PrismaClient(); // Propiedad estática para PrismaClient

  // Función para obtener todos los registros de empleados con datos asociados de personas
  static async getAllRecordsEmpleados(req, res) {
    try {
      const empleados = await GetController.prisma.empleado.findMany({
        select: {
          id_empleado: true,
          cargo_emp: true,
          mail_empleado: true,
          personas: {
            select: {
              nom_persona: true,
              apel_persona: true
            }
          }
        }
      });

      if (empleados.length === 0) {
        return res.status(404).json({ message: 'No se encontraron registros de empleados.' });
      }

      return res.status(200).json(empleados);
    } catch (error) {
      console.error('Error buscando registros de empleados:', error);
      return res.status(500).json({ error: 'Error buscando registros de empleados.', details: error.message });
    } finally {
      await GetController.prisma.$disconnect(); // Desconecta el cliente Prisma
    }
  }

  // Función para obtener registros de empleados basados en un atributo específico
  static async getRecordsByAttributeEmpleado(req, res) {
    const { attribute, value } = req.params;

    try {
      // Convierte el valor a número si es necesario (para campos Int)
      const filterValue = isNaN(value) ? value : parseInt(value, 10);

      // Construye el filtro dinámico
      const filter = {};
      filter[attribute] = filterValue;

      // Realiza la consulta para obtener los registros que coinciden con el filtro
      const empleados = await GetController.prisma.empleado.findMany({
        where: filter,
        select: {
          id_empleado: true,
          cargo_emp: true,
          mail_empleado: true,
          personas: {
            select: {
              nom_persona: true,
              apel_persona: true
            }
          }
        }
      });

      if (empleados.length === 0) {
        return res.status(404).json({ message: `No se encontraron registros de empleados donde ${attribute} es ${value}.` });
      }

      return res.status(200).json(empleados);
    } catch (error) {
      console.error(`Error buscando registros de empleados donde ${attribute} es ${value}:`, error);
      return res.status(500).json({ error: `Error buscando registros de empleados donde ${attribute} es ${value}.`, details: error.message });
    } finally {
      await GetController.prisma.$disconnect(); // Desconecta el cliente Prisma
    }
  }

  // Función para obtener todos los registros de insumos con los campos específicos
  static async getAllRecordsInsumos(req, res) {
    try {
      const insumos = await GetController.prisma.insumo.findMany({
        select: {
          id_insumo: true,
          nom_insumo: true,
          fecha_ing_insumo: true,
          descripcion: true,
          cantidad: true
        }
      });

      if (insumos.length === 0) {
        return res.status(404).json({ message: 'No se encontraron registros de insumos.' });
      }

      return res.status(200).json(insumos);
    } catch (error) {
      console.error('Error buscando registros de insumos:', error);
      return res.status(500).json({ error: 'Error buscando registros de insumos.', details: error.message });
    } finally {
      await GetController.prisma.$disconnect(); 
    }
  }
  
    // Función para obtener todos los registros de la tabla materia_prima
    static async getAllRecordsMateriaPrima(req, res) {
      try {
        // Utiliza el cliente Prisma para obtener todos los registros de la tabla materia_prima
        const records = await GetController.prisma.materia_prima.findMany({
          select: {
            id_mat_prima: true,
            nom_mat_prima: true,
            fecha_ing_mat_prima: true,
            descripcion: true,
            cantidad: true,
            medida: true,
          },
        });
  
        return res.status(200).json(records);
      } catch (error) {
        console.error('Error buscando registros de materia prima:', error);
        return res.status(500).json({ error: 'Error buscando registros de materia prima.', details: error.message });
      } finally {
        await GetController.prisma.$disconnect(); 
      }
    }
  

  // Función para obtener todos los registros de la tabla stock
  static async getAllRecordsStock(req, res) {
    try {
      // Utiliza el cliente Prisma para obtener todos los registros de la tabla stock
      const records = await GetController.prisma.stock.findMany({
        select: {
          id_stock: true,
          nom_prod_stock: true,
          cant_stock: true,
          producto: {
            select: {
              nom_prod: true,
            },
          },
        },
      });

      return res.status(200).json(records);
    } catch (error) {
      console.error('Error buscando registros de stock:', error);
      return res.status(500).json({ error: 'Error buscando registros de stock.', details: error.message });
    } finally {
      await GetController.prisma.$disconnect(); // Desconecta el cliente Prisma
    }
  }
 
    // Función para obtener todos los registros de la tabla cliente
    static async getAllRecordsClientes(req, res) {
      try {
        // Utiliza el cliente Prisma para obtener todos los registros de la tabla cliente
        const records = await GetController.prisma.cliente.findMany({
          select: {
            id_cliente: true,
            segmento: true,
            nom_resp_cliente: true,
            estado_cliente: true,
            coment_cliente: true,
            ventas: {
              select: {
                id_ventas: true,
              },
            },
            personas: {
              select: {
                domicilio: {
                  select: {
                    numero_dom: true,
                    calle_dom: true,
                    ciudad: {
                      select: {
                        nombre_ciudad: true,
                      },
                    },
                  },
                },
                telefono: {
                  select: {
                    numero_telefono: true, // Este campo es BigInt
                  },
                },
              },
            },
          },
        });
  
        // Serializa los BigInt a string
        const serializedRecords = records.map(record => ({
          ...record,
          personas: {
            ...record.personas,
            telefono: record.personas?.telefono?.map(t => ({
              ...t,
              numero_telefono: t.numero_telefono?.toString(), // Convierte BigInt a String
            })),
          },
        }));
  
        return res.status(200).json(serializedRecords);
      } catch (error) {
        console.error('Error buscando registros de cliente:', error);
        return res.status(500).json({ error: 'Error buscando registros de cliente.', details: error.message });
      } finally {
        await GetController.prisma.$disconnect(); // Desconecta el cliente Prisma
      }
    }
  }
  

  