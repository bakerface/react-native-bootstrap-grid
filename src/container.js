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
import withGrid from './with-grid';

class Container extends React.PureComponent {
  getBaseStyle() {
    return {
      width: '100%'
    };
  }

  getMaxWidthStyle({ maxContainerWidth }, fluid) {
    if (typeof maxContainerWidth === 'undefined' || fluid) {
      return [];
    }

    return {
      alignSelf: 'center',
      maxWidth: maxContainerWidth
    };
  }

  getGutterStyle({ gutter }) {
    if (typeof gutter === 'undefined') {
      return [];
    }

    return {
      paddingHorizontal: gutter / 2
    };
  }

  render() {
    const { children, component, fluid, style, grid, ...props } = this.props;

    const styles = [].concat(
      this.getBaseStyle(),
      this.getGutterStyle(grid),
      this.getMaxWidthStyle(grid, fluid),
      style
    );

    return React.createElement(component, { style: styles, ...props }, children);
  }
}

Container.displayName = 'Container';

Container.propTypes = {
  children: PropTypes.node,
  component: PropTypes.func,
  grid: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  style: PropTypes.any
};

Container.defaultProps = {
  children: undefined,
  component: ReactNative.View,
  fluid: undefined,
  style: []
};

export default withGrid(Container);
