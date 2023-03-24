import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Rafael",
    //         email: "rafael@gmail.com"
    //     }
    // });

    // const post = await prisma.post.create({
    //     data: {
    //         title: "teste",
    //         content: "teste content",
    //         authorId: 2
    //     },
    // })

    // const readUser = await prisma.user.findMany({
    //     where:{
    //         name: "Rafael"
    //     },
    // });

    // const user = await prisma.user.create({  ----- cria duas tabelas diferentes
    //     data:{
    //         name: "Carlos",
    //         email: "carlos@gmail.com",
    //         posts:{
    //             create:{
    //                 title: "Carlos teste"
    //             }
    //         }
    //     }
    // })

    // await prisma.user.delete({   ----- deleta
    //     where:{
    //         email: "teste123@gmail.com"
    //     }
    // })

    // await prisma.user.update({
    //     where: {
    //         id: 5
    //     },
    //     data:{
    //         name: "Claudio",
    //         email: "claudio@gmail.com"
    //     }
    // })
}




main().then( async() => {
    await prisma.$disconnect()
})
    .catch(async (e) =>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })