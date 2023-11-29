//import/require express so we can use it to create our application
const express = require("express");

// require cors so we can use it below
const cors = require('cors');

//run express to create an express app and store it in the variable named app
const app = express();

//let express know that it is going to get JSON sent to it at some point in a request
app.use(express.json());

// use cors
app.use(cors())

//creating a variable represents the port we want our app to listen on
const port = 5000;

// add a default route
app.get('/', function (req, res) {
res.send('You have reached the top-level route with a GET');
})

const studentRouter = require("./routes/student.routes")
app.use('/api', studentRouter);

//basically fire up the express app.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})