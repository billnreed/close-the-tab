import States from './states';

import ChooseModeState from './states/choose-mode-state';
import SetupState from './states/setup-state';
import RollState from './states/roll-state';
import EvaluateRollState from './states/evaluate-roll-state';
import ChooseState from './states/choose-state';
import CheckWinState from './states/check-win-state';
import ResetDiceState from './states/reset-dice-state';
import WinState from './states/win-state';
import LoseState from './states/lose-state';

const stateInstances = {};
stateInstances[States.CHOOSE_MODE] = (new ChooseModeState());
stateInstances[States.SETUP] = (new SetupState());
stateInstances[States.ROLL] = (new RollState());
stateInstances[States.EVALUATE_ROLL] = (new EvaluateRollState());
stateInstances[States.CHOOSE] = (new ChooseState());
stateInstances[States.CHECK_WIN] = (new CheckWinState());
stateInstances[States.RESET_DICE] = (new ResetDiceState());
stateInstances[States.WIN] = (new WinState());
stateInstances[States.LOSE] = (new LoseState());

function getInstance(state) {
  return stateInstances[state];
};

export default {getInstance: getInstance}
