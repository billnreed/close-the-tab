import JsonStorage from '../lib/json-storage';

import Modes from '../common/modes';

// add choose mode radio button
const _parentEl = document.querySelector('#choose-mode');
const _modeChoiceInputEls = [];
Object.keys(Modes).forEach(modeKey => {
    const modeChoiceEl = _createModeChoiceEl(modeKey);
    _parentEl.appendChild(modeChoiceEl);
});
_modeChoiceInputEls[0].checked = true;

function _createModeChoiceEl(modeKey) {
    const displayName = modeKey.toLowerCase();
    const inputId = `mode-${displayName}`;
    const mode = Modes[modeKey];

    const containerEl = document.createElement('div');
    containerEl.classList.add('mode-choice-container');

    const inputEl = document.createElement('input');
    inputEl.setAttribute('id', inputId);
    inputEl.setAttribute('type', 'radio');
    inputEl.setAttribute('name', 'mode');
    inputEl.value = modeKey;
    _modeChoiceInputEls.push(inputEl);

    const labelEl = document.createElement('label');
    labelEl.setAttribute('for', inputId);
    labelEl.textContent = displayName;

    const descriptionEl = document.createElement('div');
    descriptionEl.textContent = `${mode.numberOfDice} dice with ${mode.numberOfFaces} faces using ${mode.numberOfTiles} tiles.`

    containerEl.appendChild(inputEl);
    containerEl.appendChild(labelEl);
    containerEl.appendChild(descriptionEl);

    return containerEl;
}

// open the the box button
document.querySelector('#open-the-tab-button').addEventListener('click', () => {
    const modeKey = _modeChoiceInputEls.filter(el => el.checked)[0].value;
    JsonStorage.set('mode', Modes[modeKey]);
    document.querySelector('#home').classList.remove('is-celebrating');
    window.open('close-the-tab.html', '_blank');
});

// celebration check
window.celebrate = function() {
    document.querySelector('#home').classList.add('is-celebrating');
}
