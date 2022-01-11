
import {ADD_NEW_USER_REQUEST,
       ADD_NEW_USER_REQUEST_FAILURE,
       USER_LOGIN_REQUEST,
       USER_LOGIN_REQUEST_FAILURE,
       GET_ALL_USER_REQUEST,
       GET_ALL_USER_REQUEST_SUCESS,
       GET_ALL_USER_REQUEST_FAILURE,
       LOGOUT_REQUEST } from "../constants/userConstant";

import headerConfig from "./headersConfig";
import axios from "axios";
//const config = headerConfig();
//Register New User
export  const addNewUser = (userInput)=> async dispatch => {
   try{
    const result = await axios.post("http://localhost:8080/user/signup",userInput);
        dispatch( { type:ADD_NEW_USER_REQUEST, 
                    payload:result.data
                } )
                
   }
   catch(err){
        dispatch(  { type:ADD_NEW_USER_REQUEST_FAILURE, 
                     payload:err.message
                } )
   }
}

//User Login
export const userLogin = (userInput)=> async(dispatch)=>{
   try{

       const config={Headers:{'content-type':'application/json'}}
    const result = await axios.post("http://localhost:8080/user/login",userInput)
        dispatch( { type:USER_LOGIN_REQUEST, 
                    payload:result.data
                } )
                localStorage.setItem("authToken",JSON.stringify(result.data));
                
   }
   catch(err){
        dispatch(  { type:USER_LOGIN_REQUEST_FAILURE, 
                    payload:err.message
        } )
   }
   


}

export const logOut = ()=> dispatch =>{
    dispatch({type:LOGOUT_REQUEST})
    localStorage.removeItem("authToken");
}
 


//get all user
export const getAllUser = ()=> async (dispatch)=>{
     
    try{
        dispatch({type:GET_ALL_USER_REQUEST})
        const result = await axios.get("http://localhost:8080/user/allUser",headerConfig())

        dispatch({type:GET_ALL_USER_REQUEST_SUCESS,
                  payload:result.data})
    }
    catch(err){

        dispatch({type:GET_ALL_USER_REQUEST_FAILURE,
                 payload:err.message})
      
    }



}