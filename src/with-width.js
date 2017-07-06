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

export default function withWidth(Component) {
  const name = (Component.displayName || Component.name || 'Component');

  class WithWidth extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = { };
      this.handleLayoutChanged = this.handleLayoutChanged.bind(this);
    }

    handleLayoutChanged(e) {
      if (this.props.onLayout) {
        this.props.onLayout(e);
      }

      this.setState({
        width: e.nativeEvent.layout.width
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onLayout={this.handleLayoutChanged}
          width={this.state.width}
          />
      );
    }
  }

  WithWidth.displayName = `WithWidth(${name})`;

  WithWidth.propTypes = {
    onLayout: PropTypes.func
  };

  WithWidth.defaultProps = {
    onLayout: undefined
  };

  return WithWidth;
}
