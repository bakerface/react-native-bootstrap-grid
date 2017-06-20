/**
 * Copyright (c) 2017 Chris Baker <mail.chris.baker@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

'use strict';

import ReactNative from 'react-native';

class Native {
  constructor(fn) {
    this._fn = fn;
    this._onDimensionsChanged = this._onDimensionsChanged.bind(this);
  }

  static get() {
    return ReactNative.Dimensions.get('window').width;
  }

  _onDimensionsChanged(dimensions) {
    this._fn(dimensions.window.width);
  }

  add() {
    ReactNative.Dimensions.addEventListener('change', this._onDimensionsChanged);
    return this;
  }

  remove() {
    ReactNative.Dimensions.removeEventListener('change', this._onDimensionsChanged);
    return this;
  }
}

class Web {
  constructor(fn) {
    this._fn = fn;
    this._onWindowResized = this._onWindowResized.bind(this);
  }

  static get() {
    return window.innerWidth;
  }

  _onWindowResized() {
    this._fn(window.innerWidth);
  }

  add() {
    window.addEventListener('resize', this._onWindowResized);
    return this;
  }

  remove() {
    window.removeEventListener('resize', this._onWindowResized);
    return this;
  }
}

export default class WidthProvider {
  static isNative() {
    return typeof ReactNative.Dimensions.addEventListener === 'function';
  }

  static getClass() {
    return WidthProvider.isNative() ? Native : Web;
  }

  static get() {
    return WidthProvider.getClass().get();
  }

  static addEventListener(fn) {
    const EventListener = WidthProvider.getClass();
    return new EventListener(fn).add();
  }
}
