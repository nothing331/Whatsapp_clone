import axios from 'axios';




const url ='http://localhost:8000';

export const addUserr =  async(data) =>{
    try{
        await axios.post(`${url}/add`, data);
    }catch(error){
        console.log('Error while addUser API', error.message);
    }
}

export const getUser= async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log('Error while getUser API', error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error.message);
    }
}

export const getConversation = async (data) => {
    try {
        
        let response = await axios.post(`${url}/conversation/get`, data);
        // console.log("api"+response.data._id);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling getMessage API ', error.message);
    }
}

export const getMessages = async (id) => {
    try {
        // console.log(id);
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getMessage API ', error.message);
    }
}