import {createStore , combineReducers ,applyMiddleware } from "redux";
import thank from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import categoryReducer from "./reducers/categoryReducer";
import locationReducer from "./reducers/locationReducer"
import ProductReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";


const user = localStorage.getItem("authToken")? JSON.parse(localStorage.getItem("authToken")) : null;
const cartItemsFromStorage = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [];
const rootReducer = combineReducers({
   user : userReducer,
   category : categoryReducer,
   location : locationReducer,
   product : ProductReducer ,
   cart : cartReducer 
})
const initiaState = {
   cart:{
      addToCartReducer:{
         cartItem:cartItemsFromStorage
      }
   },
   user:{
      loginReducer:{
         loginSucess:user
      }
   }
};
const middleware = [thank];
const store = createStore(rootReducer,initiaState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;