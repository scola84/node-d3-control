import AbstractButton from './abstract-button';
import Icon from './inline/icon';
import Text from './inline/text';

export default class InlineButton extends AbstractButton {
  constructor() {
    super();

    this._first = null;

    this._root
      .classed('inline', true)
      .styles({
        'border-color': 'inherit',
        'color': 'inherit',
        'flex-grow': 1
      });

    this._border = this._root
      .append('div')
      .classed('scola border', true)
      .styles({
        'border-left': '1px solid',
        'border-left-color': 'inherit',
        'width': 0
      });

    this.first(false);
  }

  first(value = null) {
    if (value === null) {
      return this._first;
    }

    this._first = value;
    this._border.style('display', () => {
      return value === true ? 'none' : 'inline';
    });

    return this;
  }

  icon(value = null) {
    const icon = new Icon();

    icon
      .icon()
      .classed(value, true);

    this._add(icon);
    return icon;
  }

  text(value = null) {
    const text = new Text();

    text
      .text()
      .text(value);

    this._add(text);
    return text;
  }

  _set(setEvent) {
    if (setEvent.name !== this._name) {
      return;
    }

    const selected = setEvent.value === this._value;

    this._root
      .classed('selected', selected)
      .styles(() => {
        return selected === true ? {
          'background-color': '#007AFF',
          'color': '#FFF'
        } : {
          'background-color': 'inherit',
          'color': 'inherit'
        };
      });
  }
}
