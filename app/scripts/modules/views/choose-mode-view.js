class ChooseModeView {
    constructor() {
      this._chooseClassicModeButton = document.querySelector('#choose-classic-mode-button');
      this._chooseBrianModeButton = document.querySelector('#choose-brian-mode-button');
    }

    addChooseClassicModeListener(callback) {
        this._chooseClassicModeButton.addEventListener('click', callback);
    }

    addChooseBrianModeListener(callback) {
        this._chooseBrianModeButton.addEventListener('click', callback);
    }

    removeChooseClassicModeListener(callback) {
        this._chooseClassicModeButton.removeEventListener('click', callback);
    }

    removeChooseBrianModeListener(callback) {
        this._chooseBrianModeButton.removeEventListener('click', callback);
    }
}

export default ChooseModeView;
