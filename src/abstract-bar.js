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
        'display': 'flex',
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

  disabled(action = true) {
    if (action === true) {
      this._insertLock();
    } else {
      this._deleteLock();
    }
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

  _insertLock() {
    if (this._lock) {
      return;
    }

    this._lock = this._root
      .append('div')
      .classed('scola lock', true)
      .styles({
        'bottom': 0,
        'left': 0,
        'position': 'absolute',
        'right': 0,
        'top': 0
      });

    this._root
      .selectAll('button')
      .attr('disabled', 'disabled');
  }

  _deleteLock() {
    if (this._lock) {
      this._lock.remove();
      this._lock = null;
    }

    this._root
      .selectAll('button')
      .attr('disabled', null);
  }
}
