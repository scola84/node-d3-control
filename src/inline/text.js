import AbstractText from '../abstract-text';

export default class Text extends AbstractText {
  constructor() {
    super();

    this._root.styles({
      'align-items': 'stretch',
      'display': 'flex',
      'flex-grow': 1
    });

    this._button.styles({
      'font-size': '0.9em',
      'line-height': '2em',
      'padding': '0 0.5em',
      'width': '100%'
    });
  }
}
