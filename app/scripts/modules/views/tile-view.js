class TileView {
  constructor(tileValue) {
    this._el = document.createElement('div');
    this._el.classList.add('tile', 'centered-group__item');
    this._el.setAttribute('data-number', tileValue);
    this._el.textContent = tileValue;

    this._parentEl = document.querySelector('.tile-group');
    this._parentEl.appendChild(this._el);
  }

  toggleSelected() {
    this._el.classList.toggle('is-selected');
  }

  markNotSelected() {
    this._el.classList.remove('is-selected');
  }

  markUsed() {
    this._el.classList.add('is-used');
  }

  markActive() {
    this._el.classList.add('is-active');
  }

  markNotActive() {
    this._el.classList.remove('is-active');
  }

  registerClickListener(callback) {
    this._el.addEventListener('click', callback);
  }

  destroy() {
    this._parentEl.removeChild(this._el);
  }
}

export default TileView;
