const express = require('express')

const app = express()

// Assim não vai precisar 'setar' o Contet-Type manualmente
app.get('/home', (req, res) => {
    res.status(200).send('<h1>Hello, World no express!!! </h1>');
})

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Ronaldo',
            email: 'ronaldo@09.com'
        },
        {
            name: 'Marcio Araujo',
            email: 'marcio@araujo.com',
        },
    ];

    res.status(200).json(users);
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));