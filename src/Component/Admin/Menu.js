import React, { useState } from 'react'
import {NavLink,useRouteMatch} from "react-router-dom";

import {Button,List,ListItem,ListItemText,ListItemIcon, Paper,Divider}  from "@material-ui/core"
import {makeStyles} from '@material-ui/styles'
import DashboardIcon from '@material-ui/icons/Dashboard'; 
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import QueueIcon from '@material-ui/icons/Queue';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';



const useStyle=makeStyles({
   
   menu:{
      minHeight:"600px",
      backgroundColor:"rgb(143,188,143)",
      width:"230px",
      marginTop:"1px",
    },

   link:{
        textDecoration:"none",
        },

})

function Menu(){
  const{ url,path }= useRouteMatch();

  const menuItem=[

    { name: "Dashboard", Icon: <DashboardIcon/>, path:`${url}`},
    { name: "Customer List", Icon: <SupervisorAccountTwoToneIcon/>, path:`${url}/Customer_List`},
    { name: "Product", Icon: <CardGiftcardIcon/> ,path:`${url}/Product`},
    { name: "Order", Icon: <QueueIcon/> , path:`${url}/Order`},
    { name: "Location", Icon: <LocationOnIcon/>, path:`${url}/Location`},
    { name: "Categories", Icon: <CategoryOutlinedIcon/>, path:`${url}/Category`}

]

  const classes = useStyle();



   return (
    <>
     <Paper className={classes.menu}>
       <List >

        {
            menuItem.map((item)=>(
         
            <NavLink  to={item.path} className={classes.link}>
              <ListItem component={Button}>

                <ListItemIcon>{item.Icon}</ListItemIcon>
                <ListItemText primary={item.name} />
        
              </ListItem>
           </NavLink>
          ))
        }
      </List>
   </Paper> 
</>

)


}

export default Menu;