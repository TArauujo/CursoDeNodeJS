const fs = require('fs')
const path = require('path')

// Criar uma pasta
// fs.mkdir(path.join(__dirname, './test'), (error) => {
//     if(error){
//         return console.log("Erro encontrado na criação da pasta: ", error)
//     }
//     console.log("Pasta criada com sucesso!!");
// })

// Criar um arquivo
// Também pode ser usado para sobrescrever um arquivo existente

fs.writeFile(path.join(__dirname, './test', 'test.txt'), 'Hello, node!!!',
 (error) =>{
    if(error){
        console.log("Erro encontrado na criação do arquivo: ", error)
    }
    console.log("Arquivo criado com sucesso!!");
    // Adicionar à um arquivo

    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello, World!!',
    (error) => {
        if(error){
            console.log("Erro encontrado na edição do arquivo: ",error)
        }
        console.log("Arquivo modificado com sucesso!!")
    })

    // Ler arquivo
    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
        if(error){
            console.log("Erro encontrado na leitura do arquivo: ", error)
        }
        console.log(data)
    })

})

// Adicionar à um arquivo

fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello, World!!',
    (error) => {
        if(error){
            console.log("Erro encontrado na edição do arquivo: ",error)
        }
        console.log("Arquivo modificado com sucesso!!")
})

