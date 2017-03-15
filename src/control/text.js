import AbstractText from '../abstract-text';

export default class Text extends AbstractText {
  constructor() {
    super();

    this._root.styles({
      'align-items': 'stretch',
      'display': 'flex',
      'flex-grow': 1,
      'padding': '0.5em 0.125em'
    });

    this._text.styles({
      'line-height': '2em',
      'overflow': 'hidden',
      'padding-left': 'inherit',
      'padding-right': 'inherit',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap'
    });
  }
}
