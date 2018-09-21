let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let dice4 = document.getElementById('dice4');
let dice5 = document.getElementById('dice5');
let dice6 = document.getElementById('dice6');

let sides = [dice1, dice2, dice3, dice4, dice5, dice6];

let rollAll = document.getElementById('rollall');

function roll() {
    return Math.round(1 + Math.random() * 5);
}

function diceOne() {
    if (sides[0].className === 'side1' || 'side2' || 'side3' || 'side4' || 'side5' || 'side6') {
        return sides[0].className = 'side' + roll();
    }
}

function diceTwo() {
    if (sides[1].className === 'side1' || 'side2' || 'side3' || 'side4' || 'side5' || 'side6') {
        return sides[1].className = 'side' + roll();
    }
}

function diceThree() {
    if (sides[2].className === 'side1' || 'side2' || 'side3' || 'side4' || 'side5' || 'side6') {
        return sides[2].className = 'side' + roll();
    }
}

function diceFour() {
    if (sides[3].className === 'side1' || 'side2' || 'side3' || 'side4' || 'side5' || 'side6') {
        return sides[3].className = 'side' + roll();
    }
}

function diceFive() {
    if (sides[4].className === 'side1' || 'side2' || 'side3' || 'side4' || 'side5' || 'side6') {
        return sides[4].className = 'side' + roll();
    }
}

function diceSix() {
    if (sides[5].className === 'side1' || 'side2' || 'side3' || 'side4' || 'side5' || 'side6') {
        return sides[5].className = 'side' + roll();
    }
}

function rollEveryDice() {
    diceOne();
    diceTwo();
    diceThree();
    diceFour();
    diceFive();
    diceSix();
}

document.addEventListener('DOMContentLoaded', function() {
    sides[0].addEventListener('click', diceOne)
    sides[1].addEventListener('click', diceTwo)
    sides[2].addEventListener('click', diceThree)
    sides[3].addEventListener('click', diceFour)
    sides[4].addEventListener('click', diceFive)
    sides[5].addEventListener('click', diceSix)
    rollAll.addEventListener('click', rollEveryDice)
})

// function() {let index = parseInt(this.attributes['data-number'])}