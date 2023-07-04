let a;
let b;
let operator;
let mathexp;

function updateCalculatorDisplay(input) {
    document.querySelector('.results').value = input;
}

function cleanUp() {
    const result = operate(Number(a),Number(b),operator);
    updateCalculatorDisplay(result)
    a= null;
    b = null;
    mathexp = null;
    return result;
}

function clear() {
    document.querySelector('.results').value = null;
}

function operate(a,b, operator) {
    console.log(operator)
    switch(operator) {
        case '+': 
        return add(a,b);
        case '-': 
        return subtract(a,b);
        case 'x': 
        return multiply(a,b);
        case '/': 
        return divide(a,b);
        default: 
        return 0;
    }   
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
   return a-b;
}

function multiply(a,b) {
    return a * b;
}

function message() {
    alert('division by zero is not permitted');
    return 0;
}

function divide(a,b) {
    if(b == 0) {
        return message();
    }
    return (Math.floor((a/b) * 10)/10);
}

function disableButton(isDisabled) {
   const dotButton = document.querySelector('.dot');
   dotButton.disabled = isDisabled;
}

function getClickedButtonValue(event) {
   const button = event.target;
//    updateCalculatorDisplay(button.innerHTML)
   if(button.innerHTML === "+" || button.innerHTML === "-" ||button.innerHTML === "x" || button.innerHTML === "/" ) {
    let result = 0;
    a = mathexp;
    mathexp = null;
    operator = button.innerHTML;
    disableButton(false)
  } else if(button.innerHTML == "=") {
     b = mathexp;
    //  console.log(`${a}${operator}${b}`)
      a != null? cleanUp() : null;
  } else if(button.innerHTML == 'clear') {
     cleanUp()
     disableButton(false)
  }else if(button.innerHTML == ".") {
    mathexp == null? mathexp = button.innerHTML : mathexp += button.innerHTML;
    updateCalculatorDisplay(mathexp)
    disableButton(true)
  } else {
    mathexp == null? mathexp = button.innerHTML : mathexp += button.innerHTML;
    updateCalculatorDisplay(mathexp)
  }
}
const buttons = document.querySelectorAll('.button-column');
buttons.forEach((block, index) => {
   block.querySelectorAll('.button').forEach(item => {
        item.addEventListener('click', getClickedButtonValue);
    });
   });

document.querySelector('#clear').addEventListener('click', clear)

// document.querySelector('#evaluate').addEventListener('click', work)
