let inputName=document.querySelector(".js-enterName").value;
let inputNumber=document.querySelector(".js-enterNumber").value;
let inputEmail=document.querySelector(".js-enterEmail").value;
let validateMessage=document.querySelector(".js-message");

function evaluateInputs(){
    if(inputName===''|| inputNumber==='' || inputEmail===''){
        validateMessage.innerHTML="Fields are empty";
    }else{
        validateMessage.classList.add("js-success-message");
        validateMessage.innerHTML="Success";
    }
}        

function clearAll(){
    document.querySelector(".js-enterName").value='';
    document.querySelector(".js-enterNumber").value='';
    document.querySelector(".js-enterEmail").value='';
    validateMessage.innerHTML=" ";
}
   


    

