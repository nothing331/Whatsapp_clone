import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async() => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-9ujtits-shard-00-00.izp68zi.mongodb.net:27017,ac-9ujtits-shard-00-01.izp68zi.mongodb.net:27017,ac-9ujtits-shard-00-02.izp68zi.mongodb.net:27017/?ssl=true&replicaSet=atlas-5ttds0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true})
        console.log('Database connection established');
    }catch(error){
        console.log('Error is there', error.message);
    }
}

export default Connection;