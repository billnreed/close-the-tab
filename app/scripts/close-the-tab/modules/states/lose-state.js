import App from '../app';

import States from '../states';

import Tiles from '../tiles';

import LoseView from '../views/lose-view';

class LoseState {
    constructor() {
      this._view = new LoseView();
    }

    onEnter() {
        const score = Tiles.getRemainingTiles().reduce((score, tile) => score + tile.getValue(), '');
        App.setScore(score);

        this._view.addPlayAgainListener(this._handlePlayAgain);
    }

    onExit() {
        this._view.removePlayAgainListener(this._handlePlayAgain);
    }

    _handlePlayAgain(e) {
        e.preventDefault();
        App.transitionTo(States.SETUP);
    }
}

export default LoseState;
