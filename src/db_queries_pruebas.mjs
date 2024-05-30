// //funcion find many tabla
// async function Func_Many_tabla(tabla) {
//   const find = await prisma[tabla].findMany()
//   console.log(find) 
// }


// //funcion find many personas
// async function Func_Many_personas() {
//   const personas = await prisma.personas.findMany()
//   console.log(Personas)
// }

// //funcion find many ventas
// async function Func_Many_ventas() {
//   const ventas = await prisma.ventas.findMany()
//   console.log(ventas)
// }

// //funcion find many empleados
// async function Func_Many_empleados() {
//   const empleados = await prisma.empleado.findMany()
//   console.log(empleados) 
// }

// //funcion find many materia prima
// async function Func_Many_mat_prima() {
//   const mat_prima = await prisma.materia_prima.findMany()
//   console.log(mat_prima) 
// }

// //funcion find many stock
// async function Func_Many_stock() {
//   const stock = await prisma.stock.findMany()
//   console.log(stock) 
// }

// //funcion find many insumo
// async function Func_Many_insumo() {
//   const insumo = await prisma.insumo.findMany()
//   console.log(insumo) 
// }

// //funcion find many productos
// async function Func_Many_productos() {
//   const productos = await prisma.producto.findMany()
//   console.log(productos) 
// }

// Func_Many_tabla('personas')
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })