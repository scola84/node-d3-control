import AbstractBar from './abstract-bar';

export default class ControlBar extends AbstractBar {
  constructor() {
    super();

    this._title = null;
    this._open = false;

    this._root
      .classed('main', true)
      .styles({
        'background': '#FAFAFA',
        'height': '3em'
      });

    this._top = this._root
      .append('div')
      .classed('scola top', true)
      .styles({
        'border-bottom': '1px solid #CCC',
        'display': 'flex',
        'flex-direction': 'row',
        'height': '3em'
      });

    this._left = this._top
      .append('div')
      .classed('scola left', true)
      .styles({
        'align-items': 'flex-end',
        'display': 'flex',
        'flex': 1,
        'flex-direction': 'row',
        'padding': '0.5em 0'
      });

    this._center = this._top
      .append('div')
      .classed('scola center', true)
      .styles({
        'align-items': 'flex-end',
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'center',
        'overflow': 'hidden',
        'padding': '0.5em 0',
        'max-width': '40%'
      });

    this._right = this._top
      .append('div')
      .classed('scola right', true)
      .styles({
        'align-items': 'flex-end',
        'display': 'flex',
        'flex': 1,
        'flex-direction': 'row-reverse',
        'padding': '0.5em 0'
      });

    this._bottom = this._root
      .append('div')
      .classed('scola bottom', true)
      .styles({
        'background': '#CCC',
        'display': 'none',
        'height': '3em',
        'justify-content': 'center',
        'padding': '0.5em 0'
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

  open(value = null) {
    if (value === null) {
      return this._open;
    }

    const oldHeight = parseFloat(this._root.style('height'));

    const newHeight = this._open === true ?
      oldHeight / 2 : oldHeight * 2;

    this._open = value;

    if (this._open === true) {
      this._bottom.style('display', 'flex');
    }

    return this._root
      .style('height', oldHeight + 'px')
      .transition()
      .style('height', newHeight + 'px')
      .on('end', () => {
        this._root.style('height', () => {
          return this._open === true ? null : '3em';
        });

        if (this._open === false) {
          this._bottom.style('display', 'none');
        }
      });
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
    this._bottom.append(() => element.root().node());
    return element;
  }

  _insertCenter(element) {
    this._center.append(() => element.root().node());
    return element.center();
  }

  _insertLeft(element) {
    this._left.append(() => element.root().node());
    return element.left();
  }

  _insertRight(element) {
    this._right.append(() => element.root().node());
    return element.right();
  }

  _deleteElement(element) {
    element.root().remove();
    return element;
  }
}
