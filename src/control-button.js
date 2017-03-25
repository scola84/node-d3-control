import AbstractButton from './abstract-button';
import Icon from './control/icon';
import Text from './control/text';

export default class ControlButton extends AbstractButton {
  constructor() {
    super();

    this._root
      .classed('main', true)
      .styles({
        'height': '2em',
        'overflow': 'hidden'
      });

    this._padding = this._root
      .append('div')
      .classed('scola padding', true)
      .styles({
        'order': 1,
        'width': '0.75em'
      });
  }

  bottom() {
    return this;
  }

  center() {
    this._root.styles({
      'display': 'inline-flex',
      'flex-direction': 'row'
    });

    this._padding.styles({
      'display': 'none'
    });

    return this;
  }

  left() {
    this._root.styles({
      'flex-direction': 'row'
    });

    return this;
  }

  right() {
    this._root.styles({
      'flex-direction': 'row-reverse'
    });

    return this;
  }

  icon(value = null) {
    const icon = new Icon();

    icon.class(value);
    this._add(icon);

    return icon;
  }

  text(value = null) {
    const text = new Text();

    text.text(value);
    this._add(text);

    return text;
  }
}
