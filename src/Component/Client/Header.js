import React, { useEffect,useState } from "react";
import {AppBar,Toolbar,Box,Badge,Button,Menu,MenuItem,Typography} from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {makeStyles} from '@material-ui/styles'
import { useHistory } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { CenterFocusStrong, CloseOutlined } from "@material-ui/icons";
import { logOut } from "../../redux/actions/userAction";
import Login from "./Login"
import {NavLink} from "react-router-dom"

const useStyle = makeStyles({
    appbarRoot:{
        height:"55px",
        display:"flex",

        
    },
    toolbar:{
      marginTop:"4px",
    },
    profileButton:{
      height:"30px",
      width:"30px",
      color:"black",
      

    },
    cartButton:{
      height:"30px",
      width:"30px",
      color:"black"
    },
    link:{
      textDecoration:"none",
      },
    namePopUp:{
      height:"90px",
      width:"140px",
      }
    
}
)

function Header(){
    
    const [userMenu , setUserMenu] = useState(null)
    const history= useHistory();
    const classes = useStyle();
    const dispatch = useDispatch();

    const  userOpenButton = (e)=>{
      setUserMenu(e.currentTarget)
    }
    const  userCloseButton = ()=>{
      setUserMenu(false);
     
    }

    const profileHandler=()=>{
      history.push("/profile")
      setUserMenu(false);
    }

    const logInButton = ()=>{
       history.push("/login");
    }
    const { loginSucess } = useSelector((state)=>state.user.loginReducer)
    const logOutHandler = ()=>{
      dispatch(logOut())
      setUserMenu(false)
      history.push("/");
    }

    const cartHandler = ()=>{
      history.push("/addToCart");
    }
    console.log("sucess1");
    const user = localStorage.getItem("authToken") ? JSON.parse(localStorage.getItem("authToken")):" "; 
 
    
return(

<>

<AppBar position="static" className={classes.appbarRoot}>

  <Toolbar variant="dense" className={classes.toolbar}>

     <Box style={{flexGrow:1}}>
        <Typography variant="h4">
           Naraz
       </Typography>
    </Box>
            {console.log("mememe")}
    <Button color="inherit" endIcon={<ArrowDropDownIcon/>} >Category</Button>

       
        { 
        
           localStorage.getItem("authToken") ?
           <Button startIcon={<AccountCircleIcon className={classes.profileButton}/>}  color="inherit" onClick={userOpenButton}  endIcon={<ArrowDropDownIcon/>} >
           {user && user.userName}
         </Button> : <Button  color="inherit" onClick={logInButton} startIcon={<AccountCircleIcon className={classes.profileButton}/>}>
            login
         </Button>
        } 
          <Button color="inherit" onClick={cartHandler}  >
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartIcon className={classes.cartButton}/>
            </Badge>
            Cart
          </Button>

       <Menu open={Boolean(userMenu)} anchorEl={userMenu} onClose={userCloseButton} >
            <div className={classes.namePopUp} >
               <MenuItem onClick = {profileHandler} >Profile</MenuItem>
               <MenuItem onClick = {logOutHandler} >Log Out</MenuItem>
           </div>
      </Menu>

  </Toolbar>
  
</AppBar>


</>


);

}
export default Header;