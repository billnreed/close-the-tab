class RollView {
  constructor() {
    this._rollButton = document.querySelector('#roll-button');
  }

  addRollListener(callback) {
    this._rollButton.addEventListener('click', callback);
  }

  removeRollListener(callback) {
    this._rollButton.removeEventListener('click', callback);
  }
}

export default RollView;
