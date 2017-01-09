import App from '../app';

import States from '../states';

import Dice from '../dice';
import Tiles from '../tiles';

class RollState {
    constructor() {}

    onEnter() {
        Tiles.markAllTilesNotActive();

        document.querySelector('#roll-button').addEventListener('click', this._handleRollButtonClick);
    }

    onExit() {
        document.querySelector('#roll-button').removeEventListener('click', this._handleRollButtonClick);
    }

    _handleRollButtonClick() {
        Dice.roll();
        App.transitionTo(States.EVALUATE_ROLL);
    }
}

export default RollState;
