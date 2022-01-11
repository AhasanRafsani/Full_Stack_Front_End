
import React, { useEffect, useState } from "react";
import {Box,TableContainer,Table,TableBody,TableHead,TableRow,TableCell,IconButton,Typography} from "@material-ui/core";
import {getAllCategory,getCategoryById} from "../../redux/actions/categoryAction";
import {useDispatch,useSelector} from "react-redux";
import UpdatePopUp from "./UpdatePopUp";
import DeletePopUp from "./DeletePopUp";
import UpdateCategory from "./UpdateCategory";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';





function CategoryList(){
    const [updatePopUp, setUpdatePopUp] = useState(false);
    const [ deletePopUp, setDeletePopUp] = useState(false);
    const [deleteId,setDeleteId] = useState("");
    const dispatch = useDispatch();

    const { isLoading,categories,requestFail } = useSelector((state)=>state.category.getAllCategoryReducer)
    
 
      useEffect(()=>{
         dispatch(getAllCategory());
      },[]);

    const updates=(id)=>{
       dispatch(getCategoryById(id))
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
    <Box mt={4} >
     <TableContainer>
         <Table>
           <TableHead style={{background:"rgb(135,206,250)"}} >
                <TableRow>
                   <TableCell align="center">#Serial</TableCell>
                   <TableCell align="center">Category Name</TableCell>
                   <TableCell align="center">Action</TableCell>
                </TableRow>
           </TableHead>
           <TableBody style={{background:"rgb(240,255,255)"}}>
           { 
            categories.map((cat,index)=>
            
            <TableRow>
              <TableCell align="center">{cat._id}</TableCell>
              <TableCell align="center">{cat.category}</TableCell>
              <TableCell align="center">
                     <IconButton color="primary" onClick={()=>updates(cat._id)}>
                       <EditIcon/> 
                    </IconButton>

                    <IconButton color="secondary" onClick={()=>deletes(cat._id)}>
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
export default CategoryList;