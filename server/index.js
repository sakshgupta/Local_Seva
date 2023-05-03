const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const port = process.env.PORT || 5000;

// use middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
const con = require("./db/connection");

// Using Routes
app.use("/api", require("./routes/route"));
app.use("/api", require("./routes/authRoutes"));

if (process.env.NODE_ENV == "production") {
    // app.use(express.static(path.join(__dirname, '../client/build')));

    // app.get('/', function(req, res){
    //     res.sendFile(__dirname, '../client/build/index.html');
    // });
    app.get("/", function (req, res) {
        res.send("API running :)");
    });
} else {
    app.get("/", function (req, res) {
        res.send("API running :)");
    });
}

con.then((db) => {
    if (!db) return process.exit(1);
    else {
        // listen to the http server
        app.listen(port, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log(`Server is running on: http://localhost:${port}`);
            }
        });
        app.on("error", (err) =>
            console.log("Failed to Connect with HTTP Server: " + err)
        );
    }
    // error in mongodb connection
}).catch((error) => {
    console.log("Connection failed...!" + error);
});
