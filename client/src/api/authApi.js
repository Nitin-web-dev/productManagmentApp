import API from "./axios.js";

export const registerUser = async function(signupdata){

    const response = await  API.post('/signup', signupdata);
    return response.data;
}

export const loginUser = async function(logindata){
    const response = await API.post('/login', logindata);
    return response.data;
}