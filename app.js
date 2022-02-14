
const mysql = require("mysql")//Importamos la libreria mysql
//Creamos la configuracion de la conexion
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'usuarios_db',
    user: 'root',
    password: ''
});

//Realizamos la conexión
conexion.connect(function (error){

    if (error){
        throw error;

    }else{
        console.log('conexión exitosa')
    }

});

//Consulta en base de datos
conexion.query("SELECT * FROM usuarios WHERE Apellido = 'Perez'",function (error,results,campos) {

    if (error){
        throw error;

    }else{
        results.forEach(result => {
           console.log(result)
        });
    }
    
})

conexion.end()

