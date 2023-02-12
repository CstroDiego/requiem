import express from 'express'
import ejs from 'ejs'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import indexRouter from './routes/index.js'

var app = express()
var __dirname = dirname(fileURLToPath(import.meta.url))


app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRouter)

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.listen(3000)
console.log('reloaded')
