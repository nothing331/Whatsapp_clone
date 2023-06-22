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
