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

export default function withGrid(Component) {
  const name = (Component.displayName || Component.name || 'Component');

  class WithGrid extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        grid: context.grid.props
      };

      this.onGridUpdated = this.onGridUpdated.bind(this);
    }

    componentDidMount() {
      this.context.grid.subscribe(this.onGridUpdated);
    }

    componentWillUnmount() {
      this.context.grid.unsubscribe(this.onGridUpdated);
    }

    onGridUpdated(grid) {
      this.setState({ grid });
    }

    render() {
      return (
        <Component grid={this.state.grid} {...this.props}/>
      );
    }
  }

  WithGrid.displayName = `WithGrid(${name})`;

  WithGrid.contextTypes = {
    grid: PropTypes.object.isRequired
  };

  return WithGrid;
}
