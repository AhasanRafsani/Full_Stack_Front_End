import validationLogic from "./validationLogic"

function productValidation (userInput){
    const { title,price,brand,quantityInStock,description,category} = userInput;
    const {alphabet,string}=validationLogic();
    const err={};

      if(title===""){
        err.title="This title field is required !";
      }
      else{
       if( ! alphabet.test(title)){
           err.title="Alphabet title is required"
       }
      } 
     ///
      if(price===""){
        err.price="This price field is required !";
      }
      else{
        if( ! string.test(price)){
            err.price="Please input number type !"
        }
      }
      ///
      if(brand===""){
        err.brand="This brand field is required !";
      }
      else{
          if(! alphabet.test(brand)){
            err.brand= "Alphabet brand name is required !" 
          }
      }
      //
      if(quantityInStock===""){
        err.quantityInStock ="This quantity In Stock field is required !";
      }
      else{
          if( !string.test(quantityInStock)){
            err.quantityInStock ="Number type quantity In Stock is required !" ;
          }
      }
      //
      if(description===""){
        err.description="This description field is required !";
      }
      else{
          if(! alphabet.test(description)){
            err.description= "Alphabet description name is required !" ;
          }
      }
      //
      if(category===""){
        err.category="This category field is required !";
      }
      else{
          if(! alphabet.test(category)){
            err.category = "Alphabet category name is required !"; 
          }
      }
      

   return err; 
}
export default productValidation;