// create an express app
const express = require("express")
const app = express()
var cors = require('cors')

app.use(cors())

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get("/data", function (req, res) {
    var data = [{id:1,name:'Mhmd'},{id:2,name:'Simon'}];
    res.send(data)
  })
  

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));