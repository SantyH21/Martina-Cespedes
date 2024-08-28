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
}
