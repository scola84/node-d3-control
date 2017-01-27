import { select } from 'd3-selection';

export default class AbstractButton {
  constructor() {
    this._elements = [];

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control button', true)
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

  _add(element) {
    this._elements.push(element);
    this._order();
  }

  _order() {
    this._elements.forEach((element) => {
      element.order(this._root.node().children.length + 1);
      this._root.node().appendChild(element.root().node());
    });
  }
}
