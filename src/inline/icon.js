import AbstractIcon from '../abstract-icon';

export default class Icon extends AbstractIcon {
  constructor() {
    super();

    this._root.styles({
      'align-items': 'stretch',
      'display': 'flex',
      'flex-grow': 1
    });

    this._icon.styles({
      'padding': '0 0.5em',
      'width': '100%',
    });
  }
}
