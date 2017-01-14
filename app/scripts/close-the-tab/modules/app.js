import JsonStorage from '../../lib/json-storage';

import States from './states';
import StateFactory from './state-factory';
import Modes from '../../common/modes';

import AppView from './views/app-view';
import AppModel from './models/app-model';

class App {
    constructor() {
        this._view = new AppView();
        this._model = new AppModel();
    }

    start() {
        this.transitionTo(States.SETUP);
    }

    transitionTo(state) {
        const oldStateInstance = this._model.getStateInstance();
        if (oldStateInstance) oldStateInstance.onExit();

        this._model.setStateInstance(StateFactory.getInstance(state));
        this._view.transitionTo(state);

        this._model.getStateInstance().onEnter();
    }

    setMode(mode) {
      JsonStorage.set('mode', mode);
    }

    getMode() {
      return JsonStorage.get('mode');
    }

    setScore(score) {
      this._view.setScore(score);
    }
}

const closeTheTab = new App();

export default closeTheTab;
