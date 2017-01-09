import App from '../app';

import States from '../states';

import Tiles from '../tiles';
import Dice from '../dice';

class RollState {
    constructor() {}

    onEnter() {
        console.log('entered roll state')
        Tiles.markAllTilesNotActive();

        document.querySelector('#roll-button').addEventListener('click', this._handleRollButtonClick);
    }

    onExit() {
        console.log('exiting roll state');
        document.querySelector('#roll-button').removeEventListener('click', this._handleRollButtonClick);
    }

    _handleRollButtonClick() {
        Dice.roll();
        App.transitionTo(States.EVALUATE_ROLL);
    }
}

export default RollState;
