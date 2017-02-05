import AbstractBar from './abstract-bar';
import 'd3-selection-multi';

export default class InlineBar extends AbstractBar {
  constructor() {
    super();

    this._root
      .classed('inline', true)
      .styles({
        'align-items': 'stretch',
        'border': '1px solid #007AFF',
        'border-radius': '0.3em',
        'color': '#007AFF',
        'height': '2em',
        'margin': '0.5em 0',
        'overflow': 'hidden'
      });
  }
}
