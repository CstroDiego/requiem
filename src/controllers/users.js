import {connection} from '../models/database.js'

var crud_usuarios = ({})

crud_usuarios.getUsers = (req, res) => {

    const nombreCompleto = req.body.txtNombre
    const descripcion = req.body.txtDescripcion
    const empresa = req.body.txtEmpresa
    const ine = req.body.txtIne
    const rfc = req.body.txtRfc
    const curp = req.body.txtCurp
    const nss = req.body.txtNss
    const tipoSangre = req.body.txtTipoSangre
    const licenciaManejo = req.body.txtLicenciaManejo
    const tipoLicencia = req.body.txtTipoLicencia
    const vigenciaLicencia = req.body.txtVigenciaLicencia
    const telefono = req.body.txtTelefono


    connection.query('INSERT INTO usuarios SET ?', {
        nombreCompleto: nombreCompleto,
        descripcion: descripcion,
        empresa: empresa,
        ine: ine,
        rfc: rfc,
        curp: curp,
        nss: nss,
        tipoSangre: tipoSangre,
        licenciaManejo: licenciaManejo,
        tipoLicencia: tipoLicencia,
        vigenciaLicencia: vigenciaLicencia,
        telefono: telefono
    }, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/')
        }
    })
}

export {crud_usuarios}
