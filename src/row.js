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

class Row extends React.PureComponent {
  getConfig(config) {
    const { breakpoint, breakpoints } = this.props.grid;
    return getConfig(breakpoints, breakpoint, config);
  }

  getBaseStyle() {
    return {
      flexDirection: 'row',
      flexWrap: 'wrap'
    };
  }

  getGutterStyle({ gutter }) {
    if (typeof gutter === 'undefined') {
      return [];
    }

    return {
      marginHorizontal: gutter / -2
    };
  }

  getContentJustification(justifyContent) {
    if (typeof justifyContent === 'undefined') {
      return [];
    }

    if (typeof justifyContent === 'string') {
      return {
        justifyContent: getFlex(justifyContent)
      };
    }

    return this.getContentJustification(this.getConfig(justifyContent));
  }

  getItemAlignment(alignItems) {
    if (typeof alignItems === 'undefined') {
      return [];
    }

    if (typeof alignItems === 'string') {
      return {
        alignItems: getFlex(alignItems)
      };
    }

    return this.getItemAlignment(this.getConfig(alignItems));
  }

  render() {
    const { alignItems, justifyContent, style, grid, ...props } = this.props;

    const styles = [].concat(
      this.getBaseStyle(),
      this.getGutterStyle(grid),
      this.getContentJustification(justifyContent),
      this.getItemAlignment(alignItems),
      style
    );

    return (
      <ReactNative.View style={styles} {...props}/>
    );
  }
}

Row.displayName = 'Row';

Row.propTypes = {
  grid: PropTypes.object.isRequired,
  alignItems: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  justifyContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  style: PropTypes.any
};

Row.defaultProps = {
  alignItems: undefined,
  justifyContent: undefined,
  style: []
};

export default withGrid(Row);
