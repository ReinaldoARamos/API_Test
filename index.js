const express = require('express');

const app = express();

app.listen("3000", console.log("rodando"));

app.route('/').get((req, res) => res.send("hello"))
app.route('/sobre').get((req, res) => res.send(";3"))