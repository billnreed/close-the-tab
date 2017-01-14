import JsonStorage from '../lib/json-storage';

document.querySelector('#open-the-tab-button').addEventListener('click', () => {
    window.open('close-the-tab.html', '_blank');
});

if (JsonStorage.get('didWin')) {
    document.querySelector('#home').classList.add('is-celebrating')
    JsonStorage.set('didWin', false);
}
