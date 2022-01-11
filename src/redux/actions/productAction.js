import axios from "axios";
import headerConfig from "./headersConfig";
import headerFormDataConfig from "./fileTypeHeaderConfig";
import { ADD_NEW_PRODUCT_REQUEST,
         ADD_NEW_PRODUCT_REQUEST_SUCESS,
         ADD_NEW_PRODUCT_REQUEST_FAILURE,
         GET_ALL_PRODUCT_REQUEST,
         GET_ALL_PRODUCT_REQUEST_SUCESS,
         GET_ALL_PRODUCT_REQUEST_FAILURE,
         CONSUMER_GET_SINGLE_PRODUCT_REQUEST,
         CONSUMER_GET_SINGLE_PRODUCT_REQUEST_SUCESS,
         CONSUMER_GET_SINGLE_PRODUCT_REQUEST_FAILURE
        } from "../constants/productConstant";

///
export const addNewProduct = (formData)=> async (dispatch)=>{

    dispatch({type:ADD_NEW_PRODUCT_REQUEST}) ;
    try{
        const result = await axios.post("http://localhost:8080/product/addNewProduct",formData,headerFormDataConfig());
        dispatch({type:ADD_NEW_PRODUCT_REQUEST_SUCESS,
                  payload:result.data}) ;
    }
    catch(err){
        dispatch({type:ADD_NEW_PRODUCT_REQUEST_FAILURE,
            payload:err.message}) ;
    }

}        
///
export const getAllProduct = ()=> async(dispatch)=>{
           dispatch({type:GET_ALL_PRODUCT_REQUEST}) ;
    try{
    const result = await axios.get("http://localhost:8080/product/getAllProduct",headerConfig());
           dispatch({type:GET_ALL_PRODUCT_REQUEST_SUCESS,
              payload:result.data }) ;
    }
    catch(err){
     
          dispatch({type: GET_ALL_PRODUCT_REQUEST_FAILURE,
                   payload:err.message }) ;
     }
}
////
export const getSingleProductByConsumer=(id)=> async(dispatch)=>{

       dispatch({type:CONSUMER_GET_SINGLE_PRODUCT_REQUEST})
   try{
      const result= await axios.get(`http://localhost:8080/product/consumerGetProductById/${id}`)
       dispatch({type:CONSUMER_GET_SINGLE_PRODUCT_REQUEST_SUCESS,
                  payload:result.data })
    }
    catch(err){
        dispatch({type:CONSUMER_GET_SINGLE_PRODUCT_REQUEST_FAILURE,
                  payload:err.message })
    }

}
///