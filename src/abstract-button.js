import { select } from 'd3';
import { Observer } from '@scola/d3-model';

export default class AbstractButton extends Observer {
  constructor() {
    super();

    this._elements = [];
    this._value = null;

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control button', true)
      .styles({
        'display': 'flex'
      });

    this._bindRoot();
  }

  destroy() {
    this._unbindRoot();

    this._root.dispatch('destroy');
    this._root.remove();
    this._root = null;
  }

  root() {
    return this._root;
  }

  value(buttonValue = null) {
    if (buttonValue === null) {
      return this._value;
    }

    this._value = buttonValue;
    return this;
  }

  first() {}

  _bindRoot() {
    this._root.on('click.scola-control', () => this._click());
  }

  _unbindRoot() {
    this._root.on('click.scola-control', null);
  }

  _add(element) {
    this._elements.push(element);
    this._order();
  }

  _order() {
    this._elements.forEach((element) => {
      element.order(this._root.node().children.length + 1);
      this._root.append(() => element.root().node());
    });
  }

  _click() {
    if (this._model) {
      this._model.set(this._name, this._value);
    }
  }
}
