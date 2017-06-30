# react-native-bootstrap-grid
[![npm version](https://badge.fury.io/js/react-native-bootstrap-grid.svg)](http://badge.fury.io/js/react-native-bootstrap-grid)
[![downloads](http://img.shields.io/npm/dm/react-native-bootstrap-grid.svg)](https://www.npmjs.com/package/react-native-bootstrap-grid)

This package is used to provide a Grid component to React Native developers who desire a Bootstrap-like grid system. For an example application and demonstrations taken from Bootstrap's website, use `npm run storybook` and open a web browser to http://localhost:9001.

The Grid component defaults to match Bootstrap's settings, but can be customized to handle any situation. Below are the available properties and their default values. Feel free to adjust the numeric values, or even create your own unique breakpoint names (such as `phonePortrait` and `phoneLandscape`) for your application. If you choose to rename the breakpoints, you must create similarly named `gutters` and `maxContainerWidths`.

**breakpoints**: *PropTypes.object*

``` javascript
{
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}
```

**columns**: *PropTypes.number*

``` javascript
12
```

**gutters**: *PropTypes.object*

``` javascript
{
  xs: 30,
  sm: 30,
  md: 30,
  lg: 30,
  xl: 30
}
```

**maxContainerWidths**: *PropTypes.object*

``` javascript
{
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140
}
```
