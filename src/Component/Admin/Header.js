import React , {useState} from "react";
import {AppBar,Toolbar,Box,Button,Typography,Menu,MenuItem} from "@material-ui/core"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {makeStyles} from '@material-ui/styles'
import { useSelector ,useDispatch } from "react-redux";
import {logOut} from "../../redux/actions/userAction"
import {useHistory,NavLink,Redirect} from "react-router-dom"

const useStyle = makeStyles({
    appbarRoot:{
        height:"55px",
        display:"flex",

        
    },
    toolbar:{
      marginTop:"4px",
    },
    logOut:{
     height:"40px",
     width:"100px",
     backgroundColor:"rgb(176,224,230)"
    }
}
)

function Header(){
  const [userMenu , setUserMenu] = useState(null)
  const dispatch = useDispatch();
  const history = useHistory();

  const { loginSucess } = useSelector((state)=>state.user.loginReducer)
   
  const  userOpenButton = (e)=>{
    setUserMenu(e.currentTarget)
  }

  const logOutHandler = ()=>{
    dispatch(logOut());
    setUserMenu(false);
    history.push("/AdminLogin")
   }

  const  userCloseButton = ()=>{
    setUserMenu(false);
   
  }
  const classes = useStyle();
return(
<>

<AppBar position="static" className={classes.appbarRoot}>

  <Toolbar variant="dense" className={classes.toolbar}>

  <Box style={{flexGrow:1}}>
    <Typography variant="h6">
           Abu Ahasan Rafsani
    </Typography>
  </Box>
  {
  localStorage.getItem("authToken") && <Button color="inherit" onClick={userOpenButton} endIcon={<ArrowDropDownIcon/>}>
    <Typography variant="h6">
         {loginSucess.userName}
    </Typography>
  </Button>
  }

       <Menu open={Boolean(userMenu)} anchorEl={userMenu} onClose={userCloseButton} >
               <div className={classes.logOut}>
               <MenuItem onClick = {logOutHandler} >LogOut</MenuItem>
               </div>
       </Menu>

   </Toolbar>
</AppBar>

</>

);

}
export default Header;