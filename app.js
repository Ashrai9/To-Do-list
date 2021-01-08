const express = require("express")
const bodyParser = require("body-parser")
const ejs = require('ejs');
//const { static } = require("express");

const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
var data = []
app.get("/", function (req, res) {
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let today = new Date()
    var day = today.toLocaleDateString("en-US", options)

    res.render('list', { whichDay: day, newListItems: data })
})

app.post("/", function (req, res) {
    let items = req.body.fname
    data.push(items)
    res.redirect("/")

})
app.listen(3000, function () {
    console.log("The server is running at port 3000 !")
})