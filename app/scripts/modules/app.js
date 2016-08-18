import States from './states.js'
import Dice from './dice.js'
import Tiles from './tiles.js'

class App {
    constructor() {
        this.appEl = document.querySelector('.app');
        this._state = null;
        this.chosenTiles = [];

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

                    //check for win


                    //go to States.ROLL
                }
            });
        });

        document.querySelector('.use-tiles').addEventListener('click', () => {
            if (this._state === States.CHOOSE) {
                console.log('dice sum', Dice.getDiceSum())
                console.log('selected tile sum', Tiles.getSelectedTileSum());
                if (Dice.getDiceSum() === Tiles.getSelectedTileSum()) {
                    Tiles.useSelectedTiles();
                    this._transitionTo(States.ROLL);
                }
            }
        });

        document.querySelector('.roll').addEventListener('click', () => {
            if (this._state === States.ROLL) {
                //roll dice
                Dice.roll1();
                Dice.roll2();

                //check for loss


                //go to States.CHOOSE
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

                Array.from(document.querySelectorAll('.tile')).forEach(tile => {
                    tile.classList.add('is-active');
                });

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

                Array.from(document.querySelectorAll('.tile')).forEach(tile => {
                    tile.classList.remove('is-active');
                });

                //debug
                document.querySelector('.debug-state').textContent = 'roll';

                break;
        }
    }
}

const shutTheBox = new App();

export default shutTheBox;
