import AbstractBar from './abstract-bar';

export default class ControlBar extends AbstractBar {
  constructor() {
    super();

    this._title = null;
    this._left = null;
    this._right = null;

    this._root
      .classed('main', true)
      .styles({
        'background': '#FAFAFA',
        'justify-content': 'space-between'
      });

    this._center = this._root
      .append('div')
      .classed('scola center', true)
      .styles({
        'display': 'flex',
        'flex-grow': 1,
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

    if (action === false) {
      return this._deleteElement(element);
    }

    return this._insertCenter(element);
  }

  left(element = null, action = true) {
    if (element === null) {
      return this._left;
    }

    if (action === false) {
      return this._deleteElement(element);
    }

    return this._insertLeft(element);
  }

  right(element = null, action = true) {
    if (element === null) {
      return this._right;
    }

    if (action === false) {
      return this._deleteElement(element);
    }

    return this._insertRight(element);
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

  _insertCenter(element) {
    this._center.node()
      .appendChild(element.root().node());

    element.center();
    return element;
  }

  _insertLeft(element) {
    if (!this._left) {
      this._sides();
    }

    this._left.node()
      .appendChild(element.root().node());

    element.left();
    return element;
  }

  _insertRight(element) {
    if (!this._right) {
      this._sides();
    }

    this._right.node()
      .appendChild(element.root().node());

    element.right();
    return element;
  }

  _deleteElement(element) {
    element.root().remove();
    return element;
  }

  _sides() {
    this._left = this._root
      .append('div')
      .remove()
      .classed('scola left', true)
      .styles({
        'display': 'flex',
        'flex-basis': '30%',
        'flex-direction': 'row',
        'min-width': '30%',
        'order': 1
      });

    this._root.node()
      .insertBefore(this._left.node(), this._center.node());

    this._right = this._root
      .append('div')
      .remove()
      .classed('scola right', true)
      .styles({
        'display': 'flex',
        'flex-basis': '30%',
        'flex-direction': 'row-reverse',
        'min-width': '30%',
        'order': 3
      });

    this._root.node().appendChild(this._right.node());
  }
}
