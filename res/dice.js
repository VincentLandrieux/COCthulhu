/*---Variable---*/
var diceSelect = 0;

var dices = [
    {"name": "d20", "elem": null, "value": 20},
    {"name": "d12", "elem": null, "value": 12},
    {"name": "d10", "elem": null, "value": 10},
    {"name": "d8", "elem": null, "value": 8},
    {"name": "d6", "elem": null, "value": 6},
    {"name": "d4", "elem": null, "value": 4}
];
//HTML Element
var diceBtn = document.querySelector('.dice_roll_btn');
var diceResult = document.querySelector('.dice_roll_result');


/*---Action---*/
dices.forEach((dice, i) => {
    dice.elem = document.querySelector('.'+dice.name+'');

    dice.elem.addEventListener('click', (e) => {
        dices[diceSelect].elem.classList.remove("select");
        dices[i].elem.classList.add("select");
        diceSelect = i;
    });
});


/*---Event---*/
diceBtn.addEventListener('click', (e) => {
    var rollInt = setInterval(rollDice, 1000/8, dices[diceSelect].value);

    setTimeout(() => {
        clearInterval(rollInt);
    }, 1000)
});

/*---Function---*/
function rollDice(dice) {
    min = 1;
    dice = Math.floor(dice);
    diceResult.innerHTML = Math.floor(Math.random() * (dice - min +1)) + min;
}
