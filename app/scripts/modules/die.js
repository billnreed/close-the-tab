import DieView from './views/die-view';
import DieModel from './models/die-model';

class Die {
  constructor(selector) {
    this._view = new DieView(selector);
    this._model = new DieModel();
  }

  setValue(value) {
    this._view.setValue(value);
    this._model.setValue(value);
  }

  getValue() {
    return this._model.getValue();
  }
}

export default Die;
