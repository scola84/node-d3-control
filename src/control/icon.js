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
      'padding-left': 'inherit',
      'padding-right': 'inherit',
    });
  }

  circle(background = '#007AFF') {
    this._icon.styles({
      background,
      'border-radius': '1em',
      'color': '#FFF',
      'height': '1em',
      'width': '1em'
    });

    return this;
  }
}
