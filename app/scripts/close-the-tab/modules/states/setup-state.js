import App from '../app';

import States from '../states';

import Dice from '../dice';
import Tiles from '../tiles';

class SetupState {
    constructor() {}

    onEnter() {
        Tiles.setNumberOfTiles(App.getMode().numberOfTiles);
        Dice.setNumberOfDice(App.getMode().numberOfDice);
        Dice.setNumberOfFaces(App.getMode().numberOfFaces);

        // reset from previous round
        Dice.clear();

        App.transitionTo(States.ROLL);
    }

    onExit() {}

}

export default SetupState;
