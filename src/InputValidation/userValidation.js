import validationLogic from "./validationLogic"


function userValidation(input){

      const {alphabet,bdPhone}  = validationLogic();

      const error={};
      const {name,email,phone,password,gender} = input;

    if(name===""){
        error.name="This name field is required";
       }
    else{
         if(!alphabet.test(name)){
         error.name="Alphabet is required";  
        }
    }


    if(email===""){
        error.email="This email field is required";
    }


    if(phone===""){
       error.phone="This phone field is required";
    }
    else{
          if(! bdPhone.test(phone)){    //not true
          error.phone="only valid Bd phone number is required";
         }
     }

   if(password===""){
    error.password="This password field is required";
   }



   if(gender===""){
        error.gender="This gender field is required";
   }



   return error;

}

export default userValidation;