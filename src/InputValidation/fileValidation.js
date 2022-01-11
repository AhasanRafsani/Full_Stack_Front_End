
function singleFileValidation(input){
let err;
const {type}=input;
if( (type==="image/png") || (type==="image/jpg") || (type==="image/jpeg")){
  err=""}
  else{
      err="Only png , jpg and jpeg allowed !"
  }
  return err;
}
export default  singleFileValidation;