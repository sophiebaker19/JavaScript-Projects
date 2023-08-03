//Creates object to keep track of values
const Calculator = {
    //this will display 0
    Display_Value: '0',
    //hold the first operand for any expressions
    First_Operand: null,
    //checks wether the second has been inputted
    Wait_Second_Operand: false,
    //holds the operator
    operator: null,
};

//modifies values each time a button is clicked
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //checks if the wait-second is true and sets display value
    // to key that was clicked on
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //overwrites display-value if the cureent value is 0
        //otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//section handles decimal points
function Input_Decimal(dot) {
    //ensures accidental clicking of decimal doesn't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the the display value doesn't contain a decimal point 
        //we want to add one
        Calculator.Display_Value += dot;
    }
}

//section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //when an operator is pressed, convert the current number
    //displayed to a number stored in the first-operand if
    //it doesnt already
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if wait-second is true,
    //then updates the operator an exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //if operator xists, property lookup is performed for the operator
        //if the perform-calculation object and the function that matches
        //the operator is executed
        let result = Perfom_Calculation[operator](Value_Now, Value_of_Input);
        //here we add a fixed amount of numbers after the decimal
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perfom_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand

};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
// function updates the calculator screen with the contents of display-value
function Update_Display() {
    //Makes use of the calculator-screen class to target
    //input tag in the HTML document
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>  {
    //the target variable is an object that represents the element
    //that was clicked
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures the AC clears all inputs from the screen
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})