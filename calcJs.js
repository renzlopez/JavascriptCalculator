/*This is a project for FreeCodeCamp entitled "Markdown Previewer".
This Javascript File uses Stateless React.
This Approach is similar from Useful Programmer.
Reference: https://www.youtube.com/watch?v=ZtgBtQR2gt0  */

//Declared Universal Variables
let trialNumber =0 ;
let resultNumber =0;
let operator =['add','subtract','multiply','divide'];
let currentOperator = "";
let negativeValue ="";
function updateDisplay(number){
    //Declared Exclusive
    let display = document.getElementById("display");
    let secondDisplay = document.getElementById("secondDisplay");
    //Operator and Buttons Function
    if(display.innerHTML  === "0" && operator.indexOf(number) === -1){          
        if(number === "decimal"){
            display.innerHTML = "0.";
        }else{
            display.innerHTML = number; 
        }
    } else if(operator.indexOf(number) >= 0){
        console.log("Dealing with Operations", number);
        if(currentOperator === ""){
            trialNumber = display.innerHTML;
            display.innerHTML = 0;
            currentOperator = number;

        } else if(currentOperator === "subtract" && number === "subtract"){
            console.log("Second Oepration");
            display.innerHTML = -Math.abs(parseFloat(display.innerHTML));
        } else{
            trialNumber = calculate(trialNumber, display.innerHTML, currentOperator);
            secondDisplay.innerHTML = trialNumber;
            display.innerHTML = 0;
            currentOperator = number;
        }
        
        
    } else if(number === "equals"){
        console.log(trialNumber, " <= trialNumber", display.innerHTML, " <= display.innerHTML", currentOperator, " <= CurrentOperator");
        display.innerHTML = calculate(trialNumber, display.innerHTML, currentOperator);
        currentOperator = "";
        trialNumber = display.innerHTML;
        secondDisplay.innerHTML = trialNumber;
    } else if(number === "decimal"){
            
        if(display.innerHTML.indexOf(".") === -1){       
           display.innerHTML += ".";      
        }
    } else  if(number === "signedValue"){
        if(display.innerHTML.indexOf("-") === -1){       
            display.innerHTML = "-" + display.innerHTML;
            trialNumber = display.innerHTML;
        }else if(display.innerHTML.indexOf("-") > -1){
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            trialNumber = display.innerHTML;
        }
        
    }else{  
        display.innerHTML += number; 
    }
}

function calculate(firstNumber, secondNumber, operation){
    let results = "";
    let first = parseFloat(firstNumber);
    let second = parseFloat(secondNumber);
    switch(operation){
        case "add":
            results = first + second;
            break;
        case "subtract":

            results = first - second;
            
            break;
        case "multiply":
            results = first * second;
            break;
        case "divide":
            results = first / second;
            break;
        default:
            //results = "1234567890";
           
    }
    return results.toString();
}

function clearDisplay(){
    //Declared Exclusive
    let display = document.getElementById("display");
    display.innerHTML = 0;     
    secondDisplay.innerHTML = 0;
    trialNumber = 0;
    resultNumber = 0;
}