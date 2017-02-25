import AbstractIcon from '../abstract-icon';

export default class Icon extends AbstractIcon {
  constructor() {
    super();

    this._root.styles({
      'align-items': 'stretch',
      'display': 'flex',
      'padding': '0.5em 0.125em'
    });

    this._icon.styles({
      'padding-left':'inherit',
      'padding-right':'inherit',
    });
  }
}
