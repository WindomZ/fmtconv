/**
 * Created by WindomZ on 17-4-12.
 */
'use strict'

const path = require('path')
const fs = require('fs')

const transcode = require('./transcode')

/**
 * Convert between JSON and YAML format files.
 *
 * @param {string} input
 * @param {string} output
 * @param {boolean} [compress]
 * @api public
 */
function fmtconv (input, output, compress = false) {
  if (!input) {
    throw new TypeError('"input" argument must be a file path')
  } else if (!output) {
    throw new TypeError('"output" argument must be a file path')
  }

  let extInput = path.extname(input).toLowerCase()
  if (extInput !== '.yaml' && extInput !== '.json') {
    throw new TypeError('"input" file extension must be ".yaml" or ".json"')
  }

  let extOutput = path.extname(output).toLowerCase()
  if (extOutput !== '.yaml' && extOutput !== '.json') {
    throw new TypeError('"output" file extension must be ".yaml" or ".json"')
  }

  fs.accessSync(input, fs.R_OK)

  let doc = '' + fs.readFileSync(input)

  switch (extInput) {
    case '.yaml':
      switch (extOutput) {
        case '.json':
          fs.writeFileSync(output, transcode.stringYAML2JSON(doc, compress), null)
          break
        default:
          fs.writeFileSync(output, transcode.stringYAML2YAML(doc, compress), null)
          break
      }
      break
    case '.json':
      switch (extOutput) {
        case '.yaml':
          fs.writeFileSync(output, transcode.stringJSON2YAML(doc, compress), null)
          break
        default:
          fs.writeFileSync(output, transcode.stringJSON2JSON(doc, compress), null)
          break
      }
      break
  }
}

module.exports.fmtconv = fmtconv
