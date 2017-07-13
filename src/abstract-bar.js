import { select } from 'd3';

export default class AbstractBar {
  constructor() {
    this._buttons = new Set();
    this._gesture = null;

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control bar', true)
      .styles({
        'position': 'relative'
      });

    this._bindRoot();
  }

  destroy() {
    this._unbindRoot();

    this._buttons.forEach((button) => {
      button.destroy();
    });

    this._root.dispatch('destroy');
    this._root.remove();
    this._root = null;
  }

  root() {
    return this._root;
  }

  append(button, action = true) {
    if (action === false) {
      return this._deleteButton(button);
    }

    return this._insertButton(button);
  }

  _bindRoot() {
    this._gesture = this._root
      .gesture()
      .on('panstart', (e) => e.stopPropagation())
      .on('panright', (e) => e.stopPropagation())
      .on('panleft', (e) => e.stopPropagation())
      .on('panend', (e) => e.stopPropagation())
      .on('swiperight', (e) => e.stopPropagation())
      .on('swipeleft', (e) => e.stopPropagation())
      .on('tap', (e) => e.stopPropagation());
  }

  _unbindRoot() {
    if (this._gesture) {
      this._gesture.destroy();
      this._gesture = null;
    }
  }

  _insertButton(button) {
    button.first(this._buttons.size === 0);

    this._buttons.add(button);
    this._root.append(() => button.root().node());

    return button;
  }

  _deleteButton(button) {
    this._buttons.delete(button);
    button.root().remove();

    return button;
  }
}
