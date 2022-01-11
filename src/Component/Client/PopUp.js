import React, { useState } from "react";
 import {Dialog,DialogTitle,DialogContent,DialogActions,IconButton,Box,Tabs,Tab,Paper,Tooltip} from "@material-ui/core";
 import CloseIcon from '@material-ui/icons/Close';
 import { makeStyles } from "@material-ui/core/styles"
 import TabPanel from "./TabPanel";
 import Login from "./Login";
 import SignUp from "./SignUp";

 const useStyle=makeStyles({

 root:{
   backgroundColor:"rgb(245,255,250)",
   miniWidth:"500px",
 },

 tabs:{
   display:"flex"
 }

  })

function Popup({open,closePopUpAction}){

const [tabValue,setTabValue]=useState(0);

const handleTabValue = (e,val)=>{
  setTabValue(val);
}

const classes =  useStyle();
return(
<>
<Dialog open={open} >
<div className={classes.root}>
    

   

   <DialogTitle>

      <Paper className={classes.tabs} >
        
          <Tabs value={tabValue} onChange={handleTabValue} style={{flexGrow:1}}>
            <Tab label="Login"/>
            <Tab label="Sign Up"/>
         </Tabs>
         
         <Tooltip title="Cancel" placement="bottom-end" arrow>
         <IconButton color="secondary" onClick={closePopUpAction}  > 
            <CloseIcon/>
         </IconButton>
         </Tooltip>
     </Paper>

   </DialogTitle>

   <DialogContent>
       <TabPanel value={tabValue} index={0}>
          <Login/>
      </TabPanel>

       <TabPanel value={tabValue} index={1}>
          <SignUp/>
      </TabPanel> 

   </DialogContent>
    


</div>

</Dialog>


</>


)

}
export default Popup;