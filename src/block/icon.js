import AbstractIcon from '../abstract-icon';

export default class Icon extends AbstractIcon {
  constructor() {
    super();

    this._root.styles({
      'height': '2em',
      'padding': '0 0.125em',
      'justify-content': 'center'
    });

    this._button.styles({
      'padding-left': 'inherit',
      'padding-right': 'inherit'
    });
  }
}
