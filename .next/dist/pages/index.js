'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('/Users/admin/workspace/editor/node_modules/next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n'], ['\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 4em;\n  background: papayawhip;\n'], ['\n  padding: 4em;\n  background: papayawhip;\n']);

var _react = require('/Users/admin/workspace/editor/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
var Title = _styledComponents2.default.h1(_templateObject);

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
var Wrapper = _styledComponents2.default.section(_templateObject2);

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      Wrapper,
      null,
      _react2.default.createElement(
        Title,
        null,
        'Hello, world!'
      ),
      _react2.default.createElement(
        'button',
        { onClick: function onClick(e) {
            return alert('hi!');
          } },
        'Click Me'
      )
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRpdGxlIiwiaDEiLCJXcmFwcGVyIiwic2VjdGlvbiIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7QUFFQTtBQUNBO0FBQ0EsSUFBTUEsUUFBUSwyQkFBT0MsRUFBZixpQkFBTjs7QUFNQTtBQUNBO0FBQ0EsSUFBTUMsVUFBVSwyQkFBT0MsT0FBakIsa0JBQU47O2tCQUtlO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFDLGFBQUQ7QUFBQTtBQUNFO0FBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQVEsU0FBVTtBQUFBLG1CQUFLQyxNQUFNLEtBQU4sQ0FBTDtBQUFBLFdBQWxCO0FBQUE7QUFBQTtBQUZGO0FBREYsR0FEYTtBQUFBLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkbWluL3dvcmtzcGFjZS9lZGl0b3IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tICdwcmVhY3QnXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8vIENyZWF0ZSBhIDxUaXRsZT4gcmVhY3QgY29tcG9uZW50IHRoYXQgcmVuZGVycyBhbiA8aDE+IHdoaWNoIGlzXG4vLyBjZW50ZXJlZCwgcGFsZXZpb2xldHJlZCBhbmQgc2l6ZWQgYXQgMS41ZW1cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuYDtcblxuLy8gQ3JlYXRlIGEgPFdyYXBwZXI+IHJlYWN0IGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgYSA8c2VjdGlvbj4gd2l0aFxuLy8gc29tZSBwYWRkaW5nIGFuZCBhIHBhcGF5YXdoaXAgYmFja2dyb3VuZFxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICBwYWRkaW5nOiA0ZW07XG4gIGJhY2tncm91bmQ6IHBhcGF5YXdoaXA7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPFdyYXBwZXI+XG4gICAgICA8VGl0bGU+SGVsbG8sIHdvcmxkITwvVGl0bGU+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBlID0+IGFsZXJ0KCdoaSEnKSB9PkNsaWNrIE1lPC9idXR0b24+XG4gICAgPC9XcmFwcGVyPlxuICA8L2Rpdj5cbikiXX0=