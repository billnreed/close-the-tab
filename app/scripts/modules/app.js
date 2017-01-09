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
        const oldStateInstance = this._model.getStateInstance();
        if (oldStateInstance) oldStateInstance.onExit();

        this._model.setStateInstance(StateFactory.getInstance(state));
        this._view.transitionTo(state);

        this._model.getStateInstance().onEnter();
    }

    setMode(mode) {
      this._model.setMode(mode);
    }

    getMode() {
      return this._model.getMode();
    }

    setScore(score) {
      this._view.setScore(score);
    }
}

const closeTheTab = new App();

export default closeTheTab;
