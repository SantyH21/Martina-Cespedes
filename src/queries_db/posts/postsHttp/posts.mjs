import { PrismaClient } from '@prisma/client';

export class PostController {
  static prisma = new PrismaClient();

  static async createMateriaPrima(req, res) {
    try {
      const { nom_mat_prima, fecha_ing_mat_prima, descripcion, cantidad, medida } = req.body;

      if (!nom_mat_prima || !cantidad || !medida) {
        return res.status(400).json({ error: 'nom_mat_prima, cantidad y medida son campos obligatorios.' });
      }

      // Convertir fecha_ing_mat_prima a formato ISO si está presente
      const fechaIngreso = fecha_ing_mat_prima ? new Date(fecha_ing_mat_prima) : new Date();

      // Inserta un nuevo registro en la tabla materia_prima
      const newMateriaPrima = await PostController.prisma.materia_prima.create({
        data: {
          nom_mat_prima,
          fecha_ing_mat_prima: fechaIngreso, // Usar la fecha convertida
          descripcion,
          cantidad,
          medida,
        },
      });

      return res.status(201).json(newMateriaPrima);
    } catch (error) {
      console.error('Error al crear materia prima:', error);
      return res.status(500).json({ error: 'Error al crear materia prima.', details: error.message });
    } finally {
      await PostController.prisma.$disconnect();
    }
  }


  static async createInsumo(req, res) {
    try {
      const { nom_insumo, fecha_ing_insumo, cantidad, descripcion } = req.body;

      if (!nom_insumo || !cantidad) {
        return res.status(400).json({ error: 'nombre de insumo y cantidad son campos obligatorios.' });
      }

      // Convertir fecha_ing_insumo a formato ISO si está presente
      const fechaIngreso = fecha_ing_insumo ? new Date(fecha_ing_insumo) : new Date();

      // Inserta un nuevo registro en la tabla insumo
      const newInsumo = await PostController.prisma.insumo.create({
        data: {
          nom_insumo,
          fecha_ing_insumo: fechaIngreso, // Usar la fecha convertida
          cantidad,
          descripcion,
        },
      });

      return res.status(201).json(newInsumo);
    } catch (error) {
      console.error('Error al crear insumo:', error);
      return res.status(500).json({ error: 'Error al crear insumo.', details: error.message });
    } finally {
      await PostController.prisma.$disconnect();
    }
  }

// Función para crear un nuevo empleado
static async createEmpleado(req, res) {
  try {
    const { cargo_emp, mail_empleado, nom_persona, apel_persona, contrasena_empleado } = req.body;

    if (!cargo_emp || !mail_empleado || !nom_persona || !apel_persona || !contrasena_empleado) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Verificar si ya existe un empleado con el mismo nombre, apellido y correo electrónico
    const existingEmpleado = await PostController.prisma.empleado.findFirst({
      where: {
        mail_empleado,
        personas: {
          nom_persona,
          apel_persona,
        },
      },
      include: {
        personas: true,
      },
    });

    if (existingEmpleado) {
      return res.status(409).json({ error: 'El empleado ya existe.' });
    }

    // Crear el registro en la tabla personas
    const nuevaPersona = await PostController.prisma.personas.create({
      data: {
        nom_persona,
        apel_persona,
      },
    });

    // Crear el registro en la tabla empleado
    const nuevoEmpleado = await PostController.prisma.empleado.create({
      data: {
        cargo_emp,
        mail_empleado,
        contrasena_empleado,
        id_persona: nuevaPersona.id_persona, // Relaciona la persona con el empleado
      },
    });

    return res.status(201).json({ empleado: nuevoEmpleado, persona: nuevaPersona });
  } catch (error) {
    console.error('Error al crear empleado:', error);
    return res.status(500).json({ error: 'Error al crear empleado.', details: error.message });
  } finally {
    await PostController.prisma.$disconnect();
  }
}


static async createCliente(req, res) {
  try {
    const { segmento, nom_resp_cliente, estado_cliente, coment_cliente, dni_cliente, nom_persona, apel_persona, numero_dom, calle_dom, nombre_ciudad, numero_telefono } = req.body;

    // Verifica si ya existe un cliente con el mismo DNI
    const existingCliente = await PostController.prisma.cliente.findFirst({
      where: {
        dni_cliente: dni_cliente,
      },
    });

    if (existingCliente) {
      return res.status(400).json({ error: 'El cliente con este DNI ya existe.' });
    }

    // Construye los datos opcionales
    const domicilioData = (numero_dom || calle_dom || nombre_ciudad) ? {
      create: {
        ...(numero_dom && { numero_dom }),
        ...(calle_dom && { calle_dom }),
        ...(nombre_ciudad && {
          ciudad: {
            create: { nombre_ciudad }
          }
        })
      }
    } : undefined;

    // Verifica que numero_telefono no sea undefined antes de convertir a BigInt
    const telefonoData = numero_telefono ? {
      create: {
        numero_telefono: BigInt(numero_telefono) // Convierte el número a BigInt solo si está presente
      }
    } : undefined;

    // Inserta un nuevo registro en la tabla cliente y personas
    const newCliente = await PostController.prisma.cliente.create({
      data: {
        segmento,
        nom_resp_cliente,
        estado_cliente,
        coment_cliente,
        dni_cliente,
        personas: {
          create: {
            nom_persona,
            apel_persona,
            ...(domicilioData && { domicilio: domicilioData }), // Solo crea el domicilio si hay datos
            ...(telefonoData && { telefono: telefonoData }) // Solo crea el teléfono si hay datos
          },
        },
      },
      include: {
        personas: {
          include: {
            domicilio: {
              include: {
                ciudad: true,
              },
            },
            telefono: true,
          },
        },
      },
    });

    // Serializa los BigInt a string
    const serializedCliente = {
      ...newCliente,
      personas: {
        ...newCliente.personas,
        telefono: newCliente.personas?.telefono?.map(t => ({
          ...t,
          numero_telefono: t.numero_telefono?.toString(), // Convierte BigInt a String
        })),
      },
    };

    return res.status(201).json(serializedCliente);
  } catch (error) {
    console.error('Error al crear cliente:', error);
    return res.status(500).json({ error: 'Error al crear cliente.', details: error.message });
  } finally {
    await PostController.prisma.$disconnect();
  }
}




    static async createVenta(req, res) {
      try {
        const { facturado, cobrado, pendiente, fecha_fac, cantidad_producto, id_cliente, id_empleado, productos } = req.body;
    
        // Validar la lista de productos
        if (!Array.isArray(productos) || productos.length === 0) {
          return res.status(400).json({ error: 'La lista de productos es inválida o está vacía.' });
        }
    
        // Crear la venta
        const nuevaVenta = await PostController.prisma.ventas.create({
          data: {
            facturado,
            cobrado,
            pendiente,
            fecha_fac: new Date(fecha_fac),
            cantidad_producto,
            cliente: { connect: { id_cliente } },
            empleado: { connect: { id_empleado } },
          }
        });
    
        // Crear las entradas en la tabla intermedia VentaProducto
        const ventaProductoData = productos.map(id_prod => ({
          id_ventas: nuevaVenta.id_ventas,
          id_prod
        }));
    
        await PostController.prisma.ventaProducto.createMany({
          data: ventaProductoData
        });
    
        res.status(201).json(nuevaVenta);
      } catch (error) {
        console.error('Error al crear la venta:', error);
        res.status(500).json({ error: 'Error al crear la venta' });
      }
    }
    
  }
