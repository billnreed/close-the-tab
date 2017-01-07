import Die from './die';

class Dice {
    constructor() {
        this._numberToRoll = 0;
        this._diceSum = 0;
        this._dice = [];
    }

    roll() {
        this._diceSum = 0;
        this._dice.forEach(die => {
            const dieValue = this._generateDieValue();
            this._diceSum += dieValue;
            die.setValue(dieValue);
        });
    }

    getDiceSum() {
        return this._diceSum;
    }

    setNumberToRoll(numberOfDie) {
        if (numberOfDie != this._numberToRoll) {
            this._numberToRoll = numberOfDie;
            this._removeDice();
            this._createDice(this._numberToRoll);
        }
    }

    clear() {
      this._dice.forEach(die => die.clear());
    }

    _removeDice() {
        this._dice.forEach(die => die.destroy());
        this._dice = [];
    }

    _createDice(numberOfDice) {
        for (let i = 0; i < numberOfDice; i++) {
            const die = new Die();
            this._dice.push(die);
        }
    }

    _generateDieValue() {
        return Math.round((Math.random() * 5)) + 1;
    }
}

export default new Dice();
