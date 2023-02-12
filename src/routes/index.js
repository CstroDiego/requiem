import {Router} from 'express'
import {crud_usuarios} from "../controllers/users.js"
import express from "express";
import {dirname, join} from "path";
import {fileURLToPath} from "url";


var app = express()
var router = Router()
var __dirname = dirname(fileURLToPath(import.meta.url))


app.use(express.urlencoded({extended: false}))
app.use(express.json())

router.get('/', (req, res) => {
    res.render('index', {title: 'Log in'})
})
router.get('/create', (req, res) => {
    res.render('create', {title: 'Registro nuevo', action: '/adduser'})
})

router.post('/adduser', crud_usuarios.getUsers)


export default router
