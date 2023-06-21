import axios from 'axios';


import React from 'react'

const url ='http://localhost:8000';

export const addUserr =  async(data) =>{
    try{
        await axios.post(url, data);
    }catch(error){
        console.log('Error while addUser API', error.message);
    }
}
