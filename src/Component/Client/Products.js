
import React ,{useEffect} from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product";
import {useDispatch,useSelector} from "react-redux";
import { getAllProduct } from "../../redux/actions/productAction";
import {Container} from "@material-ui/core"

function Products(){
    const dispatch = useDispatch()
    
     
    useEffect(()=>{
        dispatch(getAllProduct());
     },[]);
    const { isLoading,allProduct,requestFailure } = useSelector((state)=>state.product.getAllProductReducer)
    return (

   <>
   <Container maxWidth="lg" style={{marginTop:"15px"}}>
     <Grid container spacing={3}  >
     
   {
     allProduct.map((product,index)=>
     
     <Product title={product.title} 
     brand={product.brand} 
     price={product.price} 
     category={product.category}
     description = {product.description}
     avatar={product.avatar}
     id={product._id}
     />
   
     ) }   
        
    </Grid>  
 </Container>

   </>



    )


   


}

export default Products;