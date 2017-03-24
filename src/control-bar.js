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
        'flex-flow': 'wrap row',
      });

    this._top = this._root
      .append('div')
      .classed('scola top', true)
      .styles({
        'display': 'none',
        'flex-basis': '100%',
        'order': 1
      });

    this._left = this._root
      .append('div')
      .classed('scola left', true)
      .styles({
        'display': 'flex',
        'flex-direction': 'row',
        'order': 2,
        'padding': '0.5em 0'
      });

    this._center = this._root
      .append('div')
      .classed('scola center', true)
      .styles({
        'display': 'flex',
        'flex-grow': 1,
        'flex-direction': 'row',
        'justify-content': 'center',
        'order': 3,
        'overflow': 'hidden',
        'padding': '0.5em 0'
      });

    this._right = this._root
      .append('div')
      .classed('scola right', true)
      .styles({
        'display': 'flex',
        'flex-direction': 'row-reverse',
        'order': 4,
        'padding': '0.5em 0'
      });

    this._bottom = this._root
      .append('div')
      .classed('scola bottom', true)
      .styles({
        'background': '#CCC',
        'display': 'none',
        'flex-basis': '100%',
        'justify-content': 'center',
        'margin-top': '-1px',
        'order': 5,
        'padding': '0.125em 0'
      });
  }

  bottom(element = null, action = true) {
    if (element === null) {
      return this._bottom;
    }

    if (action === false) {
      return this._deleteElement(element);
    }

    return this._insertBottom(element);
  }

  top(element = null, action = true) {
    if (element === null) {
      return this._top;
    }

    if (action === false) {
      return this._deleteElement(element);
    }

    return this._insertTop(element);
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
        'line-height': '2em',
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

  _insertBottom(element) {
    this._bottom
      .style('display', 'flex')
      .append(() => element.root().node());

    element.bottom();
    return element;
  }

  _insertTop(element) {
    this._top
      .style('display', 'flex')
      .append(() => element.root().node());

    return element;
  }

  _insertCenter(element) {
    this._center.append(() => element.root().node());
    element.center();

    return element;
  }

  _insertLeft(element) {
    this._sides();
    this._left.append(() => element.root().node());
    element.left();

    return element;
  }

  _insertRight(element) {
    this._sides();
    this._right.append(() => element.root().node());
    element.right();

    return element;
  }

  _deleteElement(element) {
    element.root().remove();
    return element;
  }

  _sides() {
    this._left.styles({
      'flex-basis': '30%',
      'min-width': '30%',
    });

    this._right.styles({
      'flex-basis': '30%',
      'min-width': '30%',
    });
  }
}
