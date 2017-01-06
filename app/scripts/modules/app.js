import States from './states.js'
import Dice from './dice.js'
import Tiles from './tiles.js'

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
        Tiles.tiles.forEach(tile => {
            tile.addEventListener('click', (e) => {
                if (this._state === States.CHOOSE) {
                    Tiles.toggleTile(e.target);
                }
            });
        });

        document.querySelector('.use-tiles').addEventListener('click', () => {
            if (this._state === States.CHOOSE) {
                if (Dice.getDiceSum() === Tiles.getSelectedTileSum()) {
                    Tiles.useSelectedTiles();

                    //if win, go to win state

                    //if lose, go to lose state

                    //else, go to roll state
                    this._transitionTo(States.ROLL);
                }
            }
        });

        document.querySelector('.roll').addEventListener('click', () => {
            if (this._state === States.ROLL) {
                Dice.rollTwoDice();

                this._transitionTo(States.CHOOSE);
            }
        });
    }

    _transitionTo(state) {
        switch (state) {
            case States.CHOOSE:
                this._state = state;
                Tiles.clearSelected();

                this.appEl.classList.remove('state-choose');
                this.appEl.classList.remove('state-roll');
                this.appEl.classList.remove('state-lose');
                this.appEl.classList.remove('state-win');
                this.appEl.classList.add('state-choose');

                Tiles.markAllTilesActive();

                //debug
                document.querySelector('.debug-state').textContent = 'choose';

                break;
            case States.ROLL:
                this._state = state;

                this.appEl.classList.remove('state-choose');
                this.appEl.classList.remove('state-roll');
                this.appEl.classList.remove('state-lose');
                this.appEl.classList.remove('state-win');
                this.appEl.classList.add('state-roll');

                Tiles.markAllTilesNotActive();

                //debug
                document.querySelector('.debug-state').textContent = 'roll';

                break;
        }
    }
}

const closeTheTab = new App();

export default closeTheTab;
