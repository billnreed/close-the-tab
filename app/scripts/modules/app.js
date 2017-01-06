import States from './states';
import Dice from './dice';
import Tiles from './tiles';
import areThereMovesLeft from './moves-left-analyzer';

class App {
    constructor() {
        this.appEl = document.querySelector('.app');
        this._state = null;

        this._registerEventListeners();
    }

    start() {
        this._transitionTo(States.ROLL);
    }

    _registerEventListeners() {
        Tiles.registerClickListeners(e => {
            if (this._state === States.CHOOSE) {
                Tiles.toggleTile(e.target);
            }
        });

        document.querySelector('.use-tiles').addEventListener('click', () => {
            if (this._state === States.CHOOSE) {
                if (Dice.getDiceSum() === Tiles.getSelectedTileSum()) {
                    Tiles.useSelectedTiles();

                    this._transitionTo(States.CHECK_WIN);
                }
            }
        });

        document.querySelector('.roll').addEventListener('click', () => {
            if (this._state === States.ROLL) {
                Dice.rollTwoDice();

                this._transitionTo(States.EVALUATE_ROLL);
            }
        });
    }

    _transitionTo(state) {
        switch (state) {
            case States.ROLL:
                this.debug('roll');

                this._state = state;

                this.appEl.classList.remove('state-choose');
                this.appEl.classList.remove('state-roll');
                this.appEl.classList.remove('state-lose');
                this.appEl.classList.remove('state-win');
                this.appEl.classList.add('state-roll');

                Tiles.markAllTilesNotActive();
                break;
            case States.EVALUATE_ROLL:
                this.debug('evaluate_roll');

                this._state = state;

                if (!areThereMovesLeft(Dice.getDiceSum(), Tiles.getRemainingTiles())) {
                  this._transitionTo(States.LOSE);
                } else {
                  this._transitionTo(States.CHOOSE);
                }
                break;
            case States.CHOOSE:
                this.debug('choose');

                this._state = state;

                Tiles.clearSelected();

                this.appEl.classList.remove('state-choose');
                this.appEl.classList.remove('state-roll');
                this.appEl.classList.remove('state-lose');
                this.appEl.classList.remove('state-win');
                this.appEl.classList.add('state-choose');

                Tiles.markAllTilesActive();
                break;
            case States.CHECK_WIN:
                this.debug('check_win');

                this._state = state;

                const remainingTileCount = Tiles.getRemainingCount();
                if (remainingTileCount == 0) {
                    this._transitionTo(States.WIN);
                } else {
                    this._transitionTo(States.ROLL);
                }

                break;
            case States.WIN:
                this.debug('win');
                break;
            case States.LOSE:
                this.debug('lose');
                break;
        }
    }

    debug(state) {
        console.log(state);
        document.querySelector('.debug-state').textContent = state;
    }
}

const closeTheTab = new App();

export default closeTheTab;
