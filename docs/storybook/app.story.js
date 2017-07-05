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
import { storiesOf } from '@storybook/react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Grid, Container, Row, Column } from '../../src';

const styles = StyleSheet.create({
  grid: {
    flex: 1
  },
  navBar: {
    height: Platform.select({ ios: 15 })
  },
  header: {
    paddingVertical: 5
  },
  content: {
    flex: 1,
    paddingVertical: 5
  },
  scrollView: {
    flexGrow: 1
  },
  footer: {
    paddingVertical: 5
  },
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginVertical: 2
  },
  title: {
    backgroundColor: '#607D8B'
  },
  banner: {
    backgroundColor: '#00BCD4'
  },
  card: {
    backgroundColor: '#8BC34A',
    minHeight: 180
  },
  navLink: {
    backgroundColor: '#2196F3'
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});

function Navbar({ children, style, ...props }) {
  return (
    <Column span={{ xs: 12, sm: 0 }} {...props}>
      <View style={[].concat(styles.navBar, style)}>
        { children }
      </View>
    </Column>
  );
}

Navbar.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any
};

Navbar.defaultProps = {
  children: null,
  style: []
};

function Block({ children, style, ...props }) {
  return (
    <Column {...props}>
      <View style={[].concat(styles.block, style)}>
        <Text style={styles.text}>
          { children }
        </Text>
      </View>
    </Column>
  );
}

Block.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any
};

Block.defaultProps = {
  children: null,
  style: []
};

function Title({ style, ...props }) {
  return (
    <Block
      span
      style={[].concat(styles.title, style)}
      {...props}
      />
  );
}

Title.propTypes = {
  style: PropTypes.any
};

Title.defaultProps = {
  style: []
};

function Banner({ style, ...props }) {
  return (
    <Block
      span={{ xs: 0, md: 12 }}
      style={[].concat(styles.banner, style)}
      {...props}
      />
  );
}

Banner.propTypes = {
  style: PropTypes.any
};

Banner.defaultProps = {
  style: []
};

function NavLink({ style, ...props }) {
  return (
    <Block
      span="auto"
      style={[].concat(styles.navLink, style)}
      {...props}
      />
  );
}

NavLink.propTypes = {
  style: PropTypes.any
};

NavLink.defaultProps = {
  style: []
};

function Card({ style, ...props }) {
  return (
    <Block
      span={{ xs: 6, md: 4, xl: 3 }}
      style={[].concat(styles.card, style)}
      {...props}
      />
  );
}

Card.propTypes = {
  style: PropTypes.any
};

Card.defaultProps = {
  style: []
};

class App extends React.Component {
  render() {
    return (
      <Grid style={styles.grid}>
        <Container fluid style={styles.header}>
          <Row>
            <Navbar/>
            <NavLink>Back</NavLink>
            <Title>TITLE</Title>
            <NavLink>Search</NavLink>
          </Row>
          <Row>
            <Banner>This is a responsive banner</Banner>
          </Row>
        </Container>
        <Container style={styles.content}>
          <ScrollView style={styles.scrollView}>
            <Row>
              <Card>Card 1</Card>
              <Card>Card 2</Card>
              <Card>Card 3</Card>
              <Card>Card 4</Card>
              <Card>Card 5</Card>
              <Card>Card 6</Card>
              <Card>Card 7</Card>
              <Card>Card 8</Card>
              <Card>Card 9</Card>
              <Card>Card 10</Card>
              <Card>Card 11</Card>
              <Card>Card 12</Card>
              <Card>Card 13</Card>
              <Card>Card 14</Card>
              <Card>Card 15</Card>
              <Card>Card 16</Card>
              <Card>Card 17</Card>
              <Card>Card 18</Card>
              <Card>Card 19</Card>
              <Card>Card 20</Card>
            </Row>
          </ScrollView>
        </Container>
        <Container fluid style={styles.footer}>
          <Row justifyContent="space-around">
            <NavLink>Home</NavLink>
            <NavLink>Favorites</NavLink>
            <NavLink>Profile</NavLink>
          </Row>
        </Container>
      </Grid>
    );
  }
}

storiesOf('Examples')
  .add('App', () => <App/>);
