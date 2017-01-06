import TileView from './views/tile-view';

class Tiles {
    constructor() {
        this.tiles = Array.from(document.querySelectorAll('.tile'));
        this.selectedTiles = [];

        this._tileViews = [];
        for (let tileValue = 1; tileValue <= 9; tileValue++) {
          const selector = `.tile[data-number='${tileValue}']`;
          this._tileViews.push(new TileView(selector));
        }
    }

    toggleTile(tileEl) {
        this._getTileViewForElement(tileEl).toggleSelected();

        const tileIndex = this.selectedTiles.indexOf(tileEl);

        if (tileIndex == -1) {
            this.selectedTiles.push(tileEl);
        } else {
            this.selectedTiles.splice(tileIndex, 1);
        }
    }

    useSelectedTiles() {
        this.selectedTiles.forEach(tileEl => {
            this._getTileViewForElement(tileEl).markUsed();
        });
    }

    getSelectedTileSum() {
        return this.selectedTiles.reduce((sum, tileEl) => sum + Number(tileEl.attributes.getNamedItem('data-number').value), 0);
    }

    clearSelected() {
        this.selectedTiles = [];
    }

    _getTileViewForElement(el) {
      const tileElValue = Number(el.attributes.getNamedItem('data-number').value);
      return this._tileViews[tileElValue - 1];
    }
}

const tiles = new Tiles();

export default tiles;
