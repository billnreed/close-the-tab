import Tile from './tile';

class Tiles {
    constructor() {
        this._tiles = [];
        this._numberOfTiles = 0;
    }

    setNumberOfTiles(numberOfTiles) {
        this._numberOfTiles = numberOfTiles;
        this._tiles.forEach(tile => tile.destroy());
        this._tiles = [];

        for (let tileValue = 1; tileValue <= this._numberOfTiles; tileValue++) {
            this._tiles.push(new Tile(tileValue));
        }
    }

    registerClickListeners(callback) {
        this._tiles.forEach(tile => {
            tile.registerClickListener(callback);
        });
    }

    toggleTile(tileEl) {
        const tile = this._getTileForElement(tileEl);
        tile.toggleSelected();
    }

    useSelectedTiles() {
        this._getSelectedTiles().forEach(selectedTile => {
            selectedTile.markUsed();
        });
    }

    markAllTilesActive() {
        this._tiles.forEach(tile => tile.markActive());
    }

    markAllTilesNotActive() {
        this._tiles.forEach(tile => tile.markNotActive());
    }

    getSelectedTileSum() {
        return this._getSelectedTiles().reduce((sum, tile) => sum + tile.getValue(), 0);
    }

    clearSelected() {
        this._tiles.forEach(tile => tile.markNotSelected());
    }

    getRemainingTiles() {
        return this._tiles.filter(tile => tile.isNotUsed());
    }

    getRemainingCount() {
        return this.getRemainingTiles().length;
    }

    getRemainingTilesSum() {
        return this.getRemainingTiles().reduce((sum, tile) => sum + tile.getValue(), 0);
    }

    _getSelectedTiles() {
        return this._tiles.filter(tile => tile.isSelected());
    }

    _getTileForElement(el) {
        const tileElValue = Number(el.attributes.getNamedItem('data-number').value);
        return this._tiles[tileElValue - 1];
    }
}

export default new Tiles();
