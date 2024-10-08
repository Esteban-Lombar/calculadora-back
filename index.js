const express = require('express');
const {urlencoded, json} = require('express');
const router = require('./routes/calculadora.routes.js');
const cors = require('cors');

//prueba 2.1

const app = express();

app.use(urlencoded({extended: true}));
app.use(json());
app.use(cors());

app.get('/', async (rec, res)=> {
    res.send("Hola soy el backend de la calculadora de Esteban")
})

app.use('/v1/calculadora', router);

app.listen(3500, ()=>{
    console.log("Listening at port 3500");
})