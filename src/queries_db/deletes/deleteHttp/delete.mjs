import { PrismaClient } from '@prisma/client';

export class DeleteController {
  static prisma = new PrismaClient();

  // Eliminar registro de la tabla cliente
  static async deleteCliente(req, res) {
    try {
      const { id_cliente } = req.params;
  
      // Eliminar todas las ventas relacionadas con este cliente
      await DeleteController.prisma.ventas.deleteMany({
        where: { id_cliente: Number(id_cliente) },
      });
  
      // Ahora eliminar el cliente
      const deletedCliente = await DeleteController.prisma.cliente.delete({
        where: { id_cliente: Number(id_cliente) },
      });
  
      return res.status(200).json({ message: 'Cliente eliminado exitosamente.', deletedCliente });
    } catch (error) {
      console.error('Error al eliminar cliente:', error);
      return res.status(500).json({ error: 'Error al eliminar cliente.', details: error.message });
    } finally {
      await DeleteController.prisma.$disconnect();
    }
  }
  

  // Eliminar registro de la tabla materia_prima
  static async deleteMateriaPrima(req, res) {
    try {
      const { id_mat_prima } = req.params;

      const deletedMateriaPrima = await DeleteController.prisma.materia_prima.delete({
        where: { id_mat_prima: Number(id_mat_prima) },
      });

      return res.status(200).json({ message: 'Materia prima eliminada exitosamente.', deletedMateriaPrima });
    } catch (error) {
      console.error('Error al eliminar materia prima:', error);
      return res.status(500).json({ error: 'Error al eliminar materia prima.', details: error.message });
    } finally {
      await DeleteController.prisma.$disconnect();
    }
  }

  // Eliminar registro de la tabla insumo
  static async deleteInsumo(req, res) {
    try {
      const { id_insumo } = req.params;

      const deletedInsumo = await DeleteController.prisma.insumo.delete({
        where: { id_insumo: Number(id_insumo) },
      });

      return res.status(200).json({ message: 'Insumo eliminado exitosamente.', deletedInsumo });
    } catch (error) {
      console.error('Error al eliminar insumo:', error);
      return res.status(500).json({ error: 'Error al eliminar insumo.', details: error.message });
    } finally {
      await DeleteController.prisma.$disconnect();
    }
  }

  // Eliminar registro de la tabla empleado
  static async deleteEmpleado(req, res) {
    try {
      const { id_empleado } = req.params;

      const deletedEmpleado = await DeleteController.prisma.empleado.delete({
        where: { id_empleado: Number(id_empleado) },
      });

      return res.status(200).json({ message: 'Empleado eliminado exitosamente.', deletedEmpleado });
    } catch (error) {
      console.error('Error al eliminar empleado:', error);
      return res.status(500).json({ error: 'Error al eliminar empleado.', details: error.message });
    } finally {
      await DeleteController.prisma.$disconnect();
    }
  }

  // Eliminar registro de la tabla ventas
  static async deleteVenta(req, res) {
    try {
      const { id_ventas } = req.params;

      const deletedVenta = await DeleteController.prisma.ventas.delete({
        where: { id_ventas: Number(id_ventas) },
      });

      return res.status(200).json({ message: 'Venta eliminada exitosamente.', deletedVenta });
    } catch (error) {
      console.error('Error al eliminar venta:', error);
      return res.status(500).json({ error: 'Error al eliminar venta.', details: error.message });
    } finally {
      await DeleteController.prisma.$disconnect();
    }
  }
}



