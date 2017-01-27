import BlockBar from './src/block-bar';
import BlockButton from './src/block-button';
import InlineBar from './src/inline-bar';
import InlineButton from './src/inline-button';
import MainBar from './src/main-bar';
import MainButton from './src/main-button';

export function blockBar() {
  return new BlockBar();
}

export function blockButton() {
  return new BlockButton();
}

export function inlineBar() {
  return new InlineBar();
}

export function inlineButton() {
  return new InlineButton();
}

export function mainBar() {
  return new MainBar();
}

export function mainButton() {
  return new MainButton();
}
