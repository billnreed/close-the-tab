import App from '../app';
import JsonStorage from '../../../lib/json-storage'

class WinState {
    constructor() {}

    onEnter() {
        JsonStorage.set('didWin', true);
        window.close();
    }

    onExit() {}
}

export default WinState;
