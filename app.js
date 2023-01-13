require('dotenv').config()
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

const userRouter = require('./routes/users.route');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Using cors
app.use(cors())
// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 3009;

// home route
app.get("/", (req,res)=>{
    res.sendFile( __dirname + path.join("/./views/index.html"))
})

app.use("/users",userRouter)
// route not found
app.use( (err, req, res, next)=>{
    res.status(404).json({ message: "Route not found"})
})
app.listen( PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})

module.exports = app