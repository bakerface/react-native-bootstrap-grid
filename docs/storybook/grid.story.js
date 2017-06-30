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
import { storiesOf } from '@storybook/react';
import { StyleSheet, Text } from 'react-native';
import { Grid, Container, Row, Column } from '../../src';

const styles = StyleSheet.create({
  bigRow: {
    backgroundColor: 'rgba(86,61,124,.10)',
    borderColor: 'rgba(86,61,124,.05)',
    borderWidth: 1,
    height: 150,
    marginBottom: 25
  },
  column: {
    backgroundColor: 'rgba(86,61,124,.15)',
    borderColor: 'rgba(86,61,124,.2)',
    borderWidth: 1,
    paddingVertical: 12
  }
});

function BigRow(properties) {
  const { style, ...props } = properties;

  return (
    <Row style={[ styles.bigRow, style ]} {...props}/>
  );
}

function Col(properties) {
  const { children, style, ...props } = properties;

  return (
    <Column style={[ styles.column, style ]} {...props}>
      <Text>
        { children }
      </Text>
    </Column>
  );
}

storiesOf('Grid')
  .add('Equal-width', () => (
    <Grid>
      <Container>
        <Row>
          <Col span>1 of 2</Col>
          <Col span>2 of 2</Col>
        </Row>
        <Row>
          <Col span>1 of 3</Col>
          <Col span>2 of 3</Col>
          <Col span>3 of 3</Col>
        </Row>
      </Container>
    </Grid>
  ))
  .add('Setting one column width', () => (
    <Grid>
      <Container>
        <Row>
          <Col span>1 of 3</Col>
          <Col span={6}>2 of 3 (wider)</Col>
          <Col span>3 of 3</Col>
        </Row>
        <Row>
          <Col span>1 of 3</Col>
          <Col span={5}>2 of 3 (wider)</Col>
          <Col span>3 of 3</Col>
        </Row>
      </Container>
    </Grid>
  ))
  .add('Variable width content', () => (
    <Grid>
      <Container>
        <Row justifyContent={{ md: 'center' }}>
          <Col span={{ xs: true, lg: 2 }}>1 of 3</Col>
          <Col span={{ xs: 12, md: 'auto' }}>Variable width content</Col>
          <Col span={{ xs: true, lg: 2 }}>3 of 3</Col>
        </Row>
        <Row>
          <Col span>1 of 3</Col>
          <Col span={{ xs: 12, md: 'auto' }}>Variable width content</Col>
          <Col span={{ xs: true, lg: 2 }}>3 of 3</Col>
        </Row>
      </Container>
    </Grid>
  ))
  .add('All breakpoints', () => (
    <Grid>
      <Container>
        <Row>
          <Col span>col</Col>
          <Col span>col</Col>
          <Col span>col</Col>
          <Col span>col</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={4}>col-4</Col>
        </Row>
      </Container>
    </Grid>
  ))
  .add('Stacked to horizontal', () => (
    <Grid>
      <Container>
        <Row>
          <Col span={{ sm: 8 }}>col-sm-8</Col>
          <Col span={{ sm: 4 }}>col-sm-4</Col>
        </Row>
        <Row>
          <Col span={{ sm: true }}>col-sm-4</Col>
          <Col span={{ sm: true }}>col-sm-4</Col>
          <Col span={{ sm: true }}>col-sm-4</Col>
        </Row>
      </Container>
    </Grid>
  ))
  .add('Mix and match', () => (
    <Grid>
      <Container>
        <Row>
          <Col span={{ xs: true, md: 8 }}>.col .col-md-8</Col>
          <Col span={{ xs: 6, md: 4 }}>.col-6 .col-md-4</Col>
        </Row>
        <Row>
          <Col span={{ xs: 6, md: 4 }}>.col-6 .col-md-4</Col>
          <Col span={{ xs: 6, md: 4 }}>.col-6 .col-md-4</Col>
          <Col span={{ xs: 6, md: 4 }}>.col-6 .col-md-4</Col>
        </Row>
        <Row>
          <Col span={6}>.col-6</Col>
          <Col span={6}>.col-6</Col>
        </Row>
      </Container>
    </Grid>
  ))
  .add('Align items', () => (
    <Grid>
      <Container>
        <BigRow alignItems="start">
          <Col span>1 of 3</Col>
          <Col span>2 of 3</Col>
          <Col span>3 of 3</Col>
        </BigRow>
        <BigRow alignItems="center">
          <Col span>1 of 3</Col>
          <Col span>2 of 3</Col>
          <Col span>3 of 3</Col>
        </BigRow>
        <BigRow alignItems="end">
          <Col span>1 of 3</Col>
          <Col span>2 of 3</Col>
          <Col span>3 of 3</Col>
        </BigRow>
      </Container>
    </Grid>
  ))
  .add('Align self', () => (
    <Grid>
      <Container>
        <BigRow alignItems="start">
          <Col span alignSelf="start">1 of 3</Col>
          <Col span alignSelf="center">2 of 3</Col>
          <Col span alignSelf="end">3 of 3</Col>
        </BigRow>
      </Container>
    </Grid>
  ))
  .add('Justify content', () => (
    <Grid>
      <Container>
        <Row justifyContent="start">
          <Col span={4}>1 of 2</Col>
          <Col span={4}>2 of 2</Col>
        </Row>
        <Row justifyContent="center">
          <Col span={4}>1 of 2</Col>
          <Col span={4}>2 of 2</Col>
        </Row>
        <Row justifyContent="end">
          <Col span={4}>1 of 2</Col>
          <Col span={4}>2 of 2</Col>
        </Row>
        <Row justifyContent="space-around">
          <Col span={4}>1 of 2</Col>
          <Col span={4}>2 of 2</Col>
        </Row>
        <Row justifyContent="space-between">
          <Col span={4}>1 of 2</Col>
          <Col span={4}>2 of 2</Col>
        </Row>
      </Container>
    </Grid>
  ))
  .add('Hiding columns', () => (
    <Grid>
      <Container>
        <Row>
          <Col span={{ xs: true, sm: 0 }}>xs</Col>
          <Col span={{ xs: 0, sm: true, md: 0 }}>sm</Col>
          <Col span={{ xs: 0, md: true, lg: 0 }}>md</Col>
          <Col span={{ xs: 0, lg: true, xl: 0 }}>lg</Col>
          <Col span={{ xs: 0, xl: true }}>xl</Col>
        </Row>
      </Container>
    </Grid>
  ))
  .add('Fluid containers', () => (
    <Grid>
      <Container fluid>
        <Row>
          <Col span>1 of 2</Col>
          <Col span>2 of 2</Col>
        </Row>
      </Container>
    </Grid>
  ));
