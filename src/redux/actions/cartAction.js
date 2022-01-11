import {ADD_TO_CART,REMOVE_TO_CART} from "../constants/cartConstant";
import axios from "axios";

export const addToCart=(id)=>async (dispatch,getState)=>{

    const result = await axios.get(`http://localhost:8080/product/consumerGetProductById/${id}`);
    dispatch({type:ADD_TO_CART,
              payload:result.data});
   localStorage.setItem("cartItems",JSON.stringify(getState().cart.addToCartReducer.cartItem))
}
