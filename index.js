import BlockBar from './src/block-bar';
import BlockButton from './src/block-button';
import ControlBar from './src/control-bar';
import ControlButton from './src/control-button';
import InlineBar from './src/inline-bar';
import InlineButton from './src/inline-button';

export function blockBar() {
  return new BlockBar();
}

export function blockButton() {
  return new BlockButton();
}

export function controlBar() {
  return new ControlBar();
}

export function controlButton() {
  return new ControlButton();
}

export function inlineBar() {
  return new InlineBar();
}

export function inlineButton() {
  return new InlineButton();
}
