import { ADD_NEW_PRODUCT_REQUEST,
         ADD_NEW_PRODUCT_REQUEST_SUCESS,
         ADD_NEW_PRODUCT_REQUEST_FAILURE,
         GET_ALL_PRODUCT_REQUEST,
         GET_ALL_PRODUCT_REQUEST_SUCESS,
         GET_ALL_PRODUCT_REQUEST_FAILURE,
         CONSUMER_GET_SINGLE_PRODUCT_REQUEST,
         CONSUMER_GET_SINGLE_PRODUCT_REQUEST_SUCESS,
         CONSUMER_GET_SINGLE_PRODUCT_REQUEST_FAILURE } from "../constants/productConstant";

import { combineReducers  } from "redux";

    const addProductState={
        isLoading:"",
        requestSucess:"",
        requestFailure:""
    }

   const  addProductReducer =(state=addProductState,action)=>{

     switch (action.type) {
        case ADD_NEW_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading:true
            };

        case ADD_NEW_PRODUCT_REQUEST_SUCESS:
            return {
                ...state,
                isLoading:false,
                requestSucess:action.payload
            };
                    
        case  ADD_NEW_PRODUCT_REQUEST_FAILURE:
            return {
                ...state,
                isLoading:false,
                requestFailure:action.payload
            };        
    
        default:
           return state
        }
    } 
    

    const getAllProductState={
      isLoading:false,
      allProduct:[],
      requestFailure:""

    }
    
    const getAllProductReducer = (state=getAllProductState,action)=>{
       switch (action.type) {
           case GET_ALL_PRODUCT_REQUEST:
             return{
                   ...state,
                   isLoading:true
             };

           case GET_ALL_PRODUCT_REQUEST_SUCESS:
              return{
                    ...state,
                    isLoading:false,
                    allProduct : action.payload
                };
                   
           case GET_ALL_PRODUCT_REQUEST_FAILURE:
              return{
                    ...state,
                    isLoading:false,
                    requestFailure:action.payload
                    };     
       
           default:
              return state;
       }
    }


    const getSingleProductState={
     isLoading:false,
     singleProduct:{},
     requestFailure:""

     }
     
     const getSingleProductReducer=(state=getSingleProductState,action)=>{

        switch (action.type) {
            case CONSUMER_GET_SINGLE_PRODUCT_REQUEST:
              return{
                    ...state,
                    isLoading:true
              };
 
            case CONSUMER_GET_SINGLE_PRODUCT_REQUEST_SUCESS:
               return{
                     ...state,
                     isLoading:false,
                     singleProduct : action.payload
                 };
                    
            case CONSUMER_GET_SINGLE_PRODUCT_REQUEST_FAILURE:
               return{
                     ...state,
                     isLoading:false,
                     requestFailure:action.payload
                     };     
        
            default:
               return state;
        }
     }


 const ProductReducer= combineReducers({
    addProductReducer,
    getAllProductReducer ,
    getSingleProductReducer
 })

 export default ProductReducer; 