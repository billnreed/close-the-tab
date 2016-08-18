class Dice {
    constructor() {
        this._die1 = document.querySelector('.die--1');
        this._die2 = document.querySelector('.die--2');
        this._die1Value = 0;
        this._die2Value = 0;
    }

    roll1() {
        const dieValue = this._generateDieValue();
        this._die1.textContent = dieValue;
        this._die1Value = dieValue;
    }

    roll2() {
        const dieValue = this._generateDieValue();
        this._die2.textContent = dieValue;
        this._die2Value = dieValue;
    }

    getDiceSum() {
        return this._die1Value + this._die2Value;
    }

    _generateDieValue() {
        return Math.round((Math.random() * 5)) + 1;
    }
}

const dice = new Dice();

export default dice;
