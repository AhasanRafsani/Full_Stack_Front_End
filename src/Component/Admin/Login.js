import React, { useEffect, useState } from 'react'

import useFrom from '../../useHooks/useMultipleInput'
import {useHistory} from "react-router-dom"
import {Box,Avatar,Paper,Typography,TextField,Button,Slide}  from "@material-ui/core"
import {makeStyles} from '@material-ui/styles'
import { FormatAlignLeftRounded } from '@material-ui/icons'
import SendIcon from '@material-ui/icons/Send';
import loginValidation from "../../InputValidation/loginValidation";
import {userLogin} from "../../redux/actions/userAction";
import { useDispatch ,useSelector } from 'react-redux'
import { useRouteMatch } from "react-router-dom";

const useStyle= makeStyles({


inputBoxRoot:{
    position: 'relative',
    minHeight:'100px',
    width:'350px',
    margin:'70px auto',
    backgroundColor:"rgb(176,224,230)"
},
header :{
    height:'120px',
    display:'block',
    width:'100%',
    textAlign:'center',
   },
avatar :{
    position:'absolute',
    height:'70px',
    top:'40px',
    left:'40%',
    width:'70px',
    
    },

inputBox :{
    height:'270px',
    width:'80%',
    margin:'20px 10px 20px 12px',
    padding:'30px 20px',
},
input:{
    margin:"15px 0px"
},
signUp:{
    position:"absolute",
    bottom:"20px",
    left:"20px",
}



})
 const input={
        name:"" ,
        password:"",

 }
 
function Login(){
    const {path,url} = useRouteMatch();
    const  [userInput, handleInputChange]=useFrom(input);
    const  [errors ,setErrors] = useState(input);
    const history = useHistory();
    const classes=useStyle();

    const { loginSucess } = useSelector((state)=>state.user.loginReducer);
 
    const dispatch = useDispatch()



    const handleSubmit =(e)=> {
         e.preventDefault();
         const err  = loginValidation(userInput);
         setErrors(err);
    
            if( Object.values(err).length === 0 ){
            dispatch(userLogin(userInput));
           }
        }

        useEffect(()=>{
         if(localStorage.getItem("authToken")){
            if(loginSucess.userRole==="admin"){
                history.push("/Admin");
              }
              
            }
        },[loginSucess])
        
    
        console.log(path);
    
  return(
        
        <>
        
       <Slide in="true" direction="left">
        <Paper  className={classes.inputBoxRoot} >

         
          <div className={classes.header}>
               <Avatar className={classes.avatar}>

               </Avatar>
               <Typography variant="h4" style={{position:"absolute", top:"110px", left:'25%',}}>
                   Login Here
               </Typography>
          </div>
          
            
           <div className={classes.inputBox}>

               <form onSubmit = {handleSubmit}>
                <TextField fullWidth 
                 type="text" 
                 label="User Name" 
                 value={userInput.name} 
                 name="name"
                 onChange={handleInputChange}  
                 className={classes.input}
                 />
                 <Typography color="secondary" variant="subtitle2">{errors.name}</Typography>
                 

                

                <TextField fullWidth 
                  type="password"
                  label="Password" 
                  value={userInput.password}
                  name="password" 
                  onChange={handleInputChange}   
                  className={classes.input} 
                 />
                 <Typography color="secondary" variant="subtitle2">{errors.password}</Typography>
               

                <Button fullWidth type="submit" color="primary" variant="contained" className={classes.input} endIcon={<SendIcon/>}> LogIn </Button>
               </form>
            </div>
        
               

            </Paper>
    </Slide>
   
        </>
    )
}
export default Login;