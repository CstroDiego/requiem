import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'diego',
    password: '761834925',
    database: 'requiemdb'
})

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('connected as id ' + connection.threadId)
})

export {connection};
