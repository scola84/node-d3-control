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

  button() {
    return this._button;
  }

  icon() {
    return this._icon;
  }
}
