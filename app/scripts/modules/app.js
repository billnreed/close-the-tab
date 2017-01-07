import States from './states';
import Dice from './dice';
import Tiles from './tiles';
import areThereMovesLeft from './moves-left-analyzer';
import AppView from './views/app-view';

class App {
    constructor() {
        this._appView = new AppView();
        this.appEl = document.querySelector('.app');
        this._state = null;
    }

    start() {
        this._transitionTo(States.SETUP);
    }

    _transitionTo(state) {
        this._appView.transitionTo(state);
        this._state = state;
        
        switch (state) {
            case States.SETUP:
                this.debug('setup');

                Tiles.setNumberOfTiles(9);
                Dice.setNumberToRoll(2);

                this._registerEventListeners();

                this._transitionTo(States.ROLL);
                break;
            case States.ROLL:
                this.debug('roll');

                Tiles.markAllTilesNotActive();
                break;
            case States.EVALUATE_ROLL:
                this.debug('evaluate_roll');

                if (!areThereMovesLeft(Dice.getDiceSum(), Tiles.getRemainingTiles())) {
                    this._transitionTo(States.LOSE);
                } else {
                    this._transitionTo(States.CHOOSE);
                }
                break;
            case States.CHOOSE:
                this.debug('choose');

                Tiles.clearSelected();
                Tiles.markAllTilesActive();
                break;
            case States.CHECK_WIN:
                this.debug('check_win');

                const remainingTileCount = Tiles.getRemainingCount();
                if (remainingTileCount == 0) {
                    this._transitionTo(States.WIN);
                } else {
                    this._transitionTo(States.RESET_DICE);
                }

                break;
            case States.RESET_DICE:
                this.debug('reset dice');

                if (Tiles.getRemainingTilesSum() <= 6) {
                    Dice.setNumberToRoll(1);
                } else {
                    Dice.setNumberToRoll(2);
                }

                Dice.clear();

                this._transitionTo(States.ROLL);
                break;
            case States.WIN:
                this.debug('win');
                window.close();
                break;
            case States.LOSE:
                this.debug('lose');
                break;
        }
    }

    _registerEventListeners() {
        Tiles.registerClickListeners(e => {
            if (this._state === States.CHOOSE) {
                Tiles.toggleTile(e.target);
            }
        });

        document.querySelector('#use-tiles-button').addEventListener('click', () => {
            if (this._state === States.CHOOSE) {
                if (Dice.getDiceSum() === Tiles.getSelectedTileSum()) {
                    Tiles.useSelectedTiles();

                    this._transitionTo(States.CHECK_WIN);
                }
            }
        });

        document.querySelector('#roll-button').addEventListener('click', () => {
            if (this._state === States.ROLL) {
                Dice.roll();

                this._transitionTo(States.EVALUATE_ROLL);
            }
        });
    }

    debug(state) {
        console.log(state);
        document.querySelector('.debug-state').textContent = state;
    }
}

const closeTheTab = new App();

export default closeTheTab;
