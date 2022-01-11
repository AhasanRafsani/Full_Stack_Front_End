
function validationLogic(){

const alphabet = /[A-Za-z]/gi
const string = /[0-9]/gi
const bdPhone = /(\+88)?01[6-9]{1}[0-9]{8}/gi

return{
    alphabet,
    bdPhone,
    string 

}

}

export default validationLogic;