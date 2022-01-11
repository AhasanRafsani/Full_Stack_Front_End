import { ADD_NEW_LOCATION_REQUEST,
    ADD_NEW_LOCATION_REQUEST_FAILURE,
    GET_ALL_LOCATION_REQUEST,
    GET_ALL_LOCATION_REQUEST_SUCESS,
    GET_ALL_LOCATION_REQUEST_FAILURE,
    UPDATE_LOCATION_REQUEST,
    UPDATE_LOCATION_REQUEST_SUCESS,
    UPDATE_LOCATION_REQUEST_FAILURE ,
    GET_LOCATION_REQUEST_SUCESS_BYID,
    GET_LOCATION_REQUEST_FAILURE_BYID } from "../constants/locationConstant";

import { combineReducers  } from "redux";

    
    const addNewLocationState = {
      requestSuccess:"",
      requestFail:""
    };
    
    const addNewLocationReducer = (state = addNewLocationState, action)=>{
    
        switch(action.type){
    
          case ADD_NEW_LOCATION_REQUEST:
              return {
                  ...state,
                  requestSuccess : action.payload
              }
         case ADD_NEW_LOCATION_REQUEST_FAILURE:
              return {
                 ...state,
                 requestFail : action.payload
            }
         default:
              return state  
    
          }
        }
    
    const  getAllLocationState = {
           isLoading:false,
           allLocation : [],
           requestFail : ""
        } ;
    
    
    const getAllLocationReducer = (state = getAllLocationState, action) => {
    
      switch(action.type){
    
        case GET_ALL_LOCATION_REQUEST:
              return {
                ...state,
                isLoading:true,
            }
    
        case GET_ALL_LOCATION_REQUEST_SUCESS:
              return {
                ...state,
                isLoading: false,
                allLocation:action.payload 
            }
        case GET_ALL_LOCATION_REQUEST_FAILURE:
              return {
                ...state,
                isLoading: false,
                requestFail : action.payload 
            }
        default:
              return state  
    
          }
        }
    
    
    const getLocationByIdState = {
      
      singleLocation :{ },
      requestFail :" "
    
    };
    
    const getLocationByIdReducer = ( state = getLocationByIdState , action ) => {
      
        switch (action.type){
    
            case GET_LOCATION_REQUEST_SUCESS_BYID :
              return {
                ...state,
                singleLocation:action.payload
            }
    
            case GET_LOCATION_REQUEST_FAILURE_BYID :
              return {
                ...state,
                requestFail : action.payload
            }    
            
           default:
              return state  
    
        }
    }

    
    const locationReducer = combineReducers({
      addNewLocationReducer,
      getAllLocationReducer,
      getLocationByIdReducer
    
    })
    
    export default locationReducer;    