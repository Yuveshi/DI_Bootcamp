let equation = "";
let previousValue = 0;
let equalPressed = false;

function display(content){
    let div = document.getElementById("display");
    div.textContent = content;
}

function number(num){
    equation = equation + num;
    display(equation)
}

function operator(operation){
    equation = equation + operation;
    display(equation)
}

function equal(){
    let value;
    try {
        value = eval(equation)
        previousValue = value;

        display(value);
        equalPressed = true;
        equation = String(value);
    } catch(e) {
        reset()
        display("ERR")
    }
}

function reset(){
    equation = "";
    equalPressed = false;
    previousValue= 0;
    display("...")
}

function clearDisplay(){
    equation = ""
    display("...")
}