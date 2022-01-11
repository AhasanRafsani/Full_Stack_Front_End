import React ,{useEffect}from "react";
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {makeStyles} from "@material-ui/styles";
import {Grid,Box,Card,CardMedia,CardContent,CardActions,Button,TableContainer,Table,TableRow,TableCell,Typography} from "@material-ui/core";
import {getSingleProductByConsumer} from "../../redux/actions/productAction";
import {addToCart} from "../../redux/actions/cartAction";

const useStyle=makeStyles({
root:{
miniHeight:"600px",
maxWidth:"700px",
margin: "20px auto",
},
avatar:{
height:"300px",
},

shortDescription:{
 height:"300px",
},

longDescription:{
    marginTop:"10px",
    minHeight:"200px",
  }

    
});

function SingleProduct(){
    //props={hisory,location,match}
     const param = useParams();
     const dispatch = useDispatch();
     console.log(param.id);
     useEffect(()=>{
        dispatch(getSingleProductByConsumer(param.id));
     },[]);

     const { isLoading, singleProduct, requestFailure} = useSelector((state)=>state.product.getSingleProductReducer);
     const addToCartHandler=(id)=>{
        dispatch(addToCart(id));
     }
     const classes=useStyle()

    return(

    <>
       
            <Card className={classes.root}>
              <Grid container  direction="column">
                 <Grid id item container xs={12} >
                 
                       <Grid item xs={12} sm={5} className={classes.avatar}>

                           <CardMedia component="img" image={singleProduct.avatar}/>
                             
                       </Grid>
                   

                  
                       <Grid item xs={12} sm={7} className={classes.shortDescription}>
                          <CardContent>
                            <TableContainer>
                                <Table>
                                    <TableRow>
                                        <TableCell><Typography variant="subtitle1">Title :</Typography></TableCell>
                                        <TableCell>{singleProduct.title}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography variant="subtitle1">Brand :</Typography></TableCell>
                                        <TableCell>{singleProduct.brand}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><Typography variant="subtitle1">Price :</Typography></TableCell>
                                        <TableCell>{singleProduct.price}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                         <TableCell><Typography variant="subtitle1">Category :</Typography></TableCell>
                                         <TableCell>{singleProduct.category}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                         <TableCell><Typography variant="subtitle1">Available :</Typography></TableCell>
                                         <TableCell>{singleProduct.status==="active"? "In Stock":"Out Of Stock"}</TableCell>
                                    </TableRow>
                                </Table>
                              </TableContainer>
                          </CardContent>
                       </Grid>
                </Grid>
             
                <Grid item className={classes.longDescription} >
                
 
                         <CardContent>
                             <Typography variant="h6">Product Description</Typography>
                             <Typography variant="subtitle2">{singleProduct.description}</Typography>
                         </CardContent>

                        
             
                </Grid>
                 <Grid>
                        <CardActions>
                          <Button variant="contained" color="primary" onClick={()=>addToCartHandler(singleProduct._id)}>
                             Add to card
                          </Button>
                       </CardActions>
                 </Grid>
           </Grid>
           
           </Card>

        

 </>


    )

}
export default SingleProduct;