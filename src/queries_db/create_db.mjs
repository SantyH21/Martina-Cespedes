  //Queries Crear datos y verifica si ya existen
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
  
  // Función para crear un registro en la tabla ciudad
  async function createCiudad(data) {
    const existingCiudad = await prisma.ciudad.findUnique({
      where: { nombre_ciudad: data.nombre_ciudad },
    });
    if (existingCiudad) {
      return existingCiudad;
    }
    return await prisma.ciudad.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla cliente
  async function createCliente(data) {
    const existingCliente = await prisma.cliente.findUnique({
      where: { nom_resp_cliente: data.nom_resp_cliente },
    });
    if (existingCliente) {
      return existingCliente;
    }
    return await prisma.cliente.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla domicilio
  async function createDomicilio(data) {
    const existingDomicilio = await prisma.domicilio.findFirst({
      where: {
        numero_dom: data.numero_dom,
        calle_dom: data.calle_dom,
        id_persona: data.id_persona,
        id_ciudad: data.id_ciudad,
      },
    });
    if (existingDomicilio) {
      return existingDomicilio;
    }
    return await prisma.domicilio.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla empleado
  async function createEmpleado(data) {
    const existingEmpleado = await prisma.empleado.findFirst({
      where: {
        cargo_emp: data.cargo_emp,
        id_persona: data.id_persona,
      },
    });
    if (existingEmpleado) {
      return existingEmpleado;
    }
    return await prisma.empleado.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla insumo
  async function createInsumo(data) {
    const existingInsumo = await prisma.insumo.findUnique({
      where: { nom_insumo: data.nom_insumo },
    });
    if (existingInsumo) {
      return existingInsumo;
    }
    return await prisma.insumo.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla materia_prima
  async function createMateriaPrima(data) {
    const existingMateriaPrima = await prisma.materia_prima.findUnique({
      where: { nom_mat_prima: data.nom_mat_prima },
    });
    if (existingMateriaPrima) {
      return existingMateriaPrima;
    }
    return await prisma.materia_prima.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla personas
  async function createPersonas(data) {
    const existingPersona = await prisma.personas.findFirst({
      where: {
        nom_persona: data.nom_persona,
        apel_persona: data.apel_persona,
      },
    });
    if (existingPersona) {
      return existingPersona;
    }
    return await prisma.personas.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla producto
  async function createProducto(data) {
    const existingProducto = await prisma.producto.findUnique({
      where: { nom_prod: data.nom_prod },
    });
    if (existingProducto) {
      return existingProducto;
    }
    return await prisma.producto.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla rol
  async function createRol(data) {
    const existingRol = await prisma.rol.findFirst({
      where: {
        tipo_rol: data.tipo_rol,
        mail_rol: data.mail_rol,
      },
    });
    if (existingRol) {
      return existingRol;
    }
    return await prisma.rol.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla stock
  async function createStock(data) {
    const existingStock = await prisma.stock.findFirst({
      where: {
        nom_prod_stock: data.nom_prod_stock,
        id_prod: data.id_prod,
      },
    });
    if (existingStock) {
      return existingStock;
    }
    return await prisma.stock.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla telefono
  async function createTelefono(data) {
    const existingTelefono = await prisma.telefono.findFirst({
      where: {
        numero_telefono: data.numero_telefono,
        id_persona: data.id_persona,
      },
    });
    if (existingTelefono) {
      return existingTelefono;
    }
    return await prisma.telefono.create({
      data,
    });
  }
  
  // Función para crear un registro en la tabla ventas
  async function createVentas(data) {
    const existingVentas = await prisma.ventas.findFirst({
      where: {
        facturado: data.facturado,
        cobrado: data.cobrado,
        pendiente: data.pendiente,
        id_cliente: data.id_cliente,
        id_empleado: data.id_empleado,
      },
    });
    if (existingVentas) {
      return existingVentas;
    }
    return await prisma.ventas.create({
      data,
    });
  }

  
// Ejemplos de uso
async function create_ejemplo() {
    try {
      // Crear registros de ejemplo asegurando las relaciones
  
      // Crear ciudades
      const ciudad1 = await createCiudad({ nombre_ciudad: 'Ciudad 1' });
      const ciudad2 = await createCiudad({ nombre_ciudad: 'Ciudad 2' });
      const ciudad3 = await createCiudad({ nombre_ciudad: 'Ciudad 3' });
  
      // Crear personas
      const persona1 = await createPersonas({
        nom_persona: 'Persona 1',
        apel_persona: 'Apellido 1',
      });
      const persona2 = await createPersonas({
        nom_persona: 'Persona 2',
        apel_persona: 'Apellido 2',
      });
      const persona3 = await createPersonas({
        nom_persona: 'Persona 3',
        apel_persona: 'Apellido 3',
      });
  
      // Crear domicilios
      const domicilio1 = await createDomicilio({
        numero_dom: 123,
        calle_dom: 'Calle 1',
        id_persona: persona1.id_persona,
        id_ciudad: ciudad1.id_ciudad,
      });
      const domicilio2 = await createDomicilio({
        numero_dom: 456,
        calle_dom: 'Calle 2',
        id_persona: persona2.id_persona,
        id_ciudad: ciudad2.id_ciudad,
      });
      const domicilio3 = await createDomicilio({
        numero_dom: 789,
        calle_dom: 'Calle 3',
        id_persona: persona3.id_persona,
        id_ciudad: ciudad3.id_ciudad,
      });
  
      // Crear clientes
      const cliente1 = await createCliente({
        segmento: 'Segmento 1',
        nom_resp_cliente: 'Responsable 1',
        estado_cliente: 'Activo',
        coment_cliente: 'Comentario 1',
        id_persona: persona1.id_persona,
      });
      const cliente2 = await createCliente({
        segmento: 'Segmento 2',
        nom_resp_cliente: 'Responsable 2',
        estado_cliente: 'Activo',
        coment_cliente: 'Comentario 2',
        id_persona: persona2.id_persona,
      });
      const cliente3 = await createCliente({
        segmento: 'Segmento 3',
        nom_resp_cliente: 'Responsable 3',
        estado_cliente: 'Inactivo',
        coment_cliente: 'Comentario 3',
        id_persona: persona3.id_persona,
      });
  
      // Crear empleados
      const empleado1 = await createEmpleado({
        cargo_emp: 'Cargo 1',
        id_persona: persona1.id_persona,
      });
      const empleado2 = await createEmpleado({
        cargo_emp: 'Cargo 2',
        id_persona: persona2.id_persona,
      });
      const empleado3 = await createEmpleado({
        cargo_emp: 'Cargo 3',
        id_persona: persona3.id_persona,
      });
  
      // Crear insumos
      const insumo1 = await createInsumo({
        nom_insumo: 'Insumo 1',
      });
      const insumo2 = await createInsumo({
        nom_insumo: 'Insumo 2',
      });
      const insumo3 = await createInsumo({
        nom_insumo: 'Insumo 3',
      });
  
      // Crear materia prima
      const materiaPrima1 = await createMateriaPrima({
        nom_mat_prima: 'Materia Prima 1',
      });
      const materiaPrima2 = await createMateriaPrima({
        nom_mat_prima: 'Materia Prima 2',
      });
      const materiaPrima3 = await createMateriaPrima({
        nom_mat_prima: 'Materia Prima 3',
      });
  
      // Crear productos
      const producto1 = await createProducto({
        nom_prod: 'Producto 1',
      });
      const producto2 = await createProducto({
        nom_prod: 'Producto 2',
      });
      const producto3 = await createProducto({
        nom_prod: 'Producto 3',
      });
  
      // Crear roles
      const rol1 = await createRol({
        tipo_rol: 'Rol 1',
        contr_rol: 'Contraseña 1',
        mail_rol: 'mail1@example.com',
        id_empleado: empleado1.id_empleado,
      });
      const rol2 = await createRol({
        tipo_rol: 'Rol 2',
        contr_rol: 'Contraseña 2',
        mail_rol: 'mail2@example.com',
        id_empleado: empleado2.id_empleado,
      });
      const rol3 = await createRol({
        tipo_rol: 'Rol 3',
        contr_rol: 'Contraseña 3',
        mail_rol: 'mail3@example.com',
        id_empleado: empleado3.id_empleado,
      });
  
      // Crear stocks
      const stock1 = await createStock({
        nom_prod_stock: 'Stock 1',
        cant_stock: 100,
        id_prod: producto1.id_prod,
      });
      const stock2 = await createStock({
        nom_prod_stock: 'Stock 2',
        cant_stock: 200,
        id_prod: producto2.id_prod,
      });
      const stock3 = await createStock({
        nom_prod_stock: 'Stock 3',
        cant_stock: 300,
        id_prod: producto3.id_prod,
      });
  
      // Crear teléfonos
      const telefono1 = await createTelefono({
        numero_telefono: 1234567890n,
        id_persona: persona1.id_persona,
      });
      const telefono2 = await createTelefono({
        numero_telefono: 2345678901n,
        id_persona: persona2.id_persona,
      });
      const telefono3 = await createTelefono({
        numero_telefono: 3456789012n,
        id_persona: persona3.id_persona,
      });
  
      // Crear ventas
      const ventas1 = await createVentas({
        facturado: 'Sí',
        cobrado: 'Sí',
        pendiente: 'No',
        id_cliente: cliente1.id_cliente,
        id_empleado: empleado1.id_empleado,
      });
      const ventas2 = await createVentas({
        facturado: 'No',
        cobrado: 'No',
        pendiente: 'Sí',
        id_cliente: cliente2.id_cliente,
        id_empleado: empleado2.id_empleado,
      });
      const ventas3 = await createVentas({
        facturado: 'Sí',
        cobrado: 'No',
        pendiente: 'Sí',
        id_cliente: cliente3.id_cliente,
        id_empleado: empleado3.id_empleado,
      });
  
      console.log('Datos de ejemplo insertados correctamente.');
    } catch (error) {
      console.error('Error creando registros:', error);
    } finally {
      await prisma.$disconnect();
    }
  };
  create_ejemplo();