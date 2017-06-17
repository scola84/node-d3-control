import AbstractBar from './abstract-bar';

export default class InlineBar extends AbstractBar {
  constructor() {
    super();

    this._root
      .classed('inline', true)
      .styles({
        'align-items': 'stretch',
        'border': '1px solid #007AFF',
        'border-radius': '0.3em',
        'display': 'flex',
        'color': '#007AFF',
        'height': '2em',
        'overflow': 'hidden'
      });
  }
}
