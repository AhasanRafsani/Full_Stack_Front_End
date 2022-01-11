
import React, { useState ,useEffect} from "react";
import useFrom from '../../useHooks/useMultipleInput'
import {Grid,Paper,Box,TextField,FormControl,InputLabel,Select,MenuItem,Button,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getAllCategory } from "../../redux/actions/categoryAction" ;
import { useSelector , useDispatch } from "react-redux";
import productValidation from "../../InputValidation/productValidation" ;
import singleFileValidation from "../../InputValidation/fileValidation";
import  useFile from "../../useHooks/useFileInput"
import { addNewProduct }  from "../../redux/actions/productAction";
const useStyle=makeStyles({

    inputFieldMargin:{
        marginTop:"10px",
    },
    inputButton:{
        marginTop:"35px",
        marginLeft:"25px",
       
    }

})

const input={
    title:"",
    price:"",
    brand:"",
    quantityInStock:"",
    description:"",
    category:""
    
};

function AddNewProduct(){

    const [ userInput,handleInputChange ] = useFrom(input);
    const [ errors, setError ] = useState(input);
    const [inputFile,fileHandler]=useFile("");
    const [fileError,setFileError]=useState("");

    
    const dispatch = useDispatch();
    const { categories } = useSelector((state)=>state.category.getAllCategoryReducer);

   

    const inputArray = [
      {type:"text",name:"title",label:"Enter Product Title", value:userInput.title, error:errors.title},
      {type:"number",name:"price",label:"Enter Product price" ,value:userInput.price, error:errors.price},
      {type:"text",name:"brand",label:"Enter Product Brand" ,value:userInput.brand, error:errors.brand},
      {type:"number",name:"quantityInStock",label:"Enter Quantity In Stock" ,value:userInput.quantityInStock, error:errors.quantityInStock}
    ]
    
   
    useEffect(()=>{
      dispatch(getAllCategory());
    },[]);
    
    const handleFormSubmit=(e)=>{
      e.preventDefault();

      const err = productValidation(userInput);
      setError(err);
      const FileErr = singleFileValidation(inputFile);
      setFileError(FileErr);
      
      const { title,price,brand,quantityInStock,description,category}=userInput;

      const formData = new FormData();

      formData.append("title",title);
      formData.append("price",price);
      formData.append("brand",brand);
      formData.append("quantityInStock",quantityInStock);
      formData.append("description",description);
      formData.append("category",category);
      formData.append("inputFile",inputFile);

      

      if(Object.keys(err).length===0 && FileErr==="" ){
        dispatch(addNewProduct(formData));
        
      }
     
     
    }
 
    const classes = useStyle();
return(

    <>
    <form onSubmit={handleFormSubmit} >
    <Box px={2} mb={6} >
    <Grid container> 
    <Grid item xs={12} lg={6}>
      <Box mr={3}>
    {
      inputArray.map((item)=>
      (
      <>
      <TextField 
        fullWidth 
        variant="outlined"  
        type={item.type}
        name={item.name}   
        label={item.label} 
        value={item.value} 
        onChange={handleInputChange}
        className={classes.inputFieldMargin} />

       <Typography color="secondary" variant="subtitle2">{item.error}</Typography>
      </>
      ))
    }
      </Box>
    </Grid>

    <Grid item xs={12} lg={6}>
        <Box mr={3}>
  
      <TextField fullWidth
      type="text"
      label="Product_Description"
      name="description"
      variant="outlined"
      value={userInput.description}
      onChange={handleInputChange}
      multiline
      row={5}
      className={classes.inputFieldMargin}
      />
     <Typography color="secondary" variant="subtitle2">{errors.description}</Typography>

     <FormControl fullWidth className={classes.inputFieldMargin} >

         <InputLabel id="demo-simple-select-label">Choose Category</InputLabel>
         <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="category"
          displayEmpty
          value={userInput.category}
          onChange={handleInputChange}
          >
          {
          categories.map((item) => (
          
          <MenuItem  value={item.category}>{item.category}</MenuItem>
          )
           )
         }
        </Select>
      
        </FormControl>
         <Typography color="secondary" variant="subtitle2">{errors.category}</Typography>
         
         <input type="file"  name="file"   onChange={ fileHandler }    style={{marginTop:"40px"}}/> 
         <Typography color="secondary" variant="subtitle2">{fileError}</Typography>
         <Button  type="submit" color="primary" variant="contained" className={classes.inputButton}> Submit </Button>
      
        
        </Box>
    </Grid>
  
    </Grid>
    </Box>
    </form>
    </>



)



}
export default AddNewProduct;