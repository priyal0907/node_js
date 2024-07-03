require("dotenv").config();
let http = require("http");
let express = require("express");
const dbconnect = require("./db/db.connect");
const routes = require("./routes");
let app = express();
let cors = require("cors");


//cors
app.use(
    cors({
        origin: "*",
    })
);


//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/v1", routes)


//Database connection:-
dbconnect()


// Server setup:-
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server get Started:) ${process.env.PORT}`);
});




