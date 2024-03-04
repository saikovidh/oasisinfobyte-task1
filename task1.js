let display = document.getElementById('display');

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
