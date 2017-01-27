import AbstractBar from './abstract-bar';
import 'd3-selection-multi';

export default class GroupBar extends AbstractBar {
  constructor() {
    super();

    this._buttons = new Set();
    this._root.classed('group', true);
  }

  destroy() {
    this._buttons.forEach((button) => {
      button.destroy();
    });

    super.destroy();
  }

  append(value, action = true) {
    if (action === true) {
      this._buttons.add(value);
      this._root.node().appendChild(value.root().node());
    } else if (action === false) {
      this._buttons.delete(value);
      value.destroy();
    }
  }
}
