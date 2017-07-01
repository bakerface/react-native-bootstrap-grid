"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}function makeEmptyFunction(e){return function(){return e}}function invariant(e,t,n,r,i,o,a,u){if(validateFormat(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,u],l=0;(s=new Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}function checkPropTypes(e,t,n,r,i){for(var o in e)if(e.hasOwnProperty(o)){var a;try{invariant$1("function"==typeof e[o],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",r||"React class",n,o),a=e[o](t,o,r,n,null,ReactPropTypesSecret$1)}catch(e){a=e}if(warning$1(!a||a instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,o,void 0===a?"undefined":_typeof(a)),a instanceof Error&&!(a.message in loggedTypeFailures)){loggedTypeFailures[a.message]=!0;var u=i?i():"";warning$1(!1,"Failed %s type: %s%s",n,a.message,null!=u?u:"")}}}function getBreakpoint(e,t){var n=void 0,r=0;for(var i in e)if(hasOwnProperty.call(e,i)){var o=e[i];t>=o&&o>=r&&(n=i,r=o)}return n}function getPropsLessChildren(e){e.children;return objectWithoutProperties(e,["children"])}function isEqual(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var a=n[o];if(e[a]!==t[a])return!1}return!0}function withGrid(e){var t=e.displayName||e.name||"Component",n=function(t){function n(e,t){classCallCheck(this,n);var r=possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return r.state={grid:t.grid.props},r.onGridUpdated=r.onGridUpdated.bind(r),r}return inherits(n,t),createClass(n,[{key:"componentDidMount",value:function(){this.context.grid.subscribe(this.onGridUpdated)}},{key:"componentWillUnmount",value:function(){this.context.grid.unsubscribe(this.onGridUpdated)}},{key:"onGridUpdated",value:function(e){this.setState({grid:e})}},{key:"render",value:function(){return React.createElement(e,_extends({grid:this.state.grid},this.props))}}]),n}(React.Component);return n.displayName="WithGrid("+t+")",n.contextTypes={grid:index.object.isRequired},n}function getPreviousBreakpoint(e,t){return getBreakpoint(e,e[t]-1)}function getConfig(e,t,n){for(;t&&!(t in n);)t=getPreviousBreakpoint(e,t);return n[t]}function getFlex(e){return"start"===e||"end"===e?"flex-"+e:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),ReactNative=_interopDefault(require("react-native")),emptyFunction=function(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(e){return e};var emptyFunction_1=emptyFunction,validateFormat=function(e){};validateFormat=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")};var invariant_1=invariant,warning=emptyFunction_1;!function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=0,o="Warning: "+e.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console&&console.error(o);try{throw new Error(o)}catch(e){}};warning=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,i=Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];e.apply(void 0,[n].concat(i))}}}();var warning_1=warning,ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},objectWithoutProperties=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},invariant$1=invariant_1,warning$1=warning_1,ReactPropTypesSecret$1=ReactPropTypesSecret_1,loggedTypeFailures={},checkPropTypes_1=checkPropTypes,factoryWithTypeCheckers=function(e,t){function n(e){var t=e&&(d&&e[d]||e[y]);if("function"==typeof t)return t}function r(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function i(e){this.message=e,this.stack=""}function o(e){function n(n,a,u,s,c,l,p){if(s=s||h,l=l||u,p!==ReactPropTypesSecret_1)if(t)invariant_1(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("undefined"!=typeof console){var f=s+":"+u;!r[f]&&o<3&&(warning_1(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",l,s),r[f]=!0,o++)}return null==a[u]?n?new i(null===a[u]?"The "+c+" `"+l+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+c+" `"+l+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(a,u,s,c,l)}var r={},o=0,a=n.bind(null,!1);return a.isRequired=n.bind(null,!0),a}function a(e){return o(function(t,n,r,o,a,u){var s=t[n];return c(s)!==e?new i("Invalid "+o+" `"+a+"` of type `"+l(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function u(t){switch(void 0===t?"undefined":_typeof(t)){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(u);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!u(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!u(a[1]))return!1}return!0;default:return!1}}function s(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function c(e){var t=void 0===e?"undefined":_typeof(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":s(t,e)?"symbol":t}function l(e){if(void 0===e||null===e)return""+e;var t=c(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function p(e){var t=l(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function f(e){return e.constructor&&e.constructor.name?e.constructor.name:h}var d="function"==typeof Symbol&&Symbol.iterator,y="@@iterator",h="<<anonymous>>",g={array:a("array"),bool:a("boolean"),func:a("function"),number:a("number"),object:a("object"),string:a("string"),symbol:a("symbol"),any:o(emptyFunction_1.thatReturnsNull),arrayOf:function(e){return o(function(t,n,r,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u))return new i("Invalid "+o+" `"+a+"` of type `"+c(u)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<u.length;s++){var l=e(u,s,r,o,a+"["+s+"]",ReactPropTypesSecret_1);if(l instanceof Error)return l}return null})},element:function(){return o(function(t,n,r,o,a){var u=t[n];return e(u)?null:new i("Invalid "+o+" `"+a+"` of type `"+c(u)+"` supplied to `"+r+"`, expected a single ReactElement.")})}(),instanceOf:function(e){return o(function(t,n,r,o,a){if(!(t[n]instanceof e)){var u=e.name||h;return new i("Invalid "+o+" `"+a+"` of type `"+f(t[n])+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null})},node:function(){return o(function(e,t,n,r,o){return u(e[t])?null:new i("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})}(),objectOf:function(e){return o(function(t,n,r,o,a){if("function"!=typeof e)return new i("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=c(u);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var p=e(u,l,r,o,a+"."+l,ReactPropTypesSecret_1);if(p instanceof Error)return p}return null})},oneOf:function(e){return Array.isArray(e)?o(function(t,n,o,a,u){for(var s=t[n],c=0;c<e.length;c++)if(r(s,e[c]))return null;return new i("Invalid "+a+" `"+u+"` of value `"+s+"` supplied to `"+o+"`, expected one of "+JSON.stringify(e)+".")}):(warning_1(!1,"Invalid argument supplied to oneOf, expected an instance of array."),emptyFunction_1.thatReturnsNull)},oneOfType:function(e){if(!Array.isArray(e))return warning_1(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),emptyFunction_1.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return warning_1(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",p(n),t),emptyFunction_1.thatReturnsNull}return o(function(t,n,r,o,a){for(var u=0;u<e.length;u++)if(null==(0,e[u])(t,n,r,o,a,ReactPropTypesSecret_1))return null;return new i("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")})},shape:function(e){return o(function(t,n,r,o,a){var u=t[n],s=c(u);if("object"!==s)return new i("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var p=e[l];if(p){var f=p(u,l,r,o,a+"."+l,ReactPropTypesSecret_1);if(f)return f}}return null})}};return i.prototype=Error.prototype,g.checkPropTypes=checkPropTypes_1,g.PropTypes=g,g},index=createCommonjsModule(function(e){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=factoryWithTypeCheckers(function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&null!==e&&e.$$typeof===t},!0)}),hasOwnProperty=Object.prototype.hasOwnProperty,Context=function(){function e(t){classCallCheck(this,e),this.listeners=[],this.props=getPropsLessChildren(t)}return createClass(e,[{key:"publish",value:function(e){var t=getPropsLessChildren(e);isEqual(this.props,t)||(this.listeners.forEach(function(e){return e(t)}),this.props=t)}},{key:"subscribe",value:function(e){return this.listeners.push(e),{remove:this.unsubscribe.bind(this,e)}}},{key:"unsubscribe",value:function(e){this.listeners=this.listeners.filter(function(t){return t!==e})}}]),e}(),Grid=function(e){function t(e){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.grid=new Context(e),n.handleLayoutChanged=n.handleLayoutChanged.bind(n),n}return inherits(t,e),createClass(t,[{key:"componentWillReceiveProps",value:function(e){this.grid.publish(e)}},{key:"handleLayoutChanged",value:function(e){var t=this.props,n=t.breakpoints,r=t.columns,i=t.gutters,o=t.maxContainerWidths,a=t.onLayout,u=getBreakpoint(n,e.nativeEvent.layout.width);"function"==typeof a&&a(e),this.setState({isReady:!0}),this.grid.props.breakpoint!==u&&this.grid.publish({breakpoint:u,breakpoints:n,columns:r,gutter:i[u],gutters:i,maxContainerWidth:o[u],maxContainerWidths:o})}},{key:"getChildContext",value:function(){return{grid:this.grid}}},{key:"render",value:function(){var e=this.props,t=(e.breakpoints,e.children),n=(e.columns,e.gutters,e.maxContainerWidths,e.onLayout,objectWithoutProperties(e,["breakpoints","children","columns","gutters","maxContainerWidths","onLayout"]));return React.createElement(ReactNative.View,_extends({onLayout:this.handleLayoutChanged},n),this.state.isReady?t:null)}}]),t}(React.PureComponent);Grid.displayName="Grid",Grid.propTypes={breakpoints:index.object,children:index.node,columns:index.number,gutters:index.object,maxContainerWidths:index.object,onLayout:index.func,style:index.any},Grid.defaultProps={breakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200},children:null,columns:12,gutters:{xs:30,sm:30,md:30,lg:30,xl:30},maxContainerWidths:{sm:540,md:720,lg:960,xl:1140},onLayout:void 0,style:{flex:1}},Grid.childContextTypes={grid:index.object.isRequired};var Container=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:"getBaseStyle",value:function(){return{width:"100%"}}},{key:"getMaxWidthStyle",value:function(e,t){var n=e.maxContainerWidth;return void 0===n||t?[]:{alignSelf:"center",maxWidth:n}}},{key:"getGutterStyle",value:function(e){var t=e.gutter;return void 0===t?[]:{paddingHorizontal:t/2}}},{key:"render",value:function(){var e=this.props,t=e.fluid,n=e.style,r=e.grid,i=objectWithoutProperties(e,["fluid","style","grid"]),o=[].concat(this.getBaseStyle(),this.getGutterStyle(r),this.getMaxWidthStyle(r,t),n);return React.createElement(ReactNative.View,_extends({style:o},i))}}]),t}(React.PureComponent);Container.displayName="Container",Container.propTypes={grid:index.object.isRequired,fluid:index.bool,style:index.any},Container.defaultProps={fluid:void 0,style:[]};var container=withGrid(Container),Row=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:"getConfig",value:function(e){var t=this.props.grid,n=t.breakpoint;return getConfig(t.breakpoints,n,e)}},{key:"getBaseStyle",value:function(){return{flexDirection:"row",flexWrap:"wrap"}}},{key:"getGutterStyle",value:function(e){var t=e.gutter;return void 0===t?[]:{marginHorizontal:t/-2}}},{key:"getContentJustification",value:function(e){return void 0===e?[]:"string"==typeof e?{justifyContent:getFlex(e)}:this.getContentJustification(this.getConfig(e))}},{key:"getItemAlignment",value:function(e){return void 0===e?[]:"string"==typeof e?{alignItems:getFlex(e)}:this.getItemAlignment(this.getConfig(e))}},{key:"render",value:function(){var e=this.props,t=e.alignItems,n=e.justifyContent,r=e.style,i=e.grid,o=objectWithoutProperties(e,["alignItems","justifyContent","style","grid"]),a=[].concat(this.getBaseStyle(),this.getGutterStyle(i),this.getContentJustification(n),this.getItemAlignment(t),r);return React.createElement(ReactNative.View,_extends({style:a},o))}}]),t}(React.PureComponent);Row.displayName="Row",Row.propTypes={grid:index.object.isRequired,alignItems:index.oneOfType([index.string,index.object]),justifyContent:index.oneOfType([index.string,index.object]),style:index.any},Row.defaultProps={alignItems:void 0,justifyContent:void 0,style:[]};var row=withGrid(Row),Column=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:"getConfig",value:function(e){var t=this.props.grid,n=t.breakpoint;return getConfig(t.breakpoints,n,e)}},{key:"getBaseStyle",value:function(){return{flexDirection:"column",minHeight:1,position:"relative"}}},{key:"getDebugStyle",value:function(e){return e?{backgroundColor:"#eee",borderColor:"#bbb",borderWidth:1}:[]}},{key:"getSelfAlignment",value:function(e){return void 0===e?[]:"string"==typeof e?{alignSelf:getFlex(e)}:this.getSelfAlignment(this.getConfig(e))}},{key:"getGutterStyle",value:function(e){var t=e.gutter;return void 0===t?[]:{paddingHorizontal:t/2}}},{key:"getWidthStyle",value:function(e,t){if(!1!==t&&0!==t)return!0===t?{flexGrow:1}:void 0===t?{width:"100%"}:"string"==typeof t?{width:t}:"number"==typeof t?{width:100*t/e.columns+"%"}:this.getWidthStyle(e,this.getConfig(t))}},{key:"render",value:function(){var e=this.props,t=e.alignSelf,n=e.debug,r=e.style,i=e.span,o=e.grid,a=objectWithoutProperties(e,["alignSelf","debug","style","span","grid"]),u=this.getWidthStyle(o,i);if(void 0===u)return null;var s=[].concat(this.getBaseStyle(),this.getGutterStyle(o),this.getDebugStyle(n),this.getSelfAlignment(t),u,r);return React.createElement(ReactNative.View,_extends({style:s},a))}}]),t}(React.PureComponent);Column.displayName="Column",Column.propTypes={grid:index.object.isRequired,alignSelf:index.oneOfType([index.string,index.object]),debug:index.bool,span:index.oneOfType([index.bool,index.number,index.string,index.object]),style:index.any},Column.defaultProps={alignSelf:void 0,debug:void 0,span:void 0,style:[]};var column=withGrid(Column),NoGutters=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:"getChildContext",value:function(){var e=this.context.grid;e.gutter;return{grid:objectWithoutProperties(e,["gutter"])}}},{key:"render",value:function(){return this.props.children}}]),t}(React.PureComponent);NoGutters.displayName="NoGutters",NoGutters.propTypes={children:index.node},NoGutters.defaultProps={children:null},NoGutters.contextTypes={grid:index.object.isRequired},NoGutters.childContextTypes={grid:index.object.isRequired},exports.Grid=Grid,exports.Container=container,exports.Row=row,exports.Column=column,exports.NoGutters=NoGutters,exports.withGrid=withGrid;
