import { select } from 'd3-selection';

export default class AbstractIcon {
  constructor() {
    this._class = null;

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola icon', true)
      .styles({
        'cursor': 'pointer',
        'display': 'flex'
      });

    this._icon = this._root
      .append('button')
      .attrs({
        'tabindex': -1,
        'type': 'button'
      })
      .styles({
        'background': 'none',
        'border': 0,
        'color': 'inherit',
        'cursor': 'pointer',
        'font-size': '2em',
        'margin': 0,
        'padding': 0
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

  class(value = null) {
    if (value === null) {
      return this._icon.classed();
    }

    if (this._class) {
      this._icon.classed(this._class, false);
    }

    this._class = value;
    this._icon.classed(value, true);

    return this;
  }

  order(value = null) {
    if (value === null) {
      return this._root.style('order');
    }

    this._root.style('order', value);
    return this;
  }

  size(value = null) {
    if (value === null) {
      return this._icon.style('font-size');
    }

    this._icon.style('font-size', value);
    return this;
  }

  tabindex(value = null) {
    if (value === null) {
      return this._icon.attr('tabindex');
    }

    this._icon.attr('tabindex', value);
    return this;
  }
}
