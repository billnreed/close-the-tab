import TileView from './views/tile-view.js';
import TileModel from './models/tile-model.js';

class Tile {
  constructor(selector, value) {
    this._view = new TileView(selector);
    this._model = new TileModel(value);
  }

  registerClickListener(callback, context) {
    this._view.registerClickListener(callback, context);
  }

  getValue() {
    return this._model.getValue();
  }

  toggleSelected() {
    this._view.toggleSelected();
    this._model.toggleSelected();
  }

  isSelected() {
    return this._model.isSelected();
  }

  markUsed() {
    this._view.markUsed();
    this._model.markUsed();
  }

  markNotSelected() {
    this._view.markNotSelected();
    this._model.markNotSelected();
  }

  markActive() {
    this._view.markActive();
  }

  markNotActive() {
    this._view.markNotActive();
  }

  isNotUsed() {
    return this._model.isNotUsed();
  }
}

export default Tile;
