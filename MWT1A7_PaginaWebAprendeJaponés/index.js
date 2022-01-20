const express = require('express'); //Traer express al proycto

const app = express(); //Crear una instancia de express

app.use(express.static('./public')); //Indicar en que lugar están los archivos estáticos
app.use(express.static('./public/HTML')); //Indicar en que lugar están los archivos estáticos html

app.get('/', (req, res) => { 
    res.render("./public/HTML/index.html")
})

app.listen(3000, () => console.log("Servidor en el puerto 3000")) //Poner servidor a escuchar 