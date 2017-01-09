import States from './states';
import StateFactory from './state-factory';
import Modes from './modes';

import AppView from './views/app-view';
import AppModel from './models/app-model';

class App {
    constructor() {
        this._view = new AppView();
        this._model = new AppModel();

        if (localStorage.didWin == 'true') {
            this._view.showWinMessage();
            localStorage.didWin = 'false';
        }
    }

    start() {
        this.transitionTo(States.CHOOSE_MODE);
    }

    transitionTo(state) {
        const oldStateInstance = this._model.getState();
        if (oldStateInstance) oldStateInstance.onExit();

        this._model.setState(StateFactory.getInstance(state));
        this._view.transitionTo(state);

        this._model.getState().onEnter(this);
    }

    setMode(mode) {
      this._model.setMode(mode);
    }

    getMode() {
      return this._model.getMode();
    }

    debug(state) {
        console.log(state);
        document.querySelector('.debug-state').textContent = state;
    }
}

const closeTheTab = new App();

export default closeTheTab;
