import App from '../app';

import States from '../states';

import Dice from '../dice';
import Tiles from '../tiles';

import areThereMovesLeft from '../moves-left-analyzer';

class EvaluateRollState {
    constructor() {}

    onEnter() {
        if (!areThereMovesLeft(Dice.getDiceSum(), Tiles.getRemainingTiles())) {
            App.transitionTo(States.LOSE);
        } else {
            App.transitionTo(States.CHOOSE);
        }
    }

    onExit() {}
}

export default EvaluateRollState;
