import TileView from './views/tile-view';
import TileModel from './models/tile-model';

class Tiles {
    constructor() {
        this.tiles = Array.from(document.querySelectorAll('.tile'));

        this._tileViews = [];
        this._tileModels = [];
        for (let tileValue = 1; tileValue <= 9; tileValue++) {
            const selector = `.tile[data-number='${tileValue}']`;
            this._tileViews.push(new TileView(selector));
            this._tileModels.push(new TileModel(tileValue));
        }
    }

    toggleTile(tileEl) {
        this._getTileViewForElement(tileEl).toggleSelected();
        this._getTileModelForElement(tileEl).toggleSelected();
    }

    useSelectedTiles() {
        this._getSelectedTileViews().forEach(tileView => {
          tileView.markUsed();
        });

        this._getSelectedTileModels().forEach(tileModel => {
          tileModel.markUsed();
        });
    }

    markAllTilesActive() {
      this._tileViews.forEach(tileView => tileView.markActive());
    }

    markAllTilesNotActive() {
      this._tileViews.forEach(tileView => tileView.markNotActive());
    }

    getSelectedTileSum() {
        return this._getSelectedTileModels().reduce((sum, tileModel) => sum + tileModel.getValue(), 0);
    }

    clearSelected() {
        this._tileModels.forEach(tileModel => tileModel.markNotSelected());
        this._tileViews.forEach(tileView => tileView.markNotSelected());
    }

    _getSelectedTileViews() {
      const selectedTileViews = [];
      this._tileModels.forEach((tileModel, index) => {
        if (tileModel.isSelected()) {
          selectedTileViews.push(this._tileViews[index]);
        }
      });
      return selectedTileViews;
    }

    _getSelectedTileModels() {
      return this._tileModels.filter(tileModel => tileModel.isSelected());
    }

    _getTileViewForElement(el) {
        const tileElValue = Number(el.attributes.getNamedItem('data-number').value);
        return this._tileViews[tileElValue - 1];
    }

    _getTileModelForElement(el) {
        const tileElValue = Number(el.attributes.getNamedItem('data-number').value);
        return this._tileModels[tileElValue - 1];
    }
}

const tiles = new Tiles();

export default tiles;
