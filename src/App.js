import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import AdminLogin from "./Component/Admin/AdminLogin";
import Home from "./Component/Client/Home";
import './App.css'




function App() {

  return (

   <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/AdminLogin" component={AdminLogin}/>
        </Switch>
     </BrowserRouter>

   </>
  )

}

export default App;
