import React, { useState } from 'react'
import useFrom from '../../useHooks/useMultipleInput'
import {Box,Avatar,Paper,Typography,TextField,Button,Grid}  from "@material-ui/core"
import {makeStyles} from '@material-ui/styles'
const useStyle= makeStyles({
    root:{
        position: 'relative',
        height:'600px',
        width:'400px',
        margin:'40px auto',
    },
    header :{
        height:'120px',
        display:'block',
        width:'100%',
        textAlign:'center',
       },
    avatar :{
        position:'absolute',
        height:'50px',
        top:'30px',
        left:'45%',
        width:'50px',
        
        },
    
    inputBox :{
        height:'270px',
        width:'80%',
        margin:'20px 10px 20px 12px',
        border:'1px solid blue',
        borderRadius:'10px',
        padding:'30px 20px',
    },
    input:{
        margin:"15px 0px"
    },
    
    
    
    })


function SignUp(){

    const classes=useStyle();

return(

<>
  <Paper  className={classes.root} >
  <div className={classes.header}>
               <Avatar className={classes.avatar}>

               </Avatar>
               <Typography variant="h4" style={{ position:"absolute", top:"75px",left:"32%"}}>
                   Login Here
               </Typography>
          </div>


  <Grid container>
  
  <Grid item xs={12} sm={6}  >


  </Grid>

  <Grid item xs={12} sm={6}>


  </Grid>
   

  </Grid>


  </Paper>
</>

)

}

export default SignUp;