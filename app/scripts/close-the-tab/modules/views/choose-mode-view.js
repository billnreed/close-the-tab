import Modes from '../modes'

class ChooseModeView {
    constructor() {
        this._chooseClassicModeButton = document.querySelector('#choose-classic-mode-button');
        this._chooseBrianModeButton = document.querySelector('#choose-brian-mode-button');

        this._parentEl = document.querySelector('#mode-choices');
        this._linkEls = [];
    }

    addModeLinks() {
        Object.keys(Modes).forEach(modeKey => {
            const mode = Modes[modeKey];

            const linkEl = this._createLink(modeKey, mode);
            this._parentEl.appendChild(linkEl);

            this._linkEls.push(linkEl);
        });
    }

    addClickListeners(callback) {
        this._linkEls.forEach(linkEl => {
          linkEl.addEventListener('click', callback);
        });
    }

    removeClickListeners(callback) {
        this._linkEls.forEach(linkEl => {
          linkEl.removeEventListener('click', callback);
        });
    }

    removeModeLinks() {
      this._linkEls.forEach(linkEl => {
          this._parentEl.removeChild(linkEl);
      });
    }

    _createLink(name, mode) {
        const el = document.createElement('a');
        el.setAttribute('data-mode', name);
        el.setAttribute('href', '#');
        el.classList.add('choose-mode__choice');
        el.textContent = name.toLowerCase();
        return el;
    }
}

export default ChooseModeView;
