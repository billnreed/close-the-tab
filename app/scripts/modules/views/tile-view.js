class TileView {
  constructor(selector) {
    this._el = document.querySelector(selector);
  }

  toggleSelected() {
    this._el.classList.toggle('is-selected');
  }

  markUsed() {
    this._el.classList.add('is-used');
  }
}

export default TileView;
