const express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const { engine } = require("express-handlebars")
const app = express()

const urlencodeParser = bodyParser.urlencoded({extended:false})

const sql=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "cadastro"
})
sql.query("use cadastro")
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

app.post("/controllerForm", urlencodeParser, (req, res)=>{
    sql.query("insert into lourencliente values (?, ?, ?, ?, ?, ?)", [req.body.nome, req.body.sobrenome, req.body.usuario,
    req.body.email, req.body.password, req.body.password_confirm])
    res.render("controllerForm")
})

app.get("/login", (req, res)=> {
    res.render("userLogin")
})

const port = 3000

app.listen(port, (req, res) => console.log(`O servidor está rodando na porta ${port}`))