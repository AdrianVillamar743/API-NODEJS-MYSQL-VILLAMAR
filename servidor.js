const express=require ('express')
const res = require('express/lib/response')
const mysql=require('mysql')
const myconn=require('express-myconnection')

const rutas=require('./rutas')


const app =express()
app.set('port',process.env.PORT||9000)

const dboptions={
    host     : 'localhost',  
    user     : 'root',  
    password : '',  
    database : 'villamar_sistema'  
}

//middleware
app.use(myconn(mysql,dboptions,'single'))
app.use(express.json())


//rutas
app.use('/api',rutas)

//servidor corriendo
app.listen(app.get('port'),()=>{
    console.log("Servidor ejecutandose en el puerto",app.get('port'))
})