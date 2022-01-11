import {ADD_TO_CART,REMOVE_TO_CART} from "../constants/cartConstant";
import axios from "axios";
import { combineReducers  } from "redux";

const addToCartState = {
    cartItem:[]
}

const addToCartReducer = (state=addToCartState,action)=>{

    switch (action.type) {
        case ADD_TO_CART :
           const item=action.payload;
           const existItem = state.cartItem.find((p)=> p._id === item._id)
           if(existItem){
               return {
                   ...state,
                   cartItem:state.cartItem.map((p)=> p._id === existItem._id ? existItem : p )
               }
           }
           else 
           { 
               return{
               ...state,
               cartItem:[...state.cartItem, item]
              }
           }
            
            default:
                return state;
    }
}

const cartReducer = combineReducers({
    addToCartReducer,
})

export default cartReducer;