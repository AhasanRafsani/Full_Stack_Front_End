
import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({

box_1:{
    height:"50px",
    border:"1px solid black"
},
box_1:{
    height:"50px",
    border:"1px solid black"
}


})

function Cart ({title,price,brand,category,avatar}){
 const classes = useStyle();
    return(
    <>
    
        
         <Grid item xs={12} sm={8} className={classes.box_1}>
           
         </Grid>
         
         < Grid container item xs={12}  sm={4} className={classes.box_1}>
             
         total
        </Grid>
     
    

    </>
     )


}

export default Cart;