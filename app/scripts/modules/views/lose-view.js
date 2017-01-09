class LoseView {
  constructor() {
    this._playAgainButton = document.querySelector('#play-again-button');
  }

  addPlayAgainListener(callback) {
    this._playAgainButton.addEventListener('click', callback);
  }

  removePlayAgainListener(callback) {
    this._playAgainButton.removeEventListener('click', callback);
  }
}

export default LoseView;
