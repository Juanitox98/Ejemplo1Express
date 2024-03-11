const express =require('express')
const app =express()
const port = 3000

app.get('/Miruta', (req, res) => {
    res.send('Ortiz la niña feliz')
})
app.listen(port, () =>{
    console.log('La aplicación se está ejecutando por el puerto ' + port)
})