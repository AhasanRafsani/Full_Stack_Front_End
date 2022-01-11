import axios from "axios";

import {ADD_NEW_CATEGORY_REQUEST,ADD_NEW_CATEGORY_REQUEST_FAILURE,
       GET_ALL_CATEGORY_REQUEST,GET_ALL_CATEGORY_REQUEST_SUCESS,
       GET_ALL_CATEGORY_REQUEST_FAILURE,
       UPDATE_CATEGORY_REQUEST,UPDATE_CATEGORY_REQUEST_SUCESS,
       UPDATE_CATEGORY_REQUEST_FAILURE ,
       GET_CATEGORY_REQUEST_SUCESS_BYID,GET_CATEGORY_REQUEST_FAILURE_BYID} from "../constants/categoryConstant";
       
import headerConfig from "./headersConfig";
//const config = headerConfig();

export const addNewCategory = (category)=> async(dispatch)=> {
    try{
    const res = await axios.post("http://localhost:8080/category/addNewCategory",category,headerConfig())

         dispatch({type:ADD_NEW_CATEGORY_REQUEST, 
                   payload:res.data })
    }
    catch(err){

         dispatch({type:ADD_NEW_CATEGORY_REQUEST_FAILURE, 
                   payload:err.message })
    }


}

export const getAllCategory = ()=> async (dispatch) => {

     try{
          
          dispatch({type:GET_ALL_CATEGORY_REQUEST})
          const result = await axios.get("http://localhost:8080/category/allCategory",headerConfig());

          dispatch({type:GET_ALL_CATEGORY_REQUEST_SUCESS,
                    payload:result.data })

          
        }
     catch(err){

          dispatch({type:GET_ALL_CATEGORY_REQUEST_FAILURE,
                     payload:err.message })
     }


}

export const updateCategory = ()=>async (dispatch)=>{
     try{
     dispatch({type:UPDATE_CATEGORY_REQUEST})

     const result = await axios.get(`http://localhost:8080/category/updateCategory/:`);

     dispatch({type:UPDATE_CATEGORY_REQUEST_SUCESS,
               payload:result.data})
     }
     catch(err){
          dispatch({type:UPDATE_CATEGORY_REQUEST_FAILURE ,
               payload:err.data})

     }


}

export const getCategoryById = (id)=>async (dispatch)=>{
    try{
     const result = await axios.get(`http://localhost:8080/category/getCategoryById/${id}`);
    
     dispatch({ type:GET_CATEGORY_REQUEST_SUCESS_BYID, 
               payload:result.data })
     
     }
     catch(err){
          dispatch({ type:GET_CATEGORY_REQUEST_FAILURE_BYID,
                    payload:err.message })
    }

}