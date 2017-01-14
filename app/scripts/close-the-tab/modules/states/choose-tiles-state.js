import App from '../app';

import States from '../states';

import Dice from '../dice';
import Tiles from '../tiles';

import ChooseTilesView from '../views/choose-tiles-view';

class ChooseTilesState {
    constructor() {
        this._view = new ChooseTilesView();
    }

    onEnter() {
        Tiles.clearSelected();
        Tiles.markAllTilesActive();

        Tiles.addClickListeners(this._handleTileClick);
        this._view.addUseTilesListener(this._handleUseTiles);
    }

    onExit() {
        Tiles.removeClickListeners(this._handleTileClick);
        this._view.removeUseTilesListener(this._handleUseTiles);
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

export default ChooseTilesState;
