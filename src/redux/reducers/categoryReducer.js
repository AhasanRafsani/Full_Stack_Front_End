
import { combineReducers  } from "redux";

import { ADD_NEW_CATEGORY_REQUEST,ADD_NEW_CATEGORY_REQUEST_FAILURE,
  GET_ALL_CATEGORY_REQUEST,GET_ALL_CATEGORY_REQUEST_SUCESS,
  GET_ALL_CATEGORY_REQUEST_FAILURE,
  UPDATE_CATEGORY_REQUEST,UPDATE_CATEGORY_REQUEST_SUCESS,
  UPDATE_CATEGORY_REQUEST_FAILURE ,
  GET_CATEGORY_REQUEST_SUCESS_BYID,GET_CATEGORY_REQUEST_FAILURE_BYID } from "../constants/categoryConstant";

/*const initialState = {
  categories : [],
  isLoading:false,
  getAllCatErr:"",
  category:{},
  getCatErrById:"",
  addNewCatReqRes:"",
  addNewCatReqErr:"" 
};*/


const addNewCategoryState = {
  requestSuccess:"",
  requestFail:""
}

const addNewCategoryReducer = (state = addNewCategoryState, action)=>{

    switch(action.type){

      case ADD_NEW_CATEGORY_REQUEST:
          return {
              ...state,
              requestSuccess : action.payload
          }
     case ADD_NEW_CATEGORY_REQUEST_FAILURE:
          return {
             ...state,
             requestFail : action.payload
        }
        default:
          return state  

      }
    }

const  getAllCategoryState = {
       isLoading:false,
       categories : [],
       requestFail : ""
    } 


const getAllCategoryReducer = (state = getAllCategoryState, action) => {

  switch(action.type){

    case GET_ALL_CATEGORY_REQUEST:
          return {
            ...state,
            isLoading:true,
        }

    case GET_ALL_CATEGORY_REQUEST_SUCESS:
          return {
            ...state,
            isLoading: false,
          categories: action.payload
        }
    case GET_ALL_CATEGORY_REQUEST_FAILURE:
          return {
            ...state,
            isLoading: false,
            requestFail : action.payload 
        }
    default:
          return state  

      }
    }


const getCategoryByIdState = {
  
  category :{ },
  requestFail :" "

}

const getCategoryByIdReducer = ( state = getCategoryByIdState , action ) => {
  
    switch (action.type){

        case GET_CATEGORY_REQUEST_SUCESS_BYID :
          return {
            ...state,
            category:action.payload
        }

        case GET_CATEGORY_REQUEST_FAILURE_BYID :
          return {
            ...state,
            requestFail : action.payload
        }    
        
      default:
          return state  

    }



}

const categoryReducer = combineReducers({
  addNewCategoryReducer,
  getAllCategoryReducer,
  getCategoryByIdReducer

})

export default categoryReducer;