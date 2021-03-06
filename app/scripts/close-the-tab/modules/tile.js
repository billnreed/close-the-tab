import TileView from './views/tile-view.js';
import TileModel from './models/tile-model.js';

class Tile {
  constructor(value) {
    this._view = new TileView(value);
    this._model = new TileModel(value);
  }

  addClickListener(callback) {
    this._view.addClickListener(callback);
  }

  removeClickListener(callback) {
    this._view.removeClickListener(callback);
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

  destroy() {
    return this._view.destroy();
  }
}

export default Tile;
