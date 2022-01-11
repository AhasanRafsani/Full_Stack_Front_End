import React, { useState } from 'react'
import useFrom from '../../useHooks/useMultipleInput';
import {Avatar,Paper,Typography,TextField,Button, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup}  from "@material-ui/core"
import {makeStyles} from '@material-ui/styles'
import userValidation from "../../InputValidation/userValidation";
import {useDispatch,useSelector} from "react-redux";
import {addNewUser} from "../../redux/actions/userAction";

const useStyle= makeStyles({
    root:{
        position: 'relative',
        minHeight:'420px',
        maxWidth:'400px',
        margin:" 50px auto",
        backgroundColor:"rgb(176,196,222)"
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
        top:'10px',
        left:'40%',
        width:'75px',
        
        },
    
    inputBox :{
        minHeight:'270px',
        width:'80%',
        margin:'10px 10px 20px 17px',
        padding:'30px 20px',
    },
    input:{
        margin:"10px 0px"
    },
    
    
    
    })

const input={
    name:"",
    email:"",
    phone:"",
    password:"",
    gender:"",
}
function SignUp(){
          const [userInput, handleInputChange] = useFrom(input);

          const [errors ,setErrors] = useState(input);

          const [serverErrors ,setServerErrors] = useState({});

          const dispatch = useDispatch();
    
  
    
        const textInput = [
        {type:"text",name:"name",label:"Name",value:userInput.name, error:errors.name},
        {type:"email",name:"email",label:"Email",value:userInput.email,error:errors.email},
        {type:"text",name:"phone",label:"Phone No", value:userInput.phone,error:errors.phone},
        {type:"password",name:"password",label:"Password",value:userInput.password,error:errors.password}
         ]

    
        const res = useSelector((state)=>state);
           

        const handleSubmit = (e)=> {
              e.preventDefault();
              const err = userValidation(userInput);
              setErrors(err);
              const checkError = Object.values(err);

              if(checkError.length === 0) {

                   dispatch(addNewUser(userInput)) 
         
               }
          
        }
       

        const classes=useStyle();
    
return(

<>
 <Paper className={classes.root}>

    <div className={classes.header}>
        <Avatar className={classes.avatar}>

        </Avatar>
        <Typography variant="h4" style={{ position:"absolute", top:"95px",left:"90px"}}>
            Sign Up Here
        </Typography>
   </div>


  <div className={classes.inputBox}>
  
    <form onSubmit={handleSubmit}>
      
    {
      textInput.map((item)=>(
    
      <>
         <TextField 
          fullWidth  
          className={classes.input} 
          type={item.type}
          value={item.value}
          label={item.label}
          name={item.name}
          onChange={handleInputChange}
        />
        <Typography color="secondary" variant="subtitle2">{item.error}</Typography>
      </>
     
      ))

    }
        
    
        <FormControl className={classes.input}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="gender" value={userInput.gender} onChange={handleInputChange}>
            <FormControlLabel label="Male" value="male" control={<Radio/>} />
            <FormControlLabel label="Female" value="female" control={<Radio/>} />
            <FormControlLabel label="Other" value="other" control={<Radio/>} />
            </RadioGroup>
            <Typography color="secondary" variant="subtitle2">{errors.gender}</Typography>
        </FormControl>
       
     
        <Button 
         fullWidth 
         type="submit" 
         color="primary" 
         variant="contained"
         className={classes.input}>Sign Up </Button>
     </form>
   </div>
 </Paper>

</>

)

}

export default SignUp;