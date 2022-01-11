
import React  from "react";
import {Dialog,DialogTitle,DialogContent,DialogActions,IconButton,Box, Typography} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles"
import { useLocation } from "react-router";


const useStyle=makeStyles({

  root:{
    backgroundColor:"rgb(245,255,250)",
    miniWidth:"500px",
    },
    title:{
    color:"rgb(0,0,139)",
    textAlign:"center",
    }

   })


function UpdatePopUp({open,closePopUpAction,children}){
    const classes = useStyle();
    const location = useLocation();
    const exactPath = location.pathname.replace("/"," ").split("/")[1];

  
    
  return(

  <>
   <Dialog open={open} >
     <div className={classes.root}>
       <DialogActions>
         <IconButton color="secondary" onClick={closePopUpAction}> 
            <CloseIcon/>
         </IconButton>

       </DialogActions>

       <DialogTitle className={classes.title} >
  
           <Typography variant="h4" >Update {exactPath} </Typography>
 
       </DialogTitle>

       <DialogContent>
           {children}
       </DialogContent>

     </div>

   </Dialog>
  </>


  )

}

export default UpdatePopUp;