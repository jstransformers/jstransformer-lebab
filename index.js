'use strict'

var lebab = require('lebab')

exports.name = 'lebab'
exports.inputFormats = ['lebab', 'lebabbar']
exports.outputFormat = 'html'

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
  var result = lebab.transform(str, options)
  result.warnings.forEach(function (warning) {
    throw new Error("line " + warning.line + ': ' + warning.msg)
  })
  return result.code
}
