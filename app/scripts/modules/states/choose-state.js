import App from '../app';

import States from '../states';

import Dice from '../dice';
import Tiles from '../tiles';

class ChooseState {
    constructor() {}

    onEnter() {
        Tiles.clearSelected();
        Tiles.markAllTilesActive();

        Tiles.addClickListeners(this._handleTileClick);
        document.querySelector('#use-tiles-button').addEventListener('click', this._handleUseTiles);
    }

    onExit() {
        Tiles.removeClickListeners(this._handleTileClick);
        document.querySelector('#use-tiles-button').removeEventListener('click', this._handleUseTiles);
    }

    _handleTileClick(e) {
        Tiles.toggleTile(e.target);
    }

    _handleUseTiles() {
        if (Dice.getDiceSum() === Tiles.getSelectedTileSum()) {
            Tiles.useSelectedTiles();

            App.transitionTo(States.CHECK_WIN);
        }
    }
}

export default ChooseState;
