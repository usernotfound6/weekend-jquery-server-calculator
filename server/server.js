// server config
const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser')

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended:true}))

// server on
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

// global vars
let calculationHistory = [];
let calculationAnswer;

app.post('/calculate', (req, res) => {
    let newCalculationData = req.body;

    console.log(newCalculationData);
    
    let operator = newCalculationData.operator;
    
    let numberOne = Number(newCalculationData.numberOne);
    let numberTwo = Number(newCalculationData.numberTwo);

    if (operator === '+'){
        calculationAnswer = numberOne + numberTwo;
        console.log(calculationAnswer);
    } else if (operator === '-'){
        calculationAnswer = numberOne - numberTwo;
        console.log(calculationAnswer);
    } else if (operator === '*'){
        calculationAnswer = numberOne * numberTwo;
        console.log(calculationAnswer);
    } else if (operator === '/'){
        calculationAnswer = numberOne / numberTwo;
        console.log(calculationAnswer);
    } else {
        return;
    }

    let newCalculationSet = {
        numberOne: numberOne,
        operator: operator,
        numberTwo: numberTwo,
        answer: calculationAnswer
    }
    
    calculationHistory.push(newCalculationSet);
    res.sendStatus(201)
});

app.get('/history', (req, res) => {
    res.send(calculationHistory);
})
