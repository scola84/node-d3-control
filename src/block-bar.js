import AbstractBar from './abstract-bar';

export default class BlockBar extends AbstractBar {
  constructor() {
    super();

    this._root
      .classed('block', true)
      .styles({
        'flex-direction': 'row',
        'justify-content': 'space-around',
        'width': '100%'
      });
  }

  size(value = null) {
    if (value === null) {
      return this._root.style('width');
    }

    this._root.style('width', value);
    return this;
  }

  space(value = null) {
    if (value === null) {
      return this._root
        .style('justify-content')
        .replace('space-', '');
    }

    this._root.style('justify-content', 'space-' + value);
    return this;
  }
}
