import { combineReducers  } from "redux";

import {ADD_NEW_USER_REQUEST,ADD_NEW_USER_REQUEST_FAILURE,

    USER_LOGIN_REQUEST,USER_LOGIN_REQUEST_FAILURE,
 
    GET_ALL_USER_REQUEST,GET_ALL_USER_REQUEST_SUCESS,GET_ALL_USER_REQUEST_FAILURE,

    } from "../constants/userConstant";

    
      
      
     const newUserRequestState = {
         requestSucess:"",
         requestFail:""
     }

    const newUserRequestReducer= (state = newUserRequestState , action)=> {

      switch(action.type){
     
        case "ADD_NEW_USER_REQUEST":
           return{
            ...state,
            requestSucess:action.payload
            }
        case "ADD_NEW_USER_REQUEST_FAILURE":
            return{
            ...state,
            requestFail:action.payload
            }

        default:
                return state;
        }
    }

   const loginState = {
    loginSucess:" ",
    loginFail:" ",
    } 

   const loginReducer = ( state = loginState , action)=>{

     switch(action.type){

        case "USER_LOGIN_REQUEST":
            return{
             ...state,
             loginSucess:action.payload
            }   
        case "USER_LOGIN_REQUEST_FAILURE":
            return{
            ...state,
            loginFail:action.payload
            }

        
        default:
                return state;
        }
    }

const getAllUserState = {
    isloading:false,
    users:[],
    requestFail:""

}    

const getAllUserReducer = (state = getAllUserState, action)=>{

    switch(action.type){

        case "GET_ALL_USER_REQUEST":
            return{
            ...state,
            isloading:true
            }

        case "GET_ALL_USER_REQUEST_SUCESS":
            return{
            ...state,
            isloading:false,
            users:action.payload,
            }

        case "GET_ALL_USER_REQUEST_FAILURE":
            return{
            ...state,
            isloading:false,
            requestFail:action.payload
                
            }               

        default:
              return state;

     }


    }



    const userReducer = combineReducers({
          newUserRequestReducer,
          loginReducer,
         getAllUserReducer

    })

    export default userReducer;