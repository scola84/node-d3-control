import AbstractBar from './abstract-bar';
import 'd3-selection-multi';

export default class MainBar extends AbstractBar {
  constructor() {
    super();

    this._title = null;
    this._left = null;
    this._right = null;

    this._root
      .classed('main', true)
      .styles({
        'background': '#FAFAFA',
        'display': 'flex',
        'justify-content': 'space-between'
      });

    this._center = this._root
      .append('div')
      .classed('scola center', true)
      .styles({
        'display': 'flex',
        'flex': 1,
        'flex-direction': 'row',
        'justify-content': 'center',
        'order': 2,
        'overflow': 'hidden'
      });
  }

  center(element = null, action = true) {
    if (element === null) {
      return this._center;
    }

    if (action === true) {
      // element.center();
      this._center.node()
        .appendChild(element.root().node());
    } else if (action === false) {
      element.root().remove();
    }

    return this;
  }

  left(element = null, action = true) {
    if (!this._left) {
      this._sides();
    }

    if (element === null) {
      return this._left;
    }

    if (action === true) {
      element.left();
      this._left.node()
        .appendChild(element.root().node());
    } else if (action === false) {
      element.root().remove();
    }

    return this;
  }

  right(element = null, action = true) {
    if (!this._right) {
      this._sides();
    }

    if (element === null) {
      return this._right;
    }

    if (action === true) {
      element.right();
      this._right.node()
        .appendChild(element.root().node());
    } else if (action === false) {
      element.root().remove();
    }

    return this;
  }

  title(value = null) {
    if (value === null) {
      return this._title;
    }

    if (value === false) {
      return this._deleteTitle();
    }

    if (this._title) {
      return this._updateTitle(value);
    }

    return this._insertTitle(value);
  }

  _insertTitle(title) {
    this._title = this._center
      .append('div')
      .classed('scola title', true)
      .styles({
        'font-weight': 'bold',
        'line-height': '3em',
        'overflow': 'hidden',
        'text-align': 'center',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap'
      })
      .text(title);

    return this;
  }

  _updateTitle(title) {
    this._title.text(title);
    return this;
  }

  _deleteTitle() {
    if (this._title) {
      this._title.remove();
      this._title = null;
    }

    return this;
  }

  _sides() {
    this._left = this._root
      .append('div')
      .classed('scola left', true)
      .styles({
        'display': 'flex',
        'flex-basis': '30%',
        'flex-direction': 'row',
        'min-width': '30%',
        'order': 1
      });

    this._right = this._root
      .append('div')
      .classed('scola right', true)
      .styles({
        'display': 'flex',
        'flex-basis': '30%',
        'flex-direction': 'row-reverse',
        'min-width': '30%',
        'order': 3
      });
  }
}
