import React, { useState,useEffect } from 'react';
import ContentHeader from "./ContentHeader";
import {useLocation} from "react-router-dom"
import { Box,Paper,Typography,TableContainer,TableBody,TableHead,TableRow,TableCell, Table} from "@material-ui/core";
import {getAllUser} from "../../redux/actions/userAction"
import {useDispatch ,useSelector} from "react-redux";
import { makeStyles } from "@material-ui/styles"

const useStyle = makeStyles({
   table:{
    
     
   }
});

function CustomerList(){
     const classes = useStyle()
     const Location = useLocation();
     const dispatch = useDispatch();

     useEffect(()=>{
        dispatch(getAllUser())
     },[]);


   const {isloading,users,requestFail} = useSelector((state)=>state.user.getAllUserReducer);






return(


<>

<ContentHeader path={Location.pathname}/>
{
isloading ? <Typography variant="h5">Loading....</Typography> : <Paper component={Box} m={5} >
{
    requestFail ? <Typography variant="h5">request fail....</Typography> :

<TableContainer>
        <Table>
            <TableHead style={{background:"rgb(173,216,230)"}}>
                 <TableRow>
                     <TableCell align="center">Name</TableCell>
                     <TableCell align="center">Email</TableCell>
                     <TableCell align="center">Phone</TableCell>
                     <TableCell align="center">Gender</TableCell>
                 </TableRow>
            </TableHead>
             <TableBody>
               { 
                 users.map((item,key)=>
                  <TableRow>
                     <TableCell align="center">{item.name}</TableCell>
                     <TableCell align="center">{item.email}</TableCell>
                     <TableCell align="center">{item.phone}</TableCell>
                     <TableCell align="center">{item.gender}</TableCell>
                 </TableRow>

             )}
            </TableBody>
   </Table>
</TableContainer>
}

</Paper>
}
</>


);

}
export default CustomerList;