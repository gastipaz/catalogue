import axios from 'axios';

export async function getData(url){
    const result = await axios.get(`https://catalogue-ecom.herokuapp.com${url}`, {withCredentials: true});
    return result
} 

export async function postData(url, data) {
    const result = await axios.post(`https://catalogue-ecom.herokuapp.com${url}`, data,{withCredentials: true, headers: {'Content-Type': 'application/json', Accept: 'application/json'}});
    return result
}