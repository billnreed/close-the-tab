class ChooseTilesView {
    constructor() {
        this._useTilesButton = document.querySelector('#use-tiles-button');
    }

    addUseTilesListener(callback) {
        this._useTilesButton.addEventListener('click', callback);
    }

    removeUseTilesListener(callback) {
        this._useTilesButton.removeEventListener('click', callback);
    }
}

export default ChooseTilesView;
