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
import ReactNative from 'react-native';
import PropTypes from 'prop-types';
import Context from './context';
import getBreakpoint from './get-breakpoint';
import withWidth from './with-width';

function sanitize(props = { }) {
  return {
    breakpoint: props.breakpoint,
    breakpoints: props.breakpoints,
    columns: props.columns,
    gutter: props.gutter,
    gutters: props.gutters,
    maxContainerWidth: props.maxContainerWidth,
    maxContainerWidths: props.maxContainerWidths
  };
}

class Grid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { };
    this.grid = new Context(sanitize(props));
  }

  componentWillReceiveProps(props) {
    const breakpoint = getBreakpoint(props.breakpoints, props.width);

    if (breakpoint !== this.state.breakpoint) {
      this.setState({ breakpoint });

      this.grid.publish({
        breakpoint,
        breakpoints: props.breakpoints,
        columns: props.columns,
        gutter: props.gutters[breakpoint],
        gutters: props.gutters,
        maxContainerWidth: props.maxContainerWidths[breakpoint],
        maxContainerWidths: props.maxContainerWidths
      });
    }
  }

  getChildContext() {
    return {
      grid: this.grid
    };
  }

  render() {
    const {
      breakpoints,
      children,
      columns,
      component,
      gutters,
      maxContainerWidths,
      width,
      ...props
    } = this.props;

    return React.createElement(component, props, width ? children : null);
  }
}

Grid.displayName = 'Grid';

Grid.propTypes = {
  breakpoints: PropTypes.object,
  children: PropTypes.node,
  columns: PropTypes.number,
  component: PropTypes.func,
  gutters: PropTypes.object,
  maxContainerWidths: PropTypes.object,
  width: PropTypes.number
};

Grid.defaultProps = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  children: null,
  columns: 12,
  component: ReactNative.View,
  gutters: {
    xs: 30,
    sm: 30,
    md: 30,
    lg: 30,
    xl: 30
  },
  maxContainerWidths: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140
  },
  width: undefined
};

Grid.childContextTypes = {
  grid: PropTypes.object.isRequired
};

export default withWidth(Grid);
