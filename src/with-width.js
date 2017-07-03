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

import React from 'react';
import PropTypes from 'prop-types';
import ReactNative from 'react-native';

export default function withWidth(Component) {
  const name = (Component.displayName || Component.name || 'Component');

  class WithWidth extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = { };
      this.handleLayoutChanged = this.handleLayoutChanged.bind(this);
    }

    handleLayoutChanged(e) {
      const { width } = e.nativeEvent.layout;
      this.setState({ width });
    }

    render() {
      const { style, ...props } = this.props;

      return (
        <ReactNative.View style={style} onLayout={this.handleLayoutChanged}>
          <Component style={{ flex: 1 }} width={this.state.width} {...props}/>
        </ReactNative.View>
      );
    }
  }

  WithWidth.displayName = `WithWidth(${name})`;

  WithWidth.propTypes = {
    style: PropTypes.any
  };

  WithWidth.defaultProps = {
    style: undefined
  };

  return WithWidth;
}
