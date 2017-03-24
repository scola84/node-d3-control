import { event, select } from 'd3';
import { Observer } from '@scola/d3-model';

export default class ControlInput extends Observer {
  constructor() {
    super();

    this._lines = 1;
    this._resizer = null;

    this._root = select('body')
      .append('div')
      .remove()
      .classed('scola control input', true)
      .styles({
        'display': 'flex',
        'flex': 1,
        'flex-direction': 'column',
        'overflow': 'hidden',
        'padding': '0.5em',
        'position': 'relative'
      });

    this._shadow = this._root
      .append('div')
      .styles({
        'bottom': '100%',
        'line-height': '1.5em',
        'padding': '0.15em 0.35em',
        'position': 'absolute'
      })
      .html('&nbsp;');

    this._input = this._root
      .append('textarea')
      .attrs({
        'cols': 1,
        'rows': 1
      })
      .styles({
        'background': '#FFF',
        'border': '0',
        'border-radius': '0.5em',
        'color': 'inherit',
        'line-height': '1.5em',
        'margin': 0,
        'overflow-x': 'hidden',
        'overflow-y': 'auto',
        'padding': '0.125em 0.35em',
        'resize': 'none',
        'width': '100%',
      });

    this._bindInput();
    this._maxHeight();
  }

  destroy() {
    this._unbindInput();
    this._unbindResizer();
  }

  root() {
    return this._root;
  }

  input() {
    return this._input;
  }

  lines(value = null) {
    if (value === null) {
      return this._lines;
    }

    this._lines = value;
    this._maxHeight();

    return this;
  }

  resizer(value = null) {
    if (value === null) {
      return this._resizer;
    }

    this._resizer = value;
    this._bindResizer();

    return this;
  }

  placeholder(value = null) {
    if (value === null) {
      return this._input.attr('placeholder');
    }

    this._input.attr('placeholder', value);
    return this;
  }

  tabindex(value = null) {
    if (value === null) {
      return this._input.attr('tabindex');
    }

    this._input.attr('tabindex', value);
    return this;
  }

  type(value = null) {
    if (value === null) {
      return this._input.attr('type');
    }

    this._input.attr('type', value);
    return this;
  }

  bottom() {}

  left() {}

  center() {}

  right() {}

  _bindInput() {
    this._input.on('input.scola-control', () => this._change());
    this._input.on('keydown.scola-control', () => this._key(event));
    this._input.on('keyup.scola-control', () => this._key(event));
  }

  _unbindInput() {
    this._input.on('input.scola-control', null);
    this._input.on('keydown.scola-control', null);
    this._input.on('keyup.scola-control', null);
  }

  _bindResizer() {
    if (this._resizer) {
      this._resizer.root().on('resize.scola-control', () => {
        this._height();
      });
    }
  }

  _unbindResizer() {
    if (this._resizer) {
      this._resizer.root().on('resize.scola-control', null);
    }
  }

  _change() {
    if (this._model) {
      const value = this._input.property('value');
      this._model.set(this._name, value);
    }
  }

  _key(keyEvent) {
    // Adapted from https://github.com/jaz303/jquery-grab-bag/blob/master/javascripts/jquery.autogrow-textarea.js

    if (keyEvent.keyCode === 13) {
      if (this._lines === 1 || keyEvent.ctrlKey === true) {
        keyEvent.preventDefault();
        return;
      }
    }

    const width = parseFloat(this._input.style('width'));
    let value = this._input.property('value');

    value = value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n$/, '<br/>&nbsp;')
      .replace(/\n/g, '<br/>');

    value += keyEvent.type === 'keydown' && keyEvent.keyCode === 13 ?
      '<br/>&nbsp;' : '..';

    this._shadow.style('width', width + 'px').html(value);
    this._height();
  }

  _set(setEvent) {
    if (setEvent.name !== this._name) {
      return;
    }

    const value = this._format(setEvent.value);
    this._input.property('value', value);
    this._key({});
  }

  _height() {
    const height = parseFloat(this._shadow.style('height'));
    this._input.style('height', height + 'px');
  }

  _maxHeight() {
    const height = ((this._lines * 1.5) + 0.4);
    const wrap = this._lines === 1 ? 'nowrap' : 'normal';

    this._input.styles({
      'max-height': height + 'em',
      'white-space': wrap
    });
  }
}
