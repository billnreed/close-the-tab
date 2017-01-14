import App from '../app';

class WinState {
    constructor() {}

    onEnter() {
        localStorage.didWin = 'true';
        window.close();
    }

    onExit() {}
}

export default WinState;
