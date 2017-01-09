import App from '../app';

import States from '../states';

import Tiles from '../tiles';

class CheckWinState {
    constructor() {}

    onEnter() {
        const remainingTileCount = Tiles.getRemainingCount();
        if (remainingTileCount == 0) {
            App.transitionTo(States.WIN);
        } else {
            App.transitionTo(States.RESET_DICE);
        }

    }

    onExit() {}
}

export default CheckWinState;
