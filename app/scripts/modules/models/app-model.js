class AppModel {
    constructor() {
        this._state = null;
        this._mode = null;
    }

    setState(state) {
      this._state = state;
    }

    getState() {
      return this._state;
    }

    setMode(mode) {
      this._mode = mode;
    }

    getMode() {
      return this._mode;
    }
}

export default AppModel;
