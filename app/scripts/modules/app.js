import States from './states.js'
import Die from './die.js'

class App {
    constructor() {
        this.state = null;

        this._registerEventListeners();
    }

    start() {
        this.state = States.ROLL;
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
                const dieValue1 = Die.roll();
                const dieValue2 = Die.roll();
                document.querySelector('.die--1').textContent = dieValue1;
                document.querySelector('.die--2').textContent = dieValue2;

                //check for loss
                //go to States.CHOOSE
            }
        });
    }
}

const shutTheBox = new App();

export default shutTheBox;
