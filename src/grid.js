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
import getBreakpoint from './get-breakpoint';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
    this.handleLayoutChanged = this.handleLayoutChanged.bind(this);
  }

  handleLayoutChanged(e) {
    const { onLayout } = this.props;
    const { width } = e.nativeEvent.layout;
    const breakpoint = getBreakpoint(this.props.breakpoints, width);

    if (typeof onLayout === 'function') {
      onLayout(e);
    }

    this.setState({ breakpoint });
  }

  getChildContext() {
    const { breakpoint } = this.state;

    if (breakpoint) {
      return {
        grid: {
          breakpoint,
          breakpoints: this.props.breakpoints,
          columns: this.props.columns,
          gutter: this.props.gutters[breakpoint],
          gutters: this.props.gutters,
          maxContainerWidths: this.props.maxContainerWidths,
          maxContainerWidth: this.props.maxContainerWidths[breakpoint]
        }
      };
    }

    return { };
  }

  shouldComponentUpdate(props, state) {
    return (
      (this.props.breakpoints !== props.breakpoints) ||
      (this.props.children !== props.children) ||
      (this.props.columns !== props.columns) ||
      (this.props.gutters !== props.gutters) ||
      (this.props.maxContainerWidths !== props.maxContainerWidths) ||
      (this.state.breakpoint !== state.breakpoint)
    );
  }

  render() {
    const {
      breakpoints,
      children,
      columns,
      gutters,
      maxContainerWidths,
      onLayout,
      ...props
    } = this.props;

    return (
      <ReactNative.View onLayout={this.handleLayoutChanged} {...props}>
        { this.state.breakpoint ? children : null }
      </ReactNative.View>
    );
  }
}

Grid.displayName = 'Grid';

Grid.propTypes = {
  breakpoints: PropTypes.object,
  children: PropTypes.node,
  columns: PropTypes.number,
  gutters: PropTypes.object,
  maxContainerWidths: PropTypes.object,
  onLayout: PropTypes.func,
  style: PropTypes.any
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
  onLayout: undefined,
  style: {
    flex: 1
  }
};

Grid.childContextTypes = {
  grid: PropTypes.shape({
    breakpoint: PropTypes.string.isRequired,
    breakpoints: PropTypes.object.isRequired,
    columns: PropTypes.number.isRequired,
    gutter: PropTypes.number.isRequired,
    gutters: PropTypes.object.isRequired,
    maxContainerWidths: PropTypes.object.isRequired,
    maxContainerWidth: PropTypes.number
  })
};
