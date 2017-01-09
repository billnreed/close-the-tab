import App from '../app';

import States from '../states';

import Tiles from '../tiles';

class LoseState {
    constructor() {}

    onEnter() {
        const score = Tiles.getRemainingTiles().reduce((score, tile) => score + tile.getValue(), '');
        App.setScore(score);

        document.querySelector('#play-again-button').addEventListener('click', this._handlePlayAgain);
    }

    onExit() {
        document.querySelector('#play-again-button').removeEventListener('click', this._handlePlayAgain);
    }

    _handlePlayAgain(e) {
        e.preventDefault();
        App.transitionTo(States.SETUP);
    }
}

export default LoseState;
