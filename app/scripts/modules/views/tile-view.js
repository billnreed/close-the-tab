class TileView {
  constructor(selector) {
    this._el = document.querySelector(selector);
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

  registerClickListener(callback, context) {
    this._el.addEventListener('click', callback.bind(context));
  }
}

export default TileView;
