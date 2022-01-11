import axios from "axios";
import headerConfig from "./headersConfig";


import {ADD_NEW_LOCATION_REQUEST,
       ADD_NEW_LOCATION_REQUEST_FAILURE,
       GET_ALL_LOCATION_REQUEST,
       GET_ALL_LOCATION_REQUEST_SUCESS,
       GET_ALL_LOCATION_REQUEST_FAILURE,
       UPDATE_LOCATION_REQUEST,
       UPDATE_LOCATION_REQUEST_SUCESS,
       UPDATE_LOCATION_REQUEST_FAILURE ,
       GET_LOCATION_REQUEST_SUCESS_BYID,
       GET_LOCATION_REQUEST_FAILURE_BYID} from "../constants/locationConstant";
       
//const config = headerConfig();

export const addNewLocation = (location)=> async(dispatch)=> {
        try{
        const res = await axios.post("http://localhost:8080/location/addNewLocation",location,headerConfig() )
    
             dispatch({type:ADD_NEW_LOCATION_REQUEST, 
                       payload:res.data })
        }
        catch(err){
    
             dispatch({type:ADD_NEW_LOCATION_REQUEST_FAILURE, 
                       payload:err.message })
        }
    
    
    }

 
export const getAllLocation = ()=> async (dispatch) => {

        try{
             
             dispatch({type:GET_ALL_LOCATION_REQUEST})
             const result = await axios.get("http://localhost:8080/location/getAllLocation",headerConfig() );
   
             dispatch({type:GET_ALL_LOCATION_REQUEST_SUCESS,
                       payload:result.data })
   
             
           }
        catch(err){
   
             dispatch({type:GET_ALL_LOCATION_REQUEST_FAILURE,
                        payload:err.message })
        }
   
   
   }


export const updateLocation = ()=>async (dispatch)=>{
       try{

            dispatch({type:UPDATE_LOCATION_REQUEST})

            const result = await axios.get(`http://localhost:8080/category/updateCategory/:`);

            dispatch({type:UPDATE_LOCATION_REQUEST_SUCESS,
                       payload:result.data})
          }
          catch(err){

            dispatch({type:UPDATE_LOCATION_REQUEST_FAILURE ,
                       payload:err.data})

        }


}

export const getLocationById = (id)=>async (dispatch)=>{

  try{

          const result = await axios.get(`http://localhost:8080/category/getCategoryById/${id}`);
    
          dispatch({ type:GET_LOCATION_REQUEST_SUCESS_BYID, 
                        payload:result.data })
     
     }
     catch(err){
           dispatch({ type:GET_LOCATION_REQUEST_FAILURE_BYID,
                        payload:err.message })
    }

}
    