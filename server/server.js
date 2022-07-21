const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path: "./config.env"});
const port = process.env.PORT || 5000;

// use middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
const con = require('./db/connection');

// Using Routes
app.use(require('./routes/route'));

con.then(db => {
    if(!db) return process.exit(1);
    else{
        // listen to the http server
        app.listen(port, function(err) {
            if(err) {console.error(err);}
            else {console.log( `Server is running on: http://localhost:${port}` );}
        });
        app.on('error', err => console.log("Failed to Connect with HTTP Server: " + err));
    }
    // error in mongodb connection
}).catch(error => {
    console.log("Connection failed...!" + error);
})
