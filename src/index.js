import express from "express";
import {connect} from "./config/database.js";
import routes from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api", routes);

app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("mongodb connected");
});