const express = require('express');

const app = express();

app.listen("3000", console.log("rodando"));
app.use(express.json())
app.route('/').get((req, res) => res.send("oi") )
app.route('/:variavel').get((req, res) =>  res.send(req.params.variavel))

app.route('/user/query').get((req,res) => res.send(req.query.name))
/*

app.route('/').get((req, res) => res.send("hello"))

app.route('/sobre').get((req, res) => res.send(";3"))

app.route('/').post((req, res) => {
    res.send(req.body.nome)
})

app.route('/:identificador').delete((res,req) =>{
    res.send(req.params.identificador)
})

let author = "Reinaldo"
app.route('/').put((req,res)=> {
    author = req.body.author
    res.send(author)
})

*/