// importing 
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js"

// app config
const app = express()
const port = process.env.PORT || 9000 //this created a port on 9000


//DB config
const connection_url = 'mongodb+srv://admin:ua3BDEvA3T9PcU8e@cluster0.b9vy92h.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//


//api routing
app.get('/', (req, res) => res.status(200).send("hello")); // this is creation of an api which will do the get request

app.post('/messages/new', (req, res) => {
    const dbMessages = req.body;

    dbMessages.create(dbMessages, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})



//listen
app.listen(port, ()=>console.log('Listening on the localhost:${port}'));


//mongodb admin pasword ua3BDEvA3T9PcU8e