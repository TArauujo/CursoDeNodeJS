const express = require('express')
const UserModel = require('../src/models/user.model');



const app = express();

app.use(express.json());

// Assim não vai precisar 'setar' o Contet-Type manualmente
// app.get('/home', (req, res) => {
//     res.status(200).send('<h1>Hello, World no express!!! </h1>');
// })


//Middlewares: Funções que são executadas antes das requisições
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`);

    next();
});

app.get('/users', async (req, res) => {
    try{
        const users = await UserModel.find({})
        
        res.status(200).json(users)
    }catch(error){
        return res.status(500).send(error.message);
    } 
});

//Pegar um usuário pelo ID
app.get("/users/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findById(id);
        
        return res.status(200).json(user);
    }catch(error){
        return res.status(500).send(error.message);
    }
})

// o post é para a criação de registro
app.post("/users", async (req, res) => {
    try{
        const user = UserModel.create(req.body)
        res.status(201).json(user);
    }catch (error){
        res.status(500).send(error.message)
    }
});

//Atualização de usuário
app.patch("/users/:id", async (req, res) => {
    try{
        const id = req.params.id;

        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).json(user);
    }catch(error){
        res.status(500).send(error.message);
    }
});

app.delete("/users/:id", async (req, res) => {
    try{
        const id = req.params.id;

        const user = await UserModel.findByIdAndDelete(id);

        res.status(200).json(user);
    }catch(error){
        res.status(500).send(error.message);
    }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));