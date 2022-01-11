

function loginValidation(input){
   const err = {};
   const { name ,password } = input;

    
   if(name===""){
       err.name="This name field is required";
   }

   if(password===""){
       err.password="This password field is required";
   }

return err;
}
export default loginValidation;