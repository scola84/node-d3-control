import GroupBar from './group-bar';
import 'd3-selection-multi';

export default class InlineBar extends GroupBar {
  constructor() {
    super();

    this._root
      .classed('inline', true)
      .styles({
        'border': '1px solid #007AFF',
        'border-radius': '0.3em',
        'color': '#007AFF',
        'display': 'flex',
        'height': '2em',
        'margin': '0.5em 0',
        'overflow': 'hidden'
      });
  }
}
