import Die from './die';

class Dice {
    constructor() {
        this._numberOfFaces = 0;
        this._numberOfDice = 0;
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

    setNumberOfDice(numberOfDice) {
        if (numberOfDice != this._numberOfDice) {
            this._numberOfDice = numberOfDice;
            this._removeDice();
            this._createDice();
        }
    }

    setNumberOfFaces(numberOfFaces) {
        this._numberOfFaces = numberOfFaces;
    }

    getNumberOfFaces() {
      return this._numberOfFaces;
    }

    clear() {
        this._dice.forEach(die => die.clear());
    }

    _removeDice() {
        this._dice.forEach(die => die.destroy());
        this._dice = [];
    }

    _createDice() {
        for (let i = 0; i < this._numberOfDice; i++) {
            const die = new Die();
            this._dice.push(die);
        }
    }

    _generateDieValue() {
        return Math.floor((Math.random() * this._numberOfFaces)) + 1;
    }
}

export default new Dice();
