import Die from './die';

class Dice {
    constructor() {
        this._numberToRoll = 2;
        this._dieSum = 0;

        this._predeterminedRolls = [[0, 9], [0,8], [0,7], [0,6], [0,5]];
        this._predeterminedRollsIndex = 0;
    }

    roll() {
        if (this._predeterminedRollsIndex < this._predeterminedRolls.length) {
          let dieValues = this._predeterminedRolls[this._predeterminedRollsIndex];
          (new Die(1)).setValue(dieValues[0]);
          (new Die(2)).setValue(dieValues[1]);
          this._dieSum = dieValues[1];
          this._predeterminedRollsIndex++;
          return;
        }

        this._dieSum = 0;
        for (let dieNumber = 1; dieNumber <= this._numberToRoll; dieNumber++) {
            const dieValue = this._generateDieValue();
            this._dieSum += dieValue;
            (new Die(dieNumber)).setValue(dieValue);
        }
    }

    getDiceSum() {
        return this._dieSum;
    }

    setNumberToRoll(numberOfDie) {
      this._numberToRoll = numberOfDie;
    }

    _generateDieValue() {
        return Math.round((Math.random() * 5)) + 1;
    }
}

export default new Dice();
