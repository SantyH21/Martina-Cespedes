import { PrismaClient } from '@prisma/client';
export class PutController {
  static prisma = new PrismaClient(); 

  // Método para actualizar un registro de stock
  static async putStock(req, res) {
    try {
      const { cant_stock } = req.body;

      if (!cant_stock) {
        return res.status(400).json({ error: 'El campo cantidad stock es obligatorio.' });
      }

      // Actualiza el stock
      await PutController.prisma.stock.updateMany({
        data: { cant_stock },
      });

      // Obtener el stock actualizado
      const updatedStock = await PutController.prisma.stock.findFirst({
        select: {
          id_stock: true,
          nom_prod_stock: true,
          cant_stock: true,
        },
      });

      return res.status(200).json({
        message: 'Cantidad de stock actualizada con éxito.',
        stock: updatedStock,
      });
    } catch (error) {
      console.error('Error al actualizar la cantidad de stock:', error);
      return res.status(500).json({ error: 'Error al actualizar la cantidad de stock.' });
    } finally {
      await PutController.prisma.$disconnect();
    }
  }

  //Metodo para actualiazar registro de empleado
  static async putEmpleado(req, res) {
    const { mail_empleado } = req.params;
    const { nombre, apellido, mail, rol, contrasenaAnterior, nuevaContrasena } = req.body;

    try {
      // Verificar si el empleado existe por mail usando findFirst()
      const empleado = await PutController.prisma.empleado.findFirst({
        where: { mail_empleado },
        include: {
          personas: true,
        },
      });

      if (!empleado) {
        return res.status(404).json({ error: 'Empleado no encontrado.' });
      }

      // Verificar si la contraseña anterior coincide
      if (empleado.contrasena_empleado !== contrasenaAnterior) {
        return res.status(400).json({ error: 'La contraseña anterior no coincide.' });
      }

      // Actualizar los datos del empleado y su persona asociada
      const updatedEmpleado = await PutController.prisma.empleado.update({
        where: { id_empleado: empleado.id_empleado },
        data: {
          cargo_emp: rol,
          contrasena_empleado: nuevaContrasena,
          mail_empleado: mail,
          personas: {
            update: {
              nom_persona: nombre,
              apel_persona: apellido,
            },
          },
        },
        include: {
          personas: true,
        },
      });

      return res.status(200).json({ message: 'Empleado actualizado con éxito.', updatedEmpleado });
    } catch (error) {
      console.error('Error actualizando empleado:', error);
      return res.status(500).json({ error: 'Error actualizando empleado.', details: error.message });
    } finally {
      await PutController.prisma.$disconnect();
    }
  }
  
}

