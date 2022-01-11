
import React from "react";
import {TextField,Box,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Category from "./Categories";
import useSingleInput from '../../useHooks/useSingleInput';
import {useDispatch,useSelector} from "react-redux"
import {addNewCategory} from "../../redux/actions/categoryAction";

const useStyle = makeStyles({

button:{
    margin:"20px 0px",
}

})


function AddNewCategory(){

const dispatch = useDispatch();

const classes = useStyle();

const [category , handleInputChange]  = useSingleInput("");

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(category);
    dispatch(addNewCategory({category:category}))
    
}
return(
<>

 <Box height="150px" width="350px" p="10px">
 <form onSubmit={handleSubmit}>
 <TextField variant="outlined" fullWidth type="text" label="Enter Category" name="category" value={category} onChange={handleInputChange} />
 <Button fullWidth type="submit" color="primary" variant="contained" className={classes.button}> Submit </Button>
</form>
</Box>



</>
)

}
export default AddNewCategory;