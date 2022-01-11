import React from "react";
import {Grid,Box,Container,Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Category from "../Admin/Categories";

const useStyle = makeStyles({

cartUi:{
    width:"800px",
    margin:"20px auto"

}
 

})

function Carts (){

    const {cartItem} = useSelector((state)=>state.cart.addToCartReducer)
    

 
  const classes = useStyle ();
    return(
    <>
      <Box  >
         <Container maxWidth="md">
      <Grid container>
          {
          cartItem.map((item)=>
         
          <Cart title={item.title} avatar={item.avatar} price={item.price} brand={item.brand} category={item.category} />
         
          )
          
          
          }
      </Grid>
        </Container>
      </Box>
     

    

    </>
     )


}

export default Carts;