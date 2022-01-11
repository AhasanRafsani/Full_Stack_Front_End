import {BrowserRouter,Switch,Route,useRouteMatch} from "react-router-dom"
import Dashboard from "./Dashboard";
import Login from  "./Login";

function Admin(){

return(

<>

<BrowserRouter>     
<Switch>
      <Route  path="/AdminLogin" component={Login}/>
      <Route  path="/Admin" component={Dashboard}/>
</Switch>
</BrowserRouter>

</>


)

}
export default Admin;