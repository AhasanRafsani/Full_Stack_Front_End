
import React, { useEffect, useState } from "react";
import {Box,TableContainer,Table,TableBody,TableHead,TableRow,TableCell,IconButton,Typography} from "@material-ui/core";
import { getAllProduct } from "../../redux/actions/productAction";
import {useDispatch,useSelector} from "react-redux";
import UpdatePopUp from "./UpdatePopUp";
import DeletePopUp from "./DeletePopUp";
import UpdateCategory from "./UpdateCategory";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



function ProductList(){
    const [updatePopUp, setUpdatePopUp] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [deleteId,setDeleteId] = useState("");
    const dispatch = useDispatch();

    
    
 
      useEffect(()=>{
         dispatch(getAllProduct());
      },[]);
      const { isLoading,allProduct,requestFailure } = useSelector((state)=>state.product.getAllProductReducer)
    const updates=(id)=>{
       
       setUpdatePopUp(true);
       }

    const closeUpdatePopUp = ()=> {
      setUpdatePopUp(false);
      }


    const deletes = (id)=>{
      setDeleteId(id);
      setDeletePopUp(true);
       }

    const closeDeletePopUp = ()=>{
      setDeletePopUp(false);
      }


 
 
return (
    <>
    { isLoading ? <Typography variant="h5">Loading .....</Typography> : 
    <Box pt={4}>
     <TableContainer>
         <Table >
           <TableHead style={{background:"rgb(135,206,250)"}}>
                <TableRow>
                   <TableCell align="center">#Serial</TableCell>
                   <TableCell align="center">Title </TableCell>
                   <TableCell align="center">Price</TableCell>
                   <TableCell align="center">Brand </TableCell>
                   <TableCell align="center">Quantity_In_Stock</TableCell>
                   <TableCell align="center">Category</TableCell>
                   <TableCell align="center">Action</TableCell>
                </TableRow>
           </TableHead>
           <TableBody style={{background:"rgb(240,255,255)"}}>
           { 
            allProduct.map((product,index)=>
            
            <TableRow>
              <TableCell align="center">{product._id}</TableCell>
              <TableCell align="center">{product.title}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">{product.brand}</TableCell>
              <TableCell align="center">{product.quantityInStock}</TableCell>
              <TableCell align="center">{product.category}</TableCell>
              <TableCell align="center">
                    <IconButton color="primary" onClick={()=>updates(product._id)}>
                       <EditIcon/> 
                    </IconButton>

                    <IconButton color="secondary" onClick={()=>deletes(product._id)}>
                       < DeleteIcon/> 
                    </IconButton>
              </TableCell>
           </TableRow>
             
            )

            }
           </TableBody>

         </Table>

         
     </TableContainer>

      <UpdatePopUp open={updatePopUp} closePopUpAction={closeUpdatePopUp}>
         <UpdateCategory/>
      </UpdatePopUp>
     
      <DeletePopUp open={deletePopUp} closePopUpAction={closeDeletePopUp} id={deleteId}/>
    </Box>

    
} 

  

    
</>



)



}
export default ProductList;