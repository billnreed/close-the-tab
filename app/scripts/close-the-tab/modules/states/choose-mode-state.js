import App from '../app';

import Modes from '../modes';
import States from '../states';

import ChooseModeView from '../views/choose-mode-view';

class ChooseModeState {
    constructor() {
      this._view = new ChooseModeView();
    }

    onEnter() {
        this._view.addModeLinks();
        this._view.addClickListeners(this._handleChooseMode);
    }

    onExit() {
        this._view.removeClickListeners(this._handleChooseMode);
        this._view.removeModeLinks();
    }

    _handleChooseMode(e) {
      const modeKey = e.target.getAttribute('data-mode');
      const mode = Modes[modeKey];

      App.setMode(mode);
      App.transitionTo(States.SETUP);
    }
}

export default ChooseModeState;
