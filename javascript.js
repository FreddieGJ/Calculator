const display = document.querySelector('.display');
const controlButtons = document.querySelector( '.controls').children;
const allSymbols = ['+', '-', 'X', '/', '%', 'C', '=', 'DEL'];

//creating the variables that hold will hold the input information.
let firstValue = '';
let secondValue = '';
let symbol = '';
let result = '';

//The function that calculates the result
const calculate = () => {
    //turns the inputs from strings to numbers
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);
    
    //the actuall calculations for each symbol
    if (symbol === '+'){result = firstValue + secondValue};
    if (symbol === '-'){result = firstValue - secondValue};
    if (symbol === 'X'){result = firstValue * secondValue};
    if (symbol === '/'){result = firstValue / secondValue};
    if (symbol === '%'){result = firstValue % secondValue};

    
    //ensures that the text information does not get confused
    display.innerText = result;
    firstValue = result;
    secondValue = '';
}

for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const { innerText: btnValue } = button;
        const btnValueIsSymbol = allSymbols.includes(btnValue);

        //deletes the last inputted item. 
        /*issue: seems to delete the last inputted item, 
        but the calculation carries on as if it weren't deleted.*/
        /*
        if (btnValue === 'DEL'){
          display.textContent = display.textContent.slice(0, -1)
          return result = display.textContent
        }
        */

        //clears the display
        if (btnValue === 'C'){
            firstValue = secondValue = symbol = ''
            return display.innerText = ''
        }

        if (firstValue && btnValueIsSymbol) {
            secondValue && calculate()
            symbol = btnValue
        }

        //if there is no symbol then the user is still inputting information.
        else if (!symbol){ firstValue += btnValue }
        //if there is a symbol, then the user is done with the first value, so add to the second.
        else if (symbol){ secondValue += btnValue } 
        
        //don't add the equal sign to the display.
        if (btnValue !== '=') {
            display.innerText += btnValue
        }
    })
}
/*
  todo: add backspace functionality 'DEL'... working on
*/

/*
  todo: if the value on the screen is a result, and the user clicks on a number,
   replace the value on the screen with the new number
*/

/*
  todo: if last character in the display is a symbol and the user clicks on another symbol,
   replace last character with the new symbol
*/

/*
  todo: fix => if result is 0, calculator stops calculating
*/
