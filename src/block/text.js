import AbstractText from '../abstract-text';

export default class Text extends AbstractText {
  constructor() {
    super();

    this._root.styles({
      'justify-content': 'center',
      'height': '1em',
      'padding': '0 0.125em'
    });

    this._button.styles({
      'font-size': '0.7em',
      'padding-left': 'inherit',
      'padding-right': 'inherit'
    });
  }
}
