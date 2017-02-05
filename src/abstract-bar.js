import { select } from 'd3-selection';

export default class AbstractBar {
  constructor() {
    this._buttons = new Set();

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control bar', true)
      .styles({
        'display': 'flex'
      });
  }

  destroy() {
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

  _insertButton(button) {
    button.first(this._buttons.size === 0);
    this._buttons.add(button);

    this._root.node()
      .appendChild(button.root().node());

    return button;
  }

  _deleteButton(button) {
    this._buttons.delete(button);
    button.root().remove();

    return button;
  }
}
