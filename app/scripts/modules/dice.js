import DieView from './views/die-view';
import DieModel from './models/die-model';

class Dice {
    constructor() {
        this._die1View = new DieView('.die--1');
        this._die1Model = new DieModel();

        this._die2View = new DieView('.die--2');
        this._die2Model = new DieModel();
    }

    rollTwoDice() {
        const die1Value = this._generateDieValue();
        const die2Value = this._generateDieValue();

        this._die1View.setValue(die1Value);
        this._die1Model.setValue(die1Value);

        this._die2View.setValue(die2Value);
        this._die2Model.setValue(die2Value);
    }

    getDiceSum() {
        return this._die1Model.getValue() + this._die2Model.getValue();
    }

    _generateDieValue() {
        return Math.round((Math.random() * 5)) + 1;
    }
}

const dice = new Dice();

export default dice;
