import App from '../app';
import JsonStorage from '../../../lib/json-storage'

class WinState {
    constructor() {}

    onEnter() {
        window.opener.celebrate();
        window.close();
    }

    onExit() {}
}

export default WinState;
