import AbstractIcon from '../abstract-icon';
import 'd3-selection-multi';

export default class Icon extends AbstractIcon {
  constructor() {
    super();

    this._root.styles({
      'flex': 1
    });

    this._icon.styles({
      'flex': 1,
      'padding': '0 0.5em'
    });
  }
}
