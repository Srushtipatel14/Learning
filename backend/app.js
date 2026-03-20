require("dotenv").config();
const express=require("express");
const cors=require("cors");
const app=express();
const sendMsg=require("./controller/sendmsg")

app.use(express.json());
app.use(cors());

app.post("/sendmsg",sendMsg)
app.listen(8000);