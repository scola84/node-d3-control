import { select } from 'd3-selection';

export default class AbstractBar {
  constructor() {
    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control bar', true)
      .styles({
        'display': 'flex'
      });
  }

  destroy() {
    this._root.dispatch('destroy');
    this._root.remove();
    this._root = null;
  }

  root() {
    return this._root;
  }
}
