import React from "react";
import {TextField,Box,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Category from "./Categories";
import useSingleInput from '../../useHooks/useSingleInput';
import { addNewLocation } from "../../redux/actions/locationAction";
import { useDispatch } from "react-redux";

const useStyle = makeStyles({

button:{
    margin:"20px 0px",
}

})


function AddNewLocation(){
const classes = useStyle();
const [ location , handleInputChange]  = useSingleInput(" ");
const dispatch = useDispatch();


const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addNewLocation({ location : location }))
    
}


return(
<>
 <Box height="150px" width="350px" p="10px">
   <form onSubmit={handleSubmit}>
     <TextField variant="outlined" fullWidth type="text" label="Enter Location" name="location" value={location} onChange={handleInputChange} />
     <Button fullWidth type="submit" color="primary" variant="contained" className={classes.button}> Submit </Button>
   </form>
</Box>


</>
)

}
export default AddNewLocation;