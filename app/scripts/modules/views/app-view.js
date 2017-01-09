import States from '../states';

class AppView {
    constructor() {
        this._el = document.querySelector('.app');

        this._stateClasses = {};
        this._stateClasses[States.CHOOSE_MODE] = 'state-choose-mode';
        this._stateClasses[States.SETUP] = 'state-setup';
        this._stateClasses[States.ROLL] = 'state-roll';
        this._stateClasses[States.EVALUATE_ROLL] = 'state-evaluate-roll';
        this._stateClasses[States.CHOOSE] = 'state-choose';
        this._stateClasses[States.CHECK_WIN] = 'state-check-win';
        this._stateClasses[States.RESET_DICE] = 'state-reset-dice';
        this._stateClasses[States.LOSE] = 'state-lose';
        this._stateClasses[States.WIN] = 'state-win';
    }

    transitionTo(state) {
        this._removeStateClasses();
        this._addStateClass(state)
    }

    showWinMessage() {
      this._el.classList.add('is-celebrating');
    }

    hideWinMessage() {
      this._el.classList.remove('is-celebrating');
    }

    setScore(score) {
      document.querySelector('#score').textContent = score;
    }

    _removeStateClasses() {
        Object.values(this._stateClasses).forEach(stateClass => this._el.classList.remove(stateClass));
    }

    _addStateClass(state) {
        this._el.classList.add(this._stateClasses[state])
    }
}

export default AppView;
