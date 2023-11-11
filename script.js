let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function percentage() {
    display.value = display.value/100;
}

function squareRoot() {
    display.value = Math.sqrt(eval(display.value));
}

function square() {
    display.value = Math.pow(eval(display.value), 2);
}

function cube() {
    display.value = Math.pow(eval(display.value), 3);
}

function cubeRoot() {
    display.value = Math.pow(eval(display.value), 1/3);
}
