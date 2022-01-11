import React from "react";
import {Typography,Grid, Box} from "@material-ui/core";
import ProfileMenu from "./ProfileMenu"
import ContentHeader from "./ContentHeader";
import {Route,Switch} from "react-router-dom"
import ProfileDetails from "./ProfileDetails"
import OrderList from "./OrderList";
import {makeStyles, mergeClasses} from "@material-ui/styles"

const useStyle=makeStyles({
     root:{
        display:"flex",
      },

menu:{
     flexShrink:0,
     minHeight:"600px",
     backgroundColor:"rgb(143,188,143)",
     width:"230px",
     marginTop:"1px",
  },

contentBox:{
    minHeight:"600px",
    flexGrow:1,
    backgroundColor:"rgb(245,245,245)"  
},

})




function Profile(){

  const classes=useStyle();

    return (

   <>
      <Box className={classes.root}>

           <Box className={classes.menu}>
              <ProfileMenu/>
           </Box>
            
           
              <Box className={classes.contentBox}>
              <Switch>
                  <Route exact path="/profile" component={ProfileDetails}/>
                  <Route path="/orderList" component={OrderList}/>
              </Switch>
              </Box>
            

      </Box>
    

   </>



    )


   


}

export default Profile;