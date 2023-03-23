import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express()

const prisma = new PrismaClient

app.use(express.json())

const port = 3333

app.get("/", async (request, response) =>{
    const tableUser = await prisma.user.findMany();

    response.json(tableUser)
})

app.post('/', async (request, response) => {
    const  { name, email } = request.body

    const createUser = await prisma.user.create({
        data:{
            name,
            email,
        }
    })

    response.json(createUser)
})

app.post('/post/:id', async (request, response) =>{
    const { title, content } = request.body
    const { id } = request.params;

    const createPost = await prisma.post.create({
        data:{
            title,
            content,
            authorId: Number(id)
        }
    })

    response.json(createPost)
})

app.listen(port, () => {
    console.log("server running = http://localhost:3333")
})