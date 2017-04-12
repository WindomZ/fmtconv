/**
 * Created by WindomZ on 17-4-12.
 */
'use strict'

const path = require('path')

const co = require('co')

const fmtconv = require('../fmtconv')

function * handle (param) {
  if (!param.input) {
    throw new TypeError('Argument must be a file path: ' + param.input)
  }

  let ext = path.extname(param.input).toLowerCase()
  if (ext !== '.yaml' && ext !== '.json') {
    throw new TypeError('File extension must be ".yaml" or ".json", instead of "' + ext + '"')
  }

  if (!param.output) {
    param.output = path.join(path.dirname(param.input),
      path.basename(param.input, ext) + '.fmtconv' + ext)
  } else {
    let ext = path.extname(param.output).toLowerCase()
    if (ext !== '.yaml' && ext !== '.json') {
      throw new TypeError('File extension must be ".yaml" or ".json", instead of "' + ext + '"')
    }
  }

  fmtconv(param.input, param.output)
}

module.exports = param => co.wrap(handle)(param)