document.querySelector('#open-the-tab-button').addEventListener('click', () => {
    window.open('close-the-tab.html', '_blank');
});

if (localStorage.didWin == 'true') {
    document.querySelector('#home').classList.add('is-celebrating')
    localStorage.didWin = 'false';
}
