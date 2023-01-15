const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const { engine } = require("express-handlebars")
const app = express()

//Routes and Templates

app.engine("handlebars", engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use("/css", express.static("css"))
app.use("/js", express.static("js"))
app.use("/img", express.static("img"))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/formulario", (req, res) => {
    res.render("formulario")
})


const port = 3000

app.listen(port, (req, res) => console.log(`O servidor está rodando na porta ${port}`))