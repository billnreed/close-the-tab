import DieView from './views/die-view';
import DieModel from './models/die-model';

class Die {
  constructor(dieNumber) {
    this._view = new DieView(`.die--${dieNumber}`);
    this._model = new DieModel();
  }

  setValue(value) {
    this._view.setValue(value);
    this._model.setValue(value);
  }

  getValue() {
    return this._model.getValue();
  }

  clear() {
    this._view.clear();
    this._model.clear();
  }

  destroy() {
    this._view.destroy();
  }
}

export default Die;
