import React from "react";
import {List,ListItem,ListItemIcon,ListItemText,Box,Button} from "@material-ui/core"
import QueueIcon from '@material-ui/icons/Queue';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import {makeStyles} from '@material-ui/styles'
import { NavLink } from "react-router-dom";

const useStyle=makeStyles({
   
   
    link:{
         textDecoration:"none",
         },
 
 })

const menu = [

     { name: " My Profile", Icon: <SupervisorAccountTwoToneIcon/>, path:"/profileDetails" },
     { name: " My Order List", Icon: <QueueIcon/>, path:"/orderList" },
    
]

function ProfileMenu(){

  const classes = useStyle();

  return(

    <>
     <Box>
       <List>
     {
       menu.map((item)=>(
         <NavLink to={item.path} className={classes.link}>
            <ListItem component={Button}>
               <ListItemIcon>{item.Icon}</ListItemIcon>
               <ListItemText primary={item.name} />
            </ListItem>
         </NavLink>
       ))

     }
     </List>
   </Box>
  </>

)

}

export default ProfileMenu;