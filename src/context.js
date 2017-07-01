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

function getPropsLessChildren({ children, ...props }) {
  return props;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  const count = keysA.length;

  if (keysB.length !== count) {
    return false;
  }

  for (let i = 0; i < count; i++) {
    const key = keysA[i];

    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

export default class Context {
  constructor(props) {
    this.listeners = [];
    this.props = getPropsLessChildren(props);
  }

  publish(properties) {
    const props = getPropsLessChildren(properties);

    if (!isEqual(this.props, props)) {
      this.listeners.forEach(listener => listener(props));
      this.props = props;
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);

    return {
      remove: this.unsubscribe.bind(this, listener)
    };
  }

  unsubscribe(listener) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }
}
