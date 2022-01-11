import React, { useState } from 'react';
import ContentHeader from "./ContentHeader";
import {useLocation} from "react-router-dom"
import ContentBody from './ContentBody';
import AddNewLocation from './AddNewLocation';
import LocationList from './LocationList';



function Location(){
const location = useLocation();

return(


<>

<ContentHeader path={location.pathname}/>

<ContentBody component_1 ={<LocationList/>} component_2={<AddNewLocation/>} path={location.pathname} />

</>


);

}
export default Location;