const express = require('express');

const app = express();

app.listen("3000", console.log("rodando"));
app.use(express.json())
app.route('/').get((req, res) => res.send("hello"))
app.route('/sobre').get((req, res) => res.send(";3"))
app.route('/').post((req, res) => res.send(req.body))

let author = "Reinaldo"
app.route('/').put((req,res)=> {
    author = req.body
    res.send(author)
})