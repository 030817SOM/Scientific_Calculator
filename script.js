
function appendToDisplay(input) {
      document.getElementById("display").value += input;
}
function clearDisplay(){
    document.getElementById("display").value = "";
}
function calculate() {
    try {
        const display = document.getElementById("display");


        let expression = display.value;
         
        expression = expression.replace(/(\d+)%/g, "($1/100)");
        expression = expression.replace(/x/g, '*'); 
        expression = expression.replace(/÷/g, '/');
        expression = expression.replace(/π/g, (Math.PI).toFixed(2));
        
        

        if (expression.trim() === "") {
            display.value = "0";
            return;
        }

        let result = eval(expression);
         
        if (result === undefined || result === null || isNaN(result) ||
            result === Infinity || result === -Infinity) {
            display.value = "Error";
        } else {
            display.value = result;
        }
        
    } catch (error) {
        display.value = "Error";
    }
}
function deleteLastCharacter() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}


