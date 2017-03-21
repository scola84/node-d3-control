import { select } from 'd3';

export default class Text {
  constructor() {
    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola text', true)
      .styles({
        'cursor': 'inherit',
        'overflow': 'hidden',
      });

    this._text = this._root
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

  order(value = null) {
    if (value === null) {
      return this._root.style('order');
    }

    this._root.style('order', value);
    return this;
  }

  tabindex(value = null) {
    if (value === null) {
      return this._text.attr('tabindex');
    }

    this._text.attr('tabindex', value);
    return this;
  }

  text(value = null) {
    if (value === null) {
      return this._text;
    }

    this._text.text(value);
    return this;
  }

  type(value = null) {
    if (value === null) {
      return this._text.attr('type');
    }

    this._text.attr('type', value);
    return this;
  }
}
