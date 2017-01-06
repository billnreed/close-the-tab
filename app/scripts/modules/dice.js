import Die from './die';

class Dice {
    constructor() {
        this._die1 = new Die('.die--1');
        this._die2 = new Die('.die--2');
    }

    rollTwoDice() {
        const die1Value = this._generateDieValue();
        const die2Value = this._generateDieValue();

        this._die1.setValue(die1Value);
        this._die2.setValue(die2Value);
    }

    getDiceSum() {
        return this._die1.getValue() + this._die2.getValue();
    }

    _generateDieValue() {
        return Math.round((Math.random() * 5)) + 1;
    }
}

export default new Dice();
