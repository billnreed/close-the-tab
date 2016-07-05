import States from './states.js'
import Dice from './dice.js'

class App {
    constructor() {
        this.appEl = document.querySelector('.app');
        this.state = null;
        this.chosenTiles = [];

        this._registerEventListeners();
    }

    start() {
        this._transitionTo(States.ROLL);
    }

    _registerEventListeners() {
        Array.from(document.querySelectorAll('.tile')).forEach(tile => {
            tile.addEventListener('click', () => {
                if (this.state === States.CHOOSE) {
                    //choose tiles
                    //check for win
                    //go to States.ROLL
                }
            });
        });

        document.querySelector('.roll').addEventListener('click', () => {
            if (this.state === States.ROLL) {
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
                this.state = state;
                this.chosenTiles = [];

                this.appEl.classList.remove('state-choose');
                this.appEl.classList.remove('state-roll');
                this.appEl.classList.remove('state-lose');
                this.appEl.classList.remove('state-win');
                this.appEl.classList.add('state-choose');

                break;
            case States.ROLL:
                this.state = state;

                this.appEl.classList.remove('state-choose');
                this.appEl.classList.remove('state-roll');
                this.appEl.classList.remove('state-lose');
                this.appEl.classList.remove('state-win');
                this.appEl.classList.add('state-roll');

                break;
        }
    }
}

const shutTheBox = new App();

export default shutTheBox;
