import App from '../app';

import Modes from '../modes';
import States from '../states';

class ChooseModeState {
    constructor() {}

    onEnter() {
        document.querySelector('#choose-mode-classic-button').addEventListener('click', this._handleChooseClassicMode);
        document.querySelector('#choose-mode-brian-button').addEventListener('click', this._handleChooseBrianMode);
    }

    onExit() {
        document.querySelector('#choose-mode-classic-button').removeEventListener('click', this._handleChooseClassicMode);
        document.querySelector('#choose-mode-brian-button').removeEventListener('click', this._handleChooseBrianMode);
    }

    _handleChooseClassicMode() {
        App.setMode(Modes.CLASSIC);
        App.transitionTo(States.SETUP);
    }

    _handleChooseBrianMode() {
        App.setMode(Modes.BRIAN);
        App.transitionTo(States.SETUP);
    }
}

export default ChooseModeState;
