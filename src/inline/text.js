import AbstractText from '../abstract-text';

export default class Text extends AbstractText {
  constructor() {
    super();

    this._root.styles({
      'flex-grow': 1
    });

    this._text.styles({
      'font-size': '0.9em',
      'height': '100%',
      'line-height': '2em',
      'padding': '0 0.5em',
      'width': '100%'
    });
  }
}
