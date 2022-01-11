import React from "react";
 import {Dialog,DialogTitle,DialogContent,DialogActions,IconButton,Box, Typography} from "@material-ui/core";
 import CloseIcon from '@material-ui/icons/Close';
 import { makeStyles } from "@material-ui/core/styles"

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

function Popup({open,children,closePopUpAction,setTitle}){
  const title = setTitle.split("/").pop();
  const classes = useStyle();

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
  
 <Typography variant="h4" >Add New {title}</Typography>
 
</DialogTitle>

<DialogContent>
    {children}
</DialogContent>

</div>

</Dialog>


</>


)

}
export default Popup;