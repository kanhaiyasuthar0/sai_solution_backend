const express = require('express')
const cors = require("cors");
const app = express();
const router = require("./Routes/routes")
const connect = require("./Config/db")
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json([]))
app.use('/', router);

app.listen(PORT, (error) => {
    if (!error) {
        connect()
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    }
    else
        console.log("Error occurred, server can't start", error);
}
);