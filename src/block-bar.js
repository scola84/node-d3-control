import AbstractBar from './abstract-bar';

export default class BlockBar extends AbstractBar {
  constructor() {
    super();

    this._root
      .classed('block', true)
      .styles({
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-around',
        'width': '100%'
      });
  }
}
