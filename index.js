'use strict'

const lebab = require('lebab')

exports.name = 'lebab'
exports.inputFormats = ['lebab', 'lebabbar']
exports.outputFormat = 'html'

const defaultTransforms = [
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
  const result = lebab.transform(str, options)
  result.warnings.forEach(warning => {
    throw new Error('line ' + warning.line + ': ' + warning.msg)
  })
  return result.code
}
