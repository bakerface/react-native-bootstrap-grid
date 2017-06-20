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

export default class Column extends React.Component {
  getConfig(config) {
    const { breakpoint, breakpoints } = this.context.grid;
    return getConfig(breakpoints, breakpoint, config);
  }

  getBaseStyle() {
    return {
      flexDirection: 'column',
      minHeight: 1,
      position: 'relative'
    };
  }

  getDebugStyle(debug) {
    if (debug) {
      return {
        backgroundColor: '#eee',
        borderColor: '#bbb',
        borderWidth: 1
      };
    }

    return [];
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

  getGutterStyle() {
    const { gutter } = this.context.grid;

    if (typeof gutter === 'undefined') {
      return [];
    }

    return {
      paddingHorizontal: gutter / 2
    };
  }

  getWidthStyle(span) {
    if (span === false || span === 0) {
      return;
    }

    if (span === true) {
      return {
        flexGrow: 1
      };
    }

    if (typeof span === 'undefined') {
      return {
        width: '100%'
      };
    }

    if (typeof span === 'string') {
      return {
        width: span
      };
    }

    if (typeof span === 'number') {
      const { columns } = this.context.grid;

      return {
        width: (100 * span / columns) + '%'
      };
    }

    return this.getWidthStyle(this.getConfig(span));
  }

  render() {
    const { alignSelf, debug, style, span, ...props } = this.props;
    const widthStyle = this.getWidthStyle(span);

    if (typeof widthStyle === 'undefined') {
      return null;
    }

    const styles = [].concat(
      this.getBaseStyle(),
      this.getGutterStyle(),
      this.getDebugStyle(debug),
      this.getSelfAlignment(alignSelf),
      widthStyle,
      style
    );

    return (
      <ReactNative.View style={styles} {...props}/>
    );
  }
}

Column.displayName = 'Column';

Column.propTypes = {
  alignSelf: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  debug: PropTypes.bool,
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
  debug: undefined,
  span: undefined,
  style: []
};

Column.contextTypes = {
  grid: PropTypes.object.isRequired
};
