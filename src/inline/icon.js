import AbstractIcon from '../abstract-icon';
import 'd3-selection-multi';

export default class Icon extends AbstractIcon {
  constructor() {
    super();

    this._root.styles({
      'flex-grow': 1
    });

    this._icon.styles({
      'height': '100%',
      'padding': '0 0.5em',
      'width': '100%',
    });
  }
}
