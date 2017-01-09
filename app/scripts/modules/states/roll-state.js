import App from '../app';

import States from '../states';

import Dice from '../dice';
import Tiles from '../tiles';

import RollView from '../views/roll-view';

class RollState {
    constructor() {
      this._view = new RollView();
    }

    onEnter() {
        Tiles.markAllTilesNotActive();

        this._view.addRollListener(this._handleRollButtonClick);
    }

    onExit() {
        this._view.removeRollListener(this._handleRollButtonClick);
    }

    _handleRollButtonClick() {
        Dice.roll();
        App.transitionTo(States.EVALUATE_ROLL);
    }
}

export default RollState;
