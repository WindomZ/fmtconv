/**
 * Created by WindomZ on 17-4-12.
 */
'use strict'

const yaml = require('js-yaml')

/**
 * Transcode JSON to YAML string.
 *
 * @param {string|Object} doc
 * @return {string}
 * @api public
 */
function stringJSON2YAML (doc) {
  if (!doc || (typeof doc !== 'string' && typeof doc !== 'object')) {
    throw new TypeError('Argument must be a string or object, and not empty: ' + doc)
  }

  let obj = doc
  if (typeof doc === 'string') {
    obj = JSON.parse(doc)
  }

  return yaml.safeDump(obj)
}

/**
 * Transcode YAML to JSON string.
 *
 * @param {string} doc
 * @return {string}
 * @api public
 */
function stringYAML2JSON (doc) {
  if (!doc || typeof doc !== 'string') {
    throw new TypeError('Argument must be a string or object, and not empty: ' + doc)
  }

  let obj = yaml.safeLoad(doc)

  if (!obj || typeof obj !== 'object') {
    throw new TypeError('Argument must be in yaml format: ' + doc)
  }

  return JSON.stringify(obj)
}

module.exports.stringJSON2YAML = stringJSON2YAML
module.exports.stringYAML2JSON = stringYAML2JSON
