import AbstractButton from './abstract-button';
import Icon from './block/icon';
import Text from './block/text';

export default class BlockButton extends AbstractButton {
  constructor() {
    super();

    this._root
      .classed('block', true)
      .styles({
        'flex-direction': 'column'
      });
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
          'color': '#007AFF'
        } : {
          'color': 'inherit'
        };
      });
  }
}
