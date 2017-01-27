import AbstractButton from './abstract-button';

export default class GroupButton extends AbstractButton {
  constructor() {
    super();

    this._root.classed('group', true);

    this._name = null;
    this._value = null;
    this._model = null;

    this._handleSet = (e) => this._set(e);

    this._bindRoot();
  }

  destroy() {
    this._unbindRoot();
    this._unbindModel();

    super.destroy();
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

  _bindRoot() {
    this._root.on('click.scola-control', () => this._handleClick());
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

  _handleClick() {
    this._model.set(this._name, this._value);
  }

  _set() {}
}
