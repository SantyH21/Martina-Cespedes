import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createCiudad(req, res) {
  const data = req.body;
  try {
    const exists = await prisma.ciudad.findFirst({
      where: { nombre_ciudad: data.nombre_ciudad },
    });

    if (exists) {
      return res.status(409).json({ message: `Ciudad con nombre "${data.nombre_ciudad}" ya existe.` });
    }

    const newRecord = await prisma.ciudad.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en ciudad.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en ciudad:', error);
    return res.status(500).json({ error: 'Error creando registro en ciudad.' });
  }
}

async function createCliente(req, res) {
  const data = req.body;

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
      return res.status(409).json({ message: `Cliente con nombre responsable "${data.nom_resp_cliente}" ya existe.` });
    }

    const newRecord = await prisma.cliente.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en cliente.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en cliente:', error);
    return res.status(500).json({ error: 'Error creando registro en cliente.' });
  }
}

async function createDomicilio(req, res) {
  const data = req.body;

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
      return res.status(409).json({ message: `Domicilio con número "${data.numero_dom}", calle "${data.calle_dom}" ya existe.` });
    }

    const newRecord = await prisma.domicilio.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en domicilio.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en domicilio:', error);
    return res.status(500).json({ error: 'Error creando registro en domicilio.' });
  }
}

async function createEmpleado(req, res) {
  const data = req.body;

  try {
    const exists = await prisma.empleado.findFirst({
      where: {
        cargo_emp: data.cargo_emp,
        id_persona: data.id_persona,
      },
    });

    if (exists) {
      return res.status(409).json({ message: `Empleado con cargo "${data.cargo_emp}" ya existe.` });
    }

    const newRecord = await prisma.empleado.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en empleado.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en empleado:', error);
    return res.status(500).json({ error: 'Error creando registro en empleado.' });
  }
}

async function createInsumo(req, res) {
  const data = req.body;

  try {
    const exists = await prisma.insumo.findFirst({
      where: {
        nom_insumo: data.nom_insumo,
        id_prod: data.id_prod,
      },
    });

    if (exists) {
      return res.status(409).json({ message: `Insumo con nombre "${data.nom_insumo}" ya existe.` });
    }

    const newRecord = await prisma.insumo.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en insumo.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en insumo:', error);
    return res.status(500).json({ error: 'Error creando registro en insumo.' });
  }
}

async function createMateriaPrima(req, res) {
  const data = req.body;

  try {
    const exists = await prisma.materia_prima.findFirst({
      where: {
        nom_mat_prima: data.nom_mat_prima,
        id_prod: data.id_prod,
      },
    });

    if (exists) {
      return res.status(409).json({ message: `Materia Prima con nombre "${data.nom_mat_prima}" ya existe.` });
    }

    const newRecord = await prisma.materia_prima.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en materia prima.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en materia prima:', error);
    return res.status(500).json({ error: 'Error creando registro en materia prima.' });
  }
}

async function createPersonas(req, res) {
  const data = req.body;

  try {
    const exists = await prisma.personas.findFirst({
      where: {
        nom_persona: data.nom_persona,
        apel_persona: data.apel_persona,
      },
    });

    if (exists) {
      return res.status(409).json({ message: `Persona con nombre "${data.nom_persona}" ya existe.` });
    }

    const newRecord = await prisma.personas.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en personas.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en personas:', error);
    return res.status(500).json({ error: 'Error creando registro en personas.' });
  }
}

async function createProducto(req, res) {
  const data = req.body;

  try {
    const exists = await prisma.producto.findFirst({
      where: {
        nom_prod: data.nom_prod,
      },
    });

    if (exists) {
      return res.status(409).json({ message: `Producto con nombre "${data.nom_prod}" ya existe.` });
    }

    const newRecord = await prisma.producto.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en producto.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en producto:', error);
    return res.status(500).json({ error: 'Error creando registro en producto.' });
  }
}

async function createRol(req, res) {
  const data = req.body;

  try {
    const exists = await prisma.rol.findFirst({
      where: {
        tipo_rol: data.tipo_rol,
        mail_rol: data.mail_rol,
      },
    });

    if (exists) {
      return res.status(409).json({ message: `Rol con tipo "${data.tipo_rol}" y email "${data.mail_rol}" ya existe.` });
    }

    const newRecord = await prisma.rol.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en rol.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en rol:', error);
    return res.status(500).json({ error: 'Error creando registro en rol.' });
  }
}

async function createStock(req, res) {
  const data = req.body;

  try {
    const exists = await prisma.stock.findFirst({
      where: {
        nom_prod_stock: data.nom_prod_stock,
        id_prod: data.id_prod,
      },
    });

    if (exists) {
      return res.status(409).json({ message: `Stock con nombre de producto "${data.nom_prod_stock}" ya existe.` });
    }

    const newRecord = await prisma.stock.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en stock.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en stock:', error);
    return res.status(500).json({ error: 'Error creando registro en stock.' });
  }
}

async function createTelefono(req, res) {
  const data = req.body;

  try {
    const exists = await prisma.telefono.findFirst({
      where: {
        numero_telefono: data.numero_telefono,
        id_persona: data.id_persona,
      },
    });

    if (exists) {
      return res.status(409).json({ message: `Teléfono con número "${data.numero_telefono}" ya existe.` });
    }

    const newRecord = await prisma.telefono.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en teléfono.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en teléfono:', error);
    return res.status(500).json({ error: 'Error creando registro en teléfono.' });
  }
}

async function createVentas(req, res) {
  const data = req.body;

  try {
    const exists = await prisma.ventas.findFirst({
      where: {
        facturado: data.facturado,
        id_cliente: data.id_cliente,
        id_empleado: data.id_empleado,
      },
    });

    if (exists) {
      return res.status(409).json({ message: `Venta con datos similares ya existe.` });
    }

    const newRecord = await prisma.ventas.create({ data });
    return res.status(201).json({ message: 'Nuevo registro creado en ventas.', record: newRecord });
  } catch (error) {
    console.error('Error creando registro en ventas:', error);
    return res.status(500).json({ error: 'Error creando registro en ventas.' });
  }
}
