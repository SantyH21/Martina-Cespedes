import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createCiudad(data) {
  try {
    const exists = await prisma.ciudad.findFirst({
      where: { nombre_ciudad: data.nombre_ciudad },
    });
    if (exists) {
      console.log(`Ciudad con nombre "${data.nombre_ciudad}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.ciudad.create({ data });
    console.log('Nuevo registro creado en ciudad:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en ciudad:', error);
    throw error;
  }
}

async function createCliente(data) {
  try {
    const exists = await prisma.cliente.findFirst({
      where: {
        segmento: data.segmento,
        nom_resp_cliente: data.nom_resp_cliente,
        estado_cliente: data.estado_cliente,
        coment_cliente: data.coment_cliente,
        id_persona: data.id_persona,
      },
    });
    if (exists) {
      console.log(`Cliente con nombre responsable "${data.nom_resp_cliente}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.cliente.create({ data });
    console.log('Nuevo registro creado en cliente:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en cliente:', error);
    throw error;
  }
}

async function createDomicilio(data) {
  try {
    const exists = await prisma.domicilio.findFirst({
      where: {
        numero_dom: data.numero_dom,
        calle_dom: data.calle_dom,
        id_persona: data.id_persona,
        id_ciudad: data.id_ciudad,
      },
    });
    if (exists) {
      console.log(`Domicilio con número "${data.numero_dom}", calle "${data.calle_dom}", id_persona "${data.id_persona}", id_ciudad "${data.id_ciudad}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.domicilio.create({ data });
    console.log('Nuevo registro creado en domicilio:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en domicilio:', error);
    throw error;
  }
}

async function createEmpleado(data) {
  try {
    const exists = await prisma.empleado.findFirst({
      where: {
        cargo_emp: data.cargo_emp,
        id_persona: data.id_persona,
      },
    });
    if (exists) {
      console.log(`Empleado con id: "${data.id_persona}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.empleado.create({ data });
    console.log('Nuevo registro creado en empleado:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en empleado:', error);
    throw error;
  }
}

async function createInsumo(data) {
  try {
    const exists = await prisma.insumo.findFirst({
      where: {
        nom_insumo: data.nom_insumo,
        id_prod: data.id_prod,
      },
    });
    if (exists) {
      console.log(`Insumo con nombre "${data.nom_insumo}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.insumo.create({ data });
    console.log('Nuevo registro creado en insumo:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en insumo:', error);
    throw error;
  }
}

async function createMateriaPrima(data) {
  try {
    const exists = await prisma.materia_prima.findFirst({
      where: {
        nom_mat_prima: data.nom_mat_prima,
        id_prod: data.id_prod,
      },
    });
    if (exists) {
      console.log(`Materia prima con nombre "${data.nom_mat_prima}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.materia_prima.create({ data });
    console.log('Nuevo registro creado en materia prima:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en materia prima:', error);
    throw error;
  }
}

async function createPersonas(data) {
  try {
    const exists = await prisma.personas.findFirst({
      where: {
        nom_persona: data.nom_persona,
        apel_persona: data.apel_persona,
      },
    });
    if (exists) {
      console.log(`Persona con nombre "${data.nom_persona}" y apellido "${data.apel_persona}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.personas.create({ data });
    console.log('Nuevo registro creado en personas:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en personas:', error);
    throw error;
  }
}

async function createProducto(data) {
  try {
    const exists = await prisma.producto.findFirst({
      where: { nom_prod: data.nom_prod },
    });
    if (exists) {
      console.log(`Producto con nombre "${data.nom_prod}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.producto.create({ data });
    console.log('Nuevo registro creado en producto:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en producto:', error);
    throw error;
  }
}

async function createRol(data) {
  try {
    const exists = await prisma.rol.findFirst({
      where: {
        tipo_rol: data.tipo_rol,
        mail_rol: data.mail_rol,
      },
    });
    if (exists) {
      console.log(`Rol con tipo "${data.tipo_rol}" y correo "${data.mail_rol}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.rol.create({ data });
    console.log('Nuevo registro creado en rol:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en rol:', error);
    throw error;
  }
}

async function createStock(data) {
  try {
    const exists = await prisma.stock.findFirst({
      where: { nom_prod_stock: data.nom_prod_stock },
    });
    if (exists) {
      console.log(`Stock con nombre de producto "${data.nom_prod_stock}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.stock.create({ data });
    console.log('Nuevo registro creado en stock:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en stock:', error);
    throw error;
  }
}

async function createTelefono(data) {
  try {
    const exists = await prisma.telefono.findFirst({
      where: { numero_telefono: data.numero_telefono },
    });
    if (exists) {
      console.log(`Telefono con número "${data.numero_telefono}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.telefono.create({ data });
    console.log('Nuevo registro creado en telefono:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en telefono:', error);
    throw error;
  }
}

async function createVentas(data) {
  try {
    const exists = await prisma.ventas.findFirst({
      where: {
        facturado: data.facturado,
        cobrado: data.cobrado,
        pendiente: data.pendiente,
      },
    });
    if (exists) {
      console.log(`Venta con facturado "${data.facturado}", cobrado "${data.cobrado}" y pendiente "${data.pendiente}" ya existe.`);
      return exists;
    }
    const newRecord = await prisma.ventas.create({ data });
    console.log('Nuevo registro creado en ventas:', newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error creando registro en ventas:', error);
    throw error;
  }
}

// Ejemplo de uso
async function main() {
  try {
    // Crear registro en 'personas' primero para que existan las relaciones
    const persona1 = await createPersonas({ nom_persona: 'Nombre Ejemplo', apel_persona: 'Apellido Ejemplo' });

    // Crear registro en 'ciudad'
    const ciudad1 = await createCiudad({ nombre_ciudad: 'Ciudad Ejemplo' });

    // Crear registro en 'cliente' relacionado con 'personas'
    const cliente1 = await createCliente({
      segmento: 'Segmento Ejemplo',
      nom_resp_cliente: 'Responsable Ejemplo',
      estado_cliente: 'Activo',
      coment_cliente: 'Comentario Ejemplo',
      id_persona: persona1.id_persona,
    });

    // Crear registro en 'domicilio' relacionado con 'personas' y 'ciudad'
    await createDomicilio({
      numero_dom: 123,
      calle_dom: 'Calle Ejemplo',
      id_persona: persona1.id_persona,
      id_ciudad: ciudad1.id_ciudad,
    });

    // Crear registro en 'empleado' relacionado con 'personas'
    const empleado1 = await createEmpleado({ cargo_emp: 'Cargo Ejemplo', id_persona: persona1.id_persona });

    // Crear registro en 'producto'
    const producto1 = await createProducto({ nom_prod: 'Producto Ejemplo' });

    // Crear registro en 'insumo' relacionado con 'producto'
    await createInsumo({ nom_insumo: 'Insumo Ejemplo', id_prod: producto1.id_prod });

    // Crear registro en 'materia_prima' relacionado con 'producto'
    await createMateriaPrima({ nom_mat_prima: 'Materia Prima Ejemplo', id_prod: producto1.id_prod });

    // Crear registro en 'rol' relacionado con 'empleado'
    await createRol({ tipo_rol: 'Tipo Ejemplo', contr_rol: 'Contraseña Ejemplo', mail_rol: 'mail@example.com', id_empleado: empleado1.id_empleado });

    // Crear registro en 'stock' relacionado con 'producto'
    await createStock({ nom_prod_stock: 'Producto Stock Ejemplo', cant_stock: 100, id_prod: producto1.id_prod });

    // Crear registro en 'telefono' relacionado con 'personas'
    await createTelefono({ numero_telefono: 1234567890n, id_persona: persona1.id_persona });

    // Crear registro en 'ventas' relacionado con 'cliente' y 'empleado'
    await createVentas({
      facturado: 'Facturado Ejemplo',
      cobrado: 'Cobrado Ejemplo',
      pendiente: 'Pendiente Ejemplo',
      id_cliente: cliente1.id_cliente,
      id_empleado: empleado1.id_empleado,
    });

  } catch (error) {
    console.error('Error en el proceso de creación de registros:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
});



