import App from '../app';

import Modes from '../modes';
import States from '../states';

import ChooseModeView from '../views/choose-mode-view';

class ChooseModeState {
    constructor() {
      this._view = new ChooseModeView();
    }

    onEnter() {
        this._view.addChooseClassicModeListener(this._handleChooseClassicMode);
        this._view.addChooseBrianModeListener(this._handleChooseBrianMode);
    }

    onExit() {
        this._view.removeChooseClassicModeListener(this._handleChooseClassicMode);
        this._view.removeChooseBrianModeListener(this._handleChooseBrianMode);
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
