
import React from "react";
import {Dialog,DialogTitle,DialogContent,DialogActions,IconButton,Button,Box, Typography} from "@material-ui/core";
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


function DeletePopUp({open,closePopUpAction,id}){
    const classes = useStyle();
    
    console.log(`de${id}`)
return(

<>
<Dialog open={open}>
<div className={classes.root}>
 



 <DialogContent>
     <Typography variant="h5">Are You Sure You Want To delete this</Typography>
 </DialogContent>


 <DialogActions>
   <Button color="primary" variant="contained" >Ok</Button>
   <Button color="secondary" variant="contained" onClick={closePopUpAction}>No</Button>
</DialogActions>

</div>

</Dialog>
</>


)

}

export default DeletePopUp;