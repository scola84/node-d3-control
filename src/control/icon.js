import AbstractIcon from '../abstract-icon';

export default class Icon extends AbstractIcon {
  constructor() {
    super();

    this._root.styles({
      'align-items': 'stretch',
      'display': 'flex',
      'padding': '0 0.125em'
    });

    this._button.styles({
      'padding-left': 'inherit',
      'padding-right': 'inherit',
    });
  }

  circle(background = '#007AFF') {
    this._root.styles({
      'color': '#FFF'
    });

    this._button.styles({
      background,
      'border-radius': '1em',
      'height': '1em',
      'width': '1em'
    });

    return this;
  }
}
