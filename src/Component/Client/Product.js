import React from "react";
import {Grid,Typography,Card,CardActions,CardContent,CardActionArea,CardMedia,Button,Box} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import { makeStyles } from "@material-ui/styles";


const useStyle=makeStyles({
    
   
    avatar:{
         height:"300px",
    
    
    },
    content:{
        height:"200px",
    
        },
   
        
    });

function Product({title,price,brand,description,category,avatar,id}){
   const history = useHistory();
   const showDetailsHandler=(id)=>{
             history.push(`/product/${id}`)
            }

     

    const classes=useStyle();
    return (

   <>
<Grid item xs={6} sm={4} md={3} lg={3}>    
  <Card style={{borderRadius:"10px"}}>
      <CardActionArea>
           <CardMedia  component="img" image={avatar} style={{borderRadius:"10px",height:"150px"}}/>
           <CardContent >
              <Typography variant="h6">{brand}</Typography>
              <Typography variant="subtitle1">{title}</Typography>
              <Typography color="secondary" variant="subtitle2">BDT : {price}</Typography>

             
           </CardContent>
         
      </CardActionArea>
      <CardActions>
          <Button variant="contained"  onClick={()=>showDetailsHandler(id)} style={{borderRadius:"10px"}} >SHOW DETAILS</Button>     
      </CardActions>

  </Card>
</Grid>
   </>



    )


   


}

export default Product;