import { API_URL } from "./api";

export const registerApi = async (data) =>{

    const response = await fetch(`${API_URL}/auth/register`, {
        method : "POST",
        headers : { "Content-Type" : "application/json"},
        body : JSON.stringify(data)
    })

    const result = await response.json();
    if(!response.ok){
        throw new Error(result.message || "Registration Failed..!");        
    } 
    return result
}

export const loginApi = async (data) =>{

    const response = await fetch(`${API_URL}/auth/login`, {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(data)
    })

    const result = await response.json();
    if(!response.ok){
        throw new Error(result.message || "Login Failed..!");
        
    }
    return result
}