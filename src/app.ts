import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express()

const prisma = new PrismaClient

app.use(express.json())

const port = 3333


app.get("/client/", async (req, res) => {

    const result = await prisma.client.findMany()

    res.json(result)
})

// ------- CRIA O CLIENTE --------

app.post("/client/register", async (request, response) =>{
            
    const { name, email, CPF, CEP, numberPhone } = request.body
        
    const clientRegister = await prisma.client.create({
        data:{
            name,
            email,
            CPF,
            CEP,
            numberPhone
        }
    })

    response.json(clientRegister)
})

// ------------- CRIA O CARRO -------------

app.post("/cars/register", async (request, response) => {
    const { avaible, hireCar, modelCar, colorCar, fabCar } = request.body
    
    console.log(request.body);
    
    const carsRegister = await prisma.cars.create({
        data:{
            avaible,
            hireCar,
            modelCar,
            colorCar,
            fabCar,
        }
    })

    response.json(carsRegister)
})

// --------------------------------------

// ------------------- PROCURAR CARRO ------------------
app.get('/cars/find/:search', async (request, response) => {
    const { search } = request.body

    const findCar = await prisma.cars.findFirst({
        where:{
            OR :[
                {
                    modelCar:{
                        contains: search
                    }
                },
                {
                    colorCar:{
                        contains: search
                    }
                },
                {
                    fabCar:{
                        contains: search
                    }
                },

            ]
        }
    })

    response.json(findCar)
})

//  ------------ PROCURA O CARRO -----------

app.get('/cars/:search', async (request, response) => {
    const { search } = request.body

    const findClient = await prisma.cars.findFirst({
        where:{
            OR :[
                {
                    modelCar:{
                        contains: search
                    }
                },
                {
                    colorCar:{
                        contains: search
                    }
                },
                {
                    fabCar:{
                        contains: search
                    }
                },

            ]
        }
    })

    response.json(findClient)
})

//  ----------- PROCURA CLIENTE ---------

app.get('/client/:search', async (request, response) => {
    const { search } = request.body

    const findClient = await prisma.client.findFirst({
        where:{
            OR :[
                {
                    name:{
                        contains: search
                    }
                },
                {
                    email:{
                        contains: search
                    }
                },
                {
                    CPF:{
                        contains: search
                    }
                },
                {
                    CEP:{
                        contains: search
                    }
                },
                {
                    numberPhone:{
                        contains: search
                    }
                },
            ]
        }
    })

    response.json(findClient)
})

//  ----------- DELETA CLIENTE --------
app.delete('/client/:id', async (request, response) => {
    const { id } = request.params

    const deleteClient = await prisma.client.delete({
        where:{
            id: Number(id)
        }
    })

    response.json(deleteClient)
})

//  ------------ DELETA CARRO -------------
app.delete('/cars/:id', async (request, response) => {
    const { id } = request.params

    const deleteCars = await prisma.client.delete({
        where:{
            id: Number(id)
        }
    })

    response.json(deleteCars)
})

//  ------------- ATUALIZA CLIENTE ---------
app.put('/client/:id', async (request, response) =>{
    const { id } = request.params
    const { name, email, CPF, CEP, numberPhone } = request.body
    
    const updateClient = await prisma.client.update({
        where:{
            id: Number(id)
        },
        data:{
            name,
            email,
            CPF,
            CEP,
            numberPhone
        }
    })

    response.json(updateClient)
})

// ------------ ATUALIZA CARRO -------------
app.put('/cars/:id', async (request, response) =>{
    const { id } = request.params
    const { avaible, hireCar, modelCar, colorCar, fabCar } = request.body
    
    
    const updateCars = await prisma.cars.update({
        where:{
            id: Number(id)
        },
        data:{
            avaible,
            hireCar,
            modelCar,
            colorCar,
            fabCar
        }
    })

    response.json(updateCars)
})

// LISTAR TODOS 
// ALUGAR CARRO E DEVOLVER CARRO


app.listen(port, () => {
    console.log("server running = http://localhost:3333")
})