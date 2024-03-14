import axios from 'axios';
const API_URL = 'https://joesarx.azurewebsites.net';
//const API_URL = 'http://localhost:8000';
export const getAllData = async () => {
    console.log("helloService")
    try {
        const res = await axios.get(`${API_URL}/datosclima/average/`);
        return res.data;
    } catch (error) {
        
        throw new Error('Failed to fetch data');
    }
};

export const getLatest = async () => {
    console.log("helloService")
    try {
        const res = await axios.get(`${API_URL}/datosclima/latest/`);
        return res.data;
    } catch (error) {
        
        throw new Error('Failed to fetch data');
    }
};
const Services = {
    getAllData,
    getLatest
};

export default Services;