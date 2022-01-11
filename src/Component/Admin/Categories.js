import React from "react";
import { useLocation } from "react-router";
import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";
import AddNewCategory from "./AddNewCategory";
import CategoryList from "./CategoryList";

function Category(){
const location = useLocation();
return(

    <>
    <ContentHeader path = {location.pathname}/>
    <ContentBody component_1 ={<CategoryList/>} component_2={<AddNewCategory/>} path={location.pathname}/> 
    </>


)

}
export default Category;