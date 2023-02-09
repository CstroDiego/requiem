import mysql from 'mysql';

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'diego',
    password: '761834925',
    database: 'requiemdb',
    multipleStatements: true
})

connection.connect(function (err) {
    if (err) throw err
    console.log('Conexion establecida...')
    var sql = "INSERT INTO usuarios (nombreCompleto, descripcion, empresa, ine, curp, rfc, nss ,tipoSangre ,licenciaManejo ,tipoLicencia ,vigenciaLicencia ,telefono) VALUES ?";
    var values = [
        ['Diego', 'Programador', 'Requiem', '123456789', '123456789', '123456789', '123456789', 'O+', '123456789', 'A', '2021-12-12', '123456789']
    ];
    connection.query(sql, [values], function (err, result) {
        if (err) throw err
        console.log("Numero de registros insertados: " + result.affectedRows);
    })
})

connection.end()