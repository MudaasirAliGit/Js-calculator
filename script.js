// Simple Calculator
// Prepared by Mudassir Ali

let operator = prompt("Please enter an operator(+,-,*,/) : ");

if(operator == "+" || operator == "-" || operator == "*" || operator == "/"){
    let num1 = Number(prompt("Please enter the 1st number : "));
    let num2 = Number(prompt("Please enter the 2nd number : "));
    
    if(operator == "+"){
        if((isNaN(num1) && isNaN(num2))||(isNaN(num1) || isNaN(num2))){
            alert("Invalid number!");
        }
        else{
                let result = num1 + num2;
                alert("First number : " + num1 + "\nSecond Number : "+ num2 + "\nOperator : " + operator + "\nResult : " + result); 
        }
    }
    if(operator == "-"){
        if((isNaN(num1) && isNaN(num2))||(isNaN(num1) || isNaN(num2))){
            alert("Invalid number!");
        }
        else{
                let result = num1 - num2;
                alert("First number : " + num1 + "\nSecond Number : "+ num2 + "\nOperator : " + operator + "\nResult : " + result); 
        }
    }
    if(operator == "*"){
        if((isNaN(num1) && isNaN(num2))||(isNaN(num1) || isNaN(num2))){
            alert("Invalid number!");
        }
        else{
                let result = num1 * num2;
                alert("First number : " + num1 + "\nSecond Number : "+ num2 + "\nOperator : " + operator + "\nResult : " + result); 
        }
    }
    if(operator == "/"){
        if((isNaN(num1) && isNaN(num2))||(isNaN(num1) || isNaN(num2))){
            alert("Invalid number!");
        }
        else{
                let result = num1 / num2;
                alert("First number : " + num1 + "\nSecond Number : "+ num2 + "\nOperator : " + operator + "\nResult : " + result); 
        }
    }
}
else{
    alert("Invalid Operator!");
}