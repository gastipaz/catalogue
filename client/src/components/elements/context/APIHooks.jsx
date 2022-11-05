import axios from 'axios';

export async function getData(url){
    const result = await axios.get(url, {withCredentials: true});
    return result
} 

export async function postData(url, data) {
    const result = await axios.post(url, data,{withCredentials: true, headers: {'Content-Type': 'application/json', Accept: 'application/json'}});
    return result
}