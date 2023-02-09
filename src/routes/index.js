import {Router} from 'express'
import mysql from 'mysql';
import bodyParser from "body-parser";

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var connection = mysql.createConnection({
    host: 'localhost', user: 'diego', password: '761834925', database: 'requiemdb', multipleStatements: true
})

const router = Router()

router.get('/', (req, res) => {
    res.render('index', {title: 'Log in'})
})
router.get('/create', (req, res) => {
    res.render('create', {title: 'Registro nuevo', action: '/adduser'})
})

router.post('/adduser', jsonParser, function (req, res) {
    var sql = "INSERT INTO usuarios (nombreCompleto, descripcion, empresa, ine, curp, rfc, nss ,tipoSangre ,licenciaManejo ,tipoLicencia ,vigenciaLicencia ,telefono) VALUES ?";
    var values = [
        [req.body.nombreCompleto, req.body.descripcion, req.body.empresa, req.body.ine, req.body.curp, req.body.rfc, req.body.nss, req.body.tipoSangre, req.body.licenciaManejo, req.body.tipoLicencia, req.body.vigenciaLicencia, req.body.telefono]
    ];
    connection.query(sql, [values], function (err, result) {
        if (err) throw err
        console.log("Numero de registros insertados: " + result.affectedRows);
    })
    res.redirect('/create')
})


export default router
