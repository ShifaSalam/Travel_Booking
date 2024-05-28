import { commonApi } from "./commonApi";
import base_url from "./base_url";

// register
export const userRegister=async(data)=>{
    return await commonApi("POST",`${base_url}/register`,data,"")
}

// Login
export const userLogin=async(data)=>{
    return await commonApi("POST",`${base_url}/login`,data,"")
}

// add tours
export const addTours=async(data,header)=>{
    return await commonApi("POST",`${base_url}/create-tour`,data,header)
}

// get all tour packages
export const allTours=async()=>{
    return await commonApi("GET",`${base_url}/all-tours`,"","")
}

// to edit tour packages
export const editTours=async(id,data,header)=>{
    return await commonApi("PUT",`${base_url}/edit-tours/${id}`,data,header)
}

// delete-tour packages
export const deleteTour=async(id,header)=>{
    return await commonApi("DELETE",`${base_url}/delete-tours/${id}`,{},header)
}

// get all tour packages to users
export const allUserTours=async(header,search)=>{
    return await commonApi("GET",`${base_url}/all-usertours?search=${search}`,"",header)
}

// home-tours(limitted)
export const homeTours=async(header)=>{
    return await commonApi("GET",`${base_url}/home-tours`,"",header)
}