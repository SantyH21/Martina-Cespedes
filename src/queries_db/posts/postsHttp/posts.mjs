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
      const { cargo_emp, mail_empleado, nom_persona, apel_persona } = req.body;

      if (!cargo_emp || !mail_empleado || !nom_persona || !apel_persona) {
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
}

