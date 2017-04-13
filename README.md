# fmtconv
[![Greenkeeper badge](https://badges.greenkeeper.io/WindomZ/fmtconv.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/WindomZ/fmtconv.svg?branch=master)](https://travis-ci.org/WindomZ/fmtconv)
[![License](https://img.shields.io/badge/license-Apache-green.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![Dependency](https://david-dm.org/WindomZ/fmtconv.svg)](https://david-dm.org/WindomZ/fmtconv)
[![Coverage Status](https://coveralls.io/repos/github/WindomZ/fmtconv/badge.svg?branch=master)](https://coveralls.io/github/WindomZ/fmtconv?branch=master)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)

Convert between **JSON** and **YAML** format files.

[![fmtconv](https://img.shields.io/npm/v/fmtconv.svg)](https://www.npmjs.com/package/fmtconv)
![status](https://img.shields.io/badge/status-beta-green.svg)

## Features

- [x] Support **JSON**/**YAML** format files.
- [x] *Convert* with **JSON**/**YAML** format files.
- [x] *Transcode* with **JSON**/**YAML** format strings.

## Installation

### CLI executable

```bash
npm install -g fmtconv
```

### API install

```bash
npm install --save fmtconv
```

## CLI Usage

```bash
$ fmtconv -h

  Usage: fmtconv [-h] [-v] [-c] [-o file] <-i file | file>

  Convert between JSON and YAML format files.

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -o, --output <file>  output a JSON/YAML file
    -i, --input <file>   input a JSON/YAML file
    -c, --compact        compact JSON/YAML format string
    --debug              debug mode, such as print error tracks
```

## API Usage

Here we cover the most 'useful' methods.

```javascript
const fmtconv = require('fmtconv')
```

### fmtconv (string, string)

**Convert between JSON and YAML format files.**
The first string sets an input file path, 
the second string sets an output file path.

### .stringJSON2YAML (string)

**Transcode JSON to YAML string.**

### .stringYAML2JSON (string)

**Transcode YAML to JSON string.**

## License

The [Apache License 2.0](https://github.com/WindomZ/fmtconv/blob/master/LICENSE)
