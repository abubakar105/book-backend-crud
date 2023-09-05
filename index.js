import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import router from './router/todoRoute.js'
import cors from "cors"
const app = express()
app.use(bodyParser.json());
app.use(cors())

const connection = mongoose.connection;

connection.once("connected", () => console.log("Connected to DATABASE"))
connection.on("ERROR", () => console.log("Connection Failed"))

mongoose.connect("mongodb+srv://abubakar:A.a5913259@cluster0.5mm629p.mongodb.net/mernstack?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use("/todo", router);
app.listen(9000)