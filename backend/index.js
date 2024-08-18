const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const port = process.env.PORT || 5000
const cardRouter = require("./router/cardRouter");


mongoose.connect(process.env.DB_URI ).then(() => console.log('database connected'))
.catch((err) => console.log('Error :', err));

app.use(cors());

app.use(express.json());

app.get("/ping", (req,res)=>{
    res.send("Server is running");
})

app.use("/", cardRouter);


app.listen(port, 'localhost',()=>{
    console.log(`server start on http://localhost:${port}`)
})