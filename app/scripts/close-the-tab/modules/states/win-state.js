import App from '../app';
import JsonStorage from '../../../lib/json-storage'
import StatTracker from '../../../common/stat-tracker'

class WinState {
    constructor() {}

    onEnter() {
        StatTracker.addWin()
        window.opener.celebrate();
        window.opener.refreshStats();
        window.close();
    }

    onExit() {}
}

export default WinState;
