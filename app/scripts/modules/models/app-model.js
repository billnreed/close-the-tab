class AppModel {
    constructor() {
        this._stateInstance = null;
        this._mode = null;
    }

    setStateInstance(stateInstance) {
        this._stateInstance = stateInstance;
    }

    getStateInstance() {
        return this._stateInstance;
    }

    setMode(mode) {
        this._mode = mode;
    }

    getMode() {
        return this._mode;
    }
}

export default AppModel;
