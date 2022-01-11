import React, { useState } from 'react';
import ContentHeader from "./ContentHeader";
import {useLocation} from "react-router-dom"
import { Box,Paper,Typography} from "@material-ui/core";


function Dashboard(){
const Location = useLocation();

return(


<>

<ContentHeader path={Location.pathname}/>

<Paper component={Box} m={5}>




</Paper>

</>


);

}
export default Dashboard;