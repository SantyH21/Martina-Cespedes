import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function delete_all() {
    // Borra todos los registros de las tablas
    await prisma.telefono.deleteMany();
    await prisma.stock.deleteMany();
    await prisma.ventas.deleteMany();
    await prisma.rol.deleteMany();
    await prisma.producto.deleteMany();
    await prisma.materia_prima.deleteMany();
    await prisma.insumo.deleteMany();
    await prisma.empleado.deleteMany();
    await prisma.domicilio.deleteMany();
    await prisma.cliente.deleteMany();
    await prisma.ciudad.deleteMany();
    await prisma.personas.deleteMany();
}

delete_all()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});
