$(document).ready(onReady);

// on click listeners
function onReady() {
  $("#submitBtn").on("click", calculate);
  $("#addBtn").on("click", add);
  $("#subtractBtn").on("click", subtract);
  $("#multiplyBtn").on("click", multiply);
  $("#divideBtn").on("click", divide);
  $("#clearBtn").on("click", clear);
}

let operator;

function calculate() {
  let firstNumberInput = $("#numberOneInput").val();
  let secondNumberInput = $("#numberTwoInput").val();

  let newCalculation = {
    numberOne: firstNumberInput,
    operator: operator,
    numberTwo: secondNumberInput,
  };
  $.ajax({
    url: "/calculate",
    method: "POST",
    data: newCalculation
  }).then((response) => {
    console.log(response);
  })

  history();
}
function history () {
    $.ajax({
        url: '/history',
        method: 'GET'
    }).then( (response) => {
        let currentAnswer = response[response.length-1].answer

        $('#calculatorLog').empty();
        for ( let i = 0; i < response.length; i++) {
            $('#currentAnswer').text(currentAnswer);
            $('#calculatorLog').append(`
            <li>${response[i].numberOne} ${response[i].operator} ${response[i].numberTwo} = ${response[i].answer}</li>
            `)
        }

    })
}

function add() {
  operator = "+";
}

function subtract() {
  operator = "-";
}

function multiply() {
  operator = "*";
}

function divide() {
  operator = "/";
}

function clear() {
  $("#numberOneInput").val("");
  $("#numberTwoInput").val("");
}
