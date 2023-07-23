$(document).ready(onReady);


// on click listeners
function onReady() {
    $('#sumbitBtn').on('click', calculate)
    $('#addBtn').on('click', add);
    $('#subtractBtn').on('click', subtract);
    $('#multiplyBtn').on('click', multiply);
    $('#divideBtn').on('click', divide);
    $('#clearBtn').on('click', clear);
}

let operator;

function calculate () {
    let firstNumberInput = $('#numberOneInput').val();
    let secondNumberInput = $('#numberTwoInput').val();

    let newCalculation = {
        numberOne: firstNumberInput,
        operator: operator,
        numberTwo: secondNumberInput,
}}

function add () {
    operator = '+';
}

function subtract () {
    operator = '-';
}

function multiply() {
    operator = '*';
}

function divide () {
    operator = '/';
}

function clear () {
    $('#numberOneInput').val('');
    $('#numberTwoInput').val(''); 
}