import mongoose from "mongoose";


const Connection = async() => {
    const URL = 'mongodb://ayush33156:qYjovDDxknwUxWGM@ac-9ujtits-shard-00-00.izp68zi.mongodb.net:27017,ac-9ujtits-shard-00-01.izp68zi.mongodb.net:27017,ac-9ujtits-shard-00-02.izp68zi.mongodb.net:27017/?ssl=true&replicaSet=atlas-5ttds0-shard-0&authSource=admin&retryWrites=true&w=majority';
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true})
        console.log('Database connection established');
    }catch(error){
        console.log('Error is there', error.message);
    }
}

export default Connection;