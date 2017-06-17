import { select } from 'd3';

export default class AbstractIcon {
  constructor() {
    this._class = null;

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola icon', true)
      .styles({
        'cursor': 'inherit',
      });

    this._button = this._root
      .append('button')
      .attrs({
        'tabindex': -1,
        'type': 'button'
      })
      .styles({
        'background': 'none',
        'border': '1px solid transparent',
        'color': 'inherit',
        'cursor': 'inherit',
        'font-size': '2em',
        'margin': 0,
        'padding': 0
      });

    this._icon = this._button
      .append('span')
      .styles({
        'display': 'flex',
        'font-size': 'inherit',
        'position': 'relative'
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

  icon() {
    return this._button;
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

  color(value = null) {
    if (value === null) {
      return this._root.style('color');
    }

    this._root.style('color', value);
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
      return this._button.style('font-size');
    }

    this._button.style('font-size', value);
    return this;
  }

  tabindex(value = null) {
    if (value === null) {
      return this._button.attr('tabindex');
    }

    this._button.attr('tabindex', value);
    return this;
  }

  title(value = null) {
    if (value === null) {
      return this._button.attr('title');
    }

    this._button.attr('title', value);
    return this;
  }
}
