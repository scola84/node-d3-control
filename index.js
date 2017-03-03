import BlockBar from './src/block-bar';
import BlockButton from './src/block-button';
import ControlBar from './src/control-bar';
import ControlButton from './src/control-button';
import ControlInput from './src/control-input';
import InlineBar from './src/inline-bar';
import InlineButton from './src/inline-button';

function blockBar() {
  return new BlockBar();
}

function blockButton() {
  return new BlockButton();
}

function controlBar() {
  return new ControlBar();
}

function controlButton() {
  return new ControlButton();
}

function controlInput() {
  return new ControlInput();
}

function inlineBar() {
  return new InlineBar();
}

function inlineButton() {
  return new InlineButton();
}

export {
  blockBar,
  blockButton,
  controlBar,
  controlButton,
  controlInput,
  inlineBar,
  inlineButton
};
