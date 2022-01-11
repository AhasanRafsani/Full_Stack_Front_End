
import React, { useEffect, useState } from "react";
import {Box,TableContainer,Table,TableBody,TableHead,TableRow,TableCell,IconButton,Typography} from "@material-ui/core";
import { getAllLocation , getLocationById } from "../../redux/actions/locationAction";
import {useDispatch,useSelector} from "react-redux";
import UpdatePopUp from "./UpdatePopUp";
import DeletePopUp from "./DeletePopUp";
import UpdateCategory from "./UpdateCategory";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



function LocationList(){
    const [updatePopUp, setUpdatePopUp] = useState(false);
    const [ deletePopUp, setDeletePopUp] = useState(false);
    const [deleteId,setDeleteId] = useState("");
    const dispatch = useDispatch();

    const { isLoading,allLocation,requestFail } = useSelector((state)=>state.location.getAllLocationReducer)
    
 
      useEffect(()=>{
         dispatch(getAllLocation());
      },[ ]);

    const updates=(id)=>{
       dispatch(getLocationById(id))
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
                   <TableCell align="center">Locatin </TableCell>
                   <TableCell align="center">Action</TableCell>
                </TableRow>
           </TableHead>
           <TableBody style={{background:"rgb(240,255,255)"}}>
           { 
            allLocation.map((cat,index)=>
            
            <TableRow>
              <TableCell align="center">{cat._id}</TableCell>
              <TableCell align="center">{cat.location}</TableCell>

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
export default LocationList;