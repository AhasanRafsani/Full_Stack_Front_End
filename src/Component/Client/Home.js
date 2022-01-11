import React, { useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import signUp from "./SignUp";
import Product from "./Products";
import Profile from "./Profile";
import Carts from "./Carts";
import SingleProduct from "./SingleProduct"
import { BrowserRouter,Switch,Route } from "react-router-dom";
import { Grid }  from "@material-ui/core";

function Home(){
    
    return(
   <>
  <BrowserRouter>
   <Grid container direction="column">

        <Grid item>
          <Header/>
        </Grid>

        <Grid item>
         <Switch>

            <Route exact  path="/" component={Product} />
            <Route  path="/product/:id" component={SingleProduct} />
            <Route  path="/profile" component={Profile} />
            <Route  path="/addToCart" component={Carts} />
            <Route  path="/login" component={Login} />
            <Route  path="/signUp" component={signUp} />
         
         </Switch>
        </Grid>

       <Grid item>
          
       </Grid>


   </Grid>
  </BrowserRouter>


   </>


    )

}
export default Home;