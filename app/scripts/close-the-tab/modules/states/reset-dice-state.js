import App from '../app';

import States from '../states';

import Dice from '../dice';
import Tiles from '../tiles';

class ResetDiceState {
    constructor() {}

    onEnter() {
        const numberOfDice = Math.ceil(Tiles.getRemainingTilesSum() / Dice.getNumberOfFaces());
        Dice.setNumberOfDice(Math.min(numberOfDice, App.getMode().numberOfDice));

        Dice.clear();

        App.transitionTo(States.ROLL);
    }

    onExit() {}
}

export default ResetDiceState;
