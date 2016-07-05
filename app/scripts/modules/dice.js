class Dice {
    constructor() {
        this.die1 = document.querySelector('.die--1');
        this.die2 = document.querySelector('.die--2');
    }

    roll1() {
        this.die1.textContent = this._generateDieValue();
    }

    roll2() {
        this.die2.textContent = this._generateDieValue();
    }

    _generateDieValue() {
        return Math.round((Math.random() * 5)) + 1;
    }
}

const dice = new Dice();

export default dice;
