import States from './states';
import Modes from './modes';

import Dice from './dice';
import Tiles from './tiles';

import AppView from './views/app-view';
import AppModel from './models/app-model';

import areThereMovesLeft from './moves-left-analyzer';

class App {
    constructor() {
        this._view = new AppView();
        this._model = new AppModel();

        if (localStorage.didWin == 'true') {
            this._view.showWinMessage();
            localStorage.didWin = 'false';
        }
    }

    start() {
        this._transitionTo(States.CHOOSE_MODE);
    }

    _transitionTo(state) {
        this._view.transitionTo(state);
        this._model.setState(state);

        switch (state) {
            case States.CHOOSE_MODE:
                this.debug('choose mode');

                document.querySelector('#choose-mode-classic-button').addEventListener('click', () => {
                    this._model.setMode(Modes.CLASSIC);
                    this._transitionTo(States.SETUP);
                });

                document.querySelector('#choose-mode-brian-button').addEventListener('click', () => {
                    this._model.setMode(Modes.BRIAN);
                    this._transitionTo(States.SETUP);
                });

                break;
            case States.SETUP:
                this.debug('setup');

                Tiles.setNumberOfTiles(this._model.getMode().numberOfTiles);
                Dice.setNumberOfDice(this._model.getMode().numberOfDice);
                Dice.setNumberOfFaces(this._model.getMode().numberOfFaces);

                // reset from previous round
                Dice.clear();

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

                const numberOfDice = Math.ceil(Tiles.getRemainingTilesSum() / Dice.getNumberOfFaces());
                Dice.setNumberOfDice(Math.min(numberOfDice, this._model.getMode().numberOfDice));

                Dice.clear();

                this._transitionTo(States.ROLL);
                break;
            case States.WIN:
                this.debug('win');
                localStorage.didWin = 'true';
                window.close();
                break;
            case States.LOSE:
                this.debug('lose');
                const score = Tiles.getRemainingTiles().reduce((score, tile) => score + tile.getValue(), '');
                this._view.setScore(score);
                break;
        }
    }

    _registerEventListeners() {
        Tiles.registerClickListeners(e => {
            if (this._model.getState() === States.CHOOSE) {
                Tiles.toggleTile(e.target);
            }
        });

        document.querySelector('#use-tiles-button').addEventListener('click', () => {
            if (this._model.getState() === States.CHOOSE) {
                if (Dice.getDiceSum() === Tiles.getSelectedTileSum()) {
                    Tiles.useSelectedTiles();

                    this._transitionTo(States.CHECK_WIN);
                }
            }
        });

        document.querySelector('#roll-button').addEventListener('click', () => {
            if (this._model.getState() === States.ROLL) {
                Dice.roll();

                this._transitionTo(States.EVALUATE_ROLL);
            }
        });

        document.querySelector('#play-again-button').addEventListener('click', e => {
            e.preventDefault();
            this._transitionTo(States.SETUP);
        });
    }

    debug(state) {
        console.log(state);
        document.querySelector('.debug-state').textContent = state;
    }
}

const closeTheTab = new App();

export default closeTheTab;
