import React from "react";
import {BrowserRouter,Link,Switch,Route,useRouteMatch} from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";
import Product from "./Product";
import Home from "./Home";
import CustomerList from "./Customer_List";
import Location from "./Location";
import Categories from "./Categories";
import {Box,Typography,Grid,Paper,Container,List,ListItem,ListItemText,AppBar,Toolbar, Button,Hidden} from "@material-ui/core"

import {makeStyles} from "@material-ui/core/styles"
import category from "./Categories";

const useStyle=makeStyles({
  
    root:{

        display:"flex",
        
        
    },
    menu:{
       
        flexShrink:0,
        minHeight:"600px",
       
   },

   contentBox:{
       
        minHeight:"600px",
        flexGrow:1,
        backgroundColor:"rgb(245,245,245)"  
    },


})


function Dashboard() {
    const {url,path} = useRouteMatch();
    const classes=useStyle();

    

return(
 
<>


<Container maxWidth="xl">
    
   <Header/>

<Box className={classes.root}>
    <Hidden only="xs">
      <Box className={classes.menu} >

           <Menu/>

      </Box>
    </Hidden>
    <Box className={classes.contentBox}>

        <Switch>
            <Route path={`${path}/Dashboard`} component={Home} /> 
            <Route path={`${path}/Customer_List`} component={CustomerList} />
            <Route path={`${path}/Product`} component={Product}/>
            <Route path={`${path}/Order`} component={Order} />
            <Route path={`${path}/Location`} component={Location} />
            <Route path={`${path}/Category`} component={Categories} />
        
        </Switch>      
  
   </Box>

</Box>



</Container>

</>
);

}
export default Dashboard;