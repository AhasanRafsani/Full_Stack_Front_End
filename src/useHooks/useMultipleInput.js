import react, { useState } from "react"
import axios from "axios";


function useFrom (input){

         const[userInput,setUserInput] =useState(input);
         
         const handleInputChange=(e)=>{
         setUserInput( {...userInput, [e.target.name]:e.target.value})
         }

return  [
        userInput,
        handleInputChange,
        ]

}
export default useFrom;