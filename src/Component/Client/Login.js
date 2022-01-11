import React, { useState,useEffect } from 'react'
import useForm from '../../useHooks/useMultipleInput'
import {Box,Avatar,Typography,TextField,Button, Paper}  from "@material-ui/core"
import {makeStyles} from '@material-ui/styles'
import { FormatAlignLeftRounded } from '@material-ui/icons'
import SendIcon from '@material-ui/icons/Send';
import loginValidation from "../../InputValidation/loginValidation";
import { useDispatch , useSelector } from 'react-redux';
import { userLogin } from "../../redux/actions/userAction";
import { NavLink } from "react-router-dom";
import {useHistory} from "react-router-dom"

const useStyle= makeStyles({
root:{
    position: 'relative',
    minHeight:'500px',
    maxWidth:'400px',
    margin:'60px auto',
    backgroundColor:"rgb(176,224,230)"
   
},
header :{
    height:'100px',
    display:'block',
    width:'100%',
    textAlign:'center',
   },
avatar :{
    position:'absolute',
    height:'75px',
    top:'20px',
    left:'42%',
    width:'75px',
    
    },

inputBox :{
    minHeight:'200px',
    width:'80%',
    margin:'10px 10px 30px 20px',
    padding:'20px 20px',
},
input:{
    margin:"15px 0px"
},



})
 const input={
        name:'',
        password:'',

 }
function Login(){

    const  [userInput, handleInputChange] = useForm(input);

    const [errors ,setErrors] = useState(input);
    const { loginSucess } = useSelector((state)=>state.user.loginReducer);
    const dispatch = useDispatch()
    const history = useHistory();

    const handleSubmit = (e)=> {
        e.preventDefault();
      
        const err = loginValidation(userInput);
     
        setErrors(err);
      
            if(Object.values(err).length === 0){
              dispatch(userLogin(userInput))
              
            }
      
        }
   


        useEffect(()=>{

            if(localStorage.getItem("authToken")){
                if(loginSucess.userRole==="consumer"){
                    console.log("again login");      
                    history.push("/");
                    //console.log("again login");
                }
            }  
        
        },[loginSucess])
    
    const classes=useStyle();

    return(
        
      <>
        
        

        <Paper className={classes.root}>

          <div className={classes.header}>
                <Avatar className={classes.avatar}>

                </Avatar>
                <Typography variant="h4" style={{position:"absolute", top:"100px", left:'30%',}}>
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
                className={classes.input} />
               <Typography color="secondary" variant="subtitle2">{errors.password}</Typography>

                <Button fullWidth 
                type="submit" 
                color="primary" 
                variant="contained"
                className={classes.input}> LogIn </Button>
               </form>

               <NavLink to="/signUp">
                  <Button color="secondary" variant="text">
                      If You Not Register User Please Sign Up
                  </Button>
              </NavLink>
          </div>
               
        </Paper>          
    
    
      </>
    )
}
export default Login;