import React, {useState} from "react";
import {Paper,Box,Button} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Popup from "./Popup";

const useStyle=makeStyles({
   
    root:{
        position:"relative",
    },
    button:{
        position:"absolute",
        right:"4px",
        top:"9px",
        
    }
      
      })
function ContentBody({component_1 ,component_2 , path}){    //component_1 and componrent_2 as a react component and receive pathname because we set dynamicly input header title.
 
  const classes = useStyle();
 
  const [openPopup,setOpenPopUp] = useState(false);
  const openPopUp=()=>{
       setOpenPopUp(true);
   }


   const closePopUp=()=>{
      setOpenPopUp(false);
   }

return(

<>
 <Paper component={Box} mt={2} mx={5}  p={3} className={classes.root}>

 
 <Button onClick={openPopUp} variant="outlined" color="primary" startIcon={<AddCircleOutlineIcon/>} className={classes.button}> Add New </Button>
  {component_1} 
 </Paper>
      <Popup open={openPopup} closePopUpAction={closePopUp} setTitle={path}>
        {component_2}
     </Popup>
 
</>

)

}
export default ContentBody;