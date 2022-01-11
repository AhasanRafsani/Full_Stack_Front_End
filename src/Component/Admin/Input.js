import React from "react";

import {TextField} from "@material-ui/core";


function Input({type,name,label}){
return(

    <>
    <TextField fullWidth 
                type={type}
                label={label} 
                variant="outlined" 
                name={name}
                style={{marginTop:"10px"}}
               />
    </>



)

}
export default Input;