import Tile from './tile';

class Tiles {
    constructor() {
        this._tiles = [];

        for (let tileValue = 1; tileValue <= 9; tileValue++) {
            const selector = `.tile[data-number='${tileValue}']`;
            this._tiles.push(new Tile(selector, tileValue));
        }
    }

    registerClickListeners(callback, context) {
      this._tiles.forEach(tile => {
        tile.registerClickListener(callback, context);
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

    _getSelectedTiles() {
      return this._tiles.filter(tile => tile.isSelected());
    }

    _getTileForElement(el) {
        const tileElValue = Number(el.attributes.getNamedItem('data-number').value);
        return this._tiles[tileElValue - 1];
    }
}

export default new Tiles();
