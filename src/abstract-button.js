import { select } from 'd3';
import { Observer } from '@scola/d3-model';

export default class AbstractButton extends Observer {
  constructor() {
    super();

    this._elements = [];
    this._disabled = false;
    this._toggle = false;

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control button', true)
      .styles({
        'cursor': 'pointer',
        'display': 'flex'
      });

    this._bindRoot();
  }

  destroy() {
    super.destroy();
    this._unbindRoot();

    this._root.dispatch('destroy');
    this._root.remove();
    this._root = null;
  }

  root() {
    return this._root;
  }

  disabled(value = null) {
    if (value === null) {
      return this._disabled;
    }

    this._disabled = value;
    this._root.classed('disabled', value);

    return this;
  }

  toggle(value = null) {
    if (value === null) {
      return this._toggle;
    }

    this._toggle = value;
    this._root.classed('toggle', value);

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
    const cancel =
      this._disabled === true ||
      this._model === null;

    if (cancel === true) {
      return;
    }

    if (this._toggle === true) {
      this._model.set(this._name, !this._model.get(this._name));
      return;
    }

    this._model.set(this._name, this._value);
  }
}
