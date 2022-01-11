
import React from 'react';
import ContentHeader from "./ContentHeader";
import ProductList from "./Products_List";
import AddNewProduct from "./AddNewProduct";
import {useLocation} from "react-router-dom";
import ContentBody from "./ContentBody";

function Product(){
const location = useLocation();
return(
<>
<ContentHeader path = {location.pathname}/>
<ContentBody component_1 = {<ProductList/>} component_2 ={<AddNewProduct/>} path={location.pathname} />

</>
)


}
export default Product;