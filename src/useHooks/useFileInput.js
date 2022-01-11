import React,{ useState}  from "react";
function useFile(input){

const [inputFile,setInputFile]=useState(input)

const fileHandler=(e)=>{
    setInputFile(e.target.files[0]);
    console.log(inputFile);
}

return [
    inputFile,
    fileHandler
]

}

export default useFile;