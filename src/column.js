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
import getConfig from './get-config';
import getFlex from './get-flex';
import withGrid from './with-grid';

class Column extends React.PureComponent {
  getConfig(config) {
    const { breakpoint, breakpoints } = this.props.grid;
    return getConfig(breakpoints, breakpoint, config);
  }

  getBaseStyle() {
    return {
      flexDirection: 'column',
      minHeight: 1,
      position: 'relative'
    };
  }

  getSelfAlignment(alignSelf) {
    if (typeof alignSelf === 'undefined') {
      return [];
    }

    if (typeof alignSelf === 'string') {
      return {
        alignSelf: getFlex(alignSelf)
      };
    }

    return this.getSelfAlignment(this.getConfig(alignSelf));
  }

  getGutterStyle({ gutter }) {
    if (typeof gutter === 'undefined') {
      return [];
    }

    return {
      paddingHorizontal: gutter / 2
    };
  }

  getSpanStyle(grid, span) {
    if (span === false || span === 0) {
      return;
    }

    if (span === true) {
      return {
        flex: 1
      };
    }

    if (typeof span === 'undefined') {
      return {
        width: '100%'
      };
    }

    if (typeof span === 'string') {
      return null;
    }

    if (typeof span === 'number') {
      return {
        width: (100 * span / grid.columns) + '%'
      };
    }

    return this.getSpanStyle(grid, this.getConfig(span));
  }

  getOffsetStyle(grid, offset) {
    if (offset) {
      if (typeof offset === 'number') {
        return {
          marginLeft: (100 * offset / grid.columns) + '%'
        };
      }

      if (typeof offset === 'object') {
        return this.getOffsetStyle(grid, this.getConfig(offset));
      }
    }
  }

  render() {
    const {
      alignSelf,
      children,
      component,
      offset,
      style,
      span,
      grid,
      ...props
    } = this.props;

    const spanStyle = this.getSpanStyle(grid, span);

    if (typeof spanStyle === 'undefined') {
      return null;
    }

    const styles = [].concat(
      this.getBaseStyle(),
      this.getGutterStyle(grid),
      this.getSelfAlignment(alignSelf),
      this.getOffsetStyle(grid, offset),
      spanStyle,
      style
    );

    return React.createElement(component, { style: styles, ...props }, children);
  }
}

Column.displayName = 'Column';

Column.propTypes = {
  grid: PropTypes.object.isRequired,
  alignSelf: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  children: PropTypes.node,
  component: PropTypes.func,
  offset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  span: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  style: PropTypes.any
};

Column.defaultProps = {
  alignSelf: undefined,
  children: undefined,
  component: ReactNative.View,
  offset: undefined,
  span: undefined,
  style: []
};

export default withGrid(Column);
