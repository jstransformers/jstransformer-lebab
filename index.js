'use strict';

var lebab = require('lebab')

exports.name = 'lebab';
exports.inputFormats = ['lebab', 'lebabbar'];
exports.outputFormat = 'html';

var defaultTransforms = [
  'arrow',
  'for-of',
  'arg-spread',
  'obj-method',
  'obj-shorthand',
  'no-strict',
  'commonjs'
]

exports.render = function (str, options) {
  options = options || defaultTransforms
  var { code, warnings } = lebab.transform(str, options)
  warnings.forEach(function (warning) {
    throw new Error("line " + warning.line + ': ' + warning.msg)
  })
  return code
};
