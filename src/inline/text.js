import AbstractText from '../abstract-text';

export default class Text extends AbstractText {
  constructor() {
    super();

    this._text.styles({
      'font-size': '0.9em',
      'padding': '0 0.5em'
    });
  }
}
