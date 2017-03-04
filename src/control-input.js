import { event, select } from 'd3';
import { Observer } from '@scola/d3-model';

export default class ControlInput extends Observer {
  constructor() {
    super();

    this._lines = 1;

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
        'border': '1px solid #EEE',
        'bottom': '100%',
        'line-height': '1.5em',
        'padding': '0.2em 0.35em',
        'position': 'absolute'
      });

    this._input = this._root
      .append('textarea')
      .styles({
        'background': '#FFF',
        'border': '1px solid #EEE',
        'border-radius': '0.5em',
        'color': 'inherit',
        'line-height': '1.5em',
        'margin': 0,
        'height': '2em',
        'overflow-x': 'hidden',
        'overflow-y': 'auto',
        'padding': '0.2em 0.35em',
        'resize': 'none',
        'width': '100%',
      });

    this._bindInput();
    this._height();
  }

  destroy() {
    this._unbindInput();
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
    this._height();

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

  _height() {
    const height = ((this._lines * 1.5) + 0.4);
    const wrap = this._lines === 1 ? 'nowrap' : 'normal';

    this._input.styles({
      'max-height': height + 'em',
      'white-space': wrap
    });
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

    const height = parseFloat(this._shadow.style('height'));

    this._input.style('height', height + 'px');
  }

  _set(setEvent) {
    if (setEvent.name !== this._name) {
      return;
    }

    const value = this._format(setEvent.value);
    this._input.property('value', value);
  }
}
