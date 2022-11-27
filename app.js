const express = require("express")
const bodyParser = require("body-parser")

const port = 3000

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", function (req, res){
    res.render("home",{
        titleName: "Home"
    })
})

app.listen(port, function(){
    console.log("Server is now open in port "+port)
})