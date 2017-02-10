import { select } from 'd3';

export default class AbstractButton {
  constructor() {
    this._elements = [];
    this._name = null;
    this._value = null;
    this._model = null;

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control button', true)
      .styles({
        'display': 'flex'
      });

    this._handleSet = (e) => this._set(e);
    this._bindRoot();
  }

  destroy() {
    this._unbindRoot();
    this._unbindModel();

    this._root.dispatch('destroy');
    this._root.remove();
    this._root = null;
  }

  root() {
    return this._root;
  }

  name(value = null) {
    if (value === null) {
      return this._name;
    }

    this._name = value;
    return this;
  }

  value(buttonValue = null) {
    if (buttonValue === null) {
      return this._value;
    }

    this._value = buttonValue;
    return this;
  }

  model(value = null) {
    if (value === null) {
      return this._model;
    }

    this._model = value;
    this._bindModel();

    this._set({
      name: this._name,
      scope: 'model',
      value: value.get(this._name)
    });

    return this;
  }

  first() {}

  _bindRoot() {
    this._root.on('click.scola-control', () => this._click());
  }

  _unbindRoot() {
    this._root.on('click.scola-control', null);
  }

  _bindModel() {
    if (this._model) {
      this._model.setMaxListeners(this._model.getMaxListeners() + 1);
      this._model.addListener('set', this._handleSet);
    }
  }

  _unbindModel() {
    if (this._model) {
      this._model.setMaxListeners(this._model.getMaxListeners() - 1);
      this._model.removeListener('set', this._handleSet);
    }
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

  _click() {
    if (this._model) {
      this._model.set(this._name, this._value);
    }
  }

  _set() {}
}
