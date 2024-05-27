import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//funcion find many personas
async function Func_Many_personas() {
  const Personas = await prisma.personas.findMany()
  console.log(Personas)
}


Func_Many_personas()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })