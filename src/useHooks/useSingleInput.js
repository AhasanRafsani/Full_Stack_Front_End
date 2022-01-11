import { useState } from "react";


function useFrom(value){

const[ UserInput, setInput ] = useState(value);

const handleInputChange = (e) => {
    setInput(e.target.value);
}
return [ 
       UserInput , 
       handleInputChange 
       ];

}
export default useFrom;