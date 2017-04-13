/**
 * Created by Windom on 2017/4/12.
 */
const test = require('ava')

const {
  stringJSON2YAML,
  stringYAML2JSON,
  stringJSON2JSON,
  stringYAML2YAML
} = require('../lib/transcode')

test('transcode.stringJSON2YAML fail', t => {
  try {
    stringJSON2YAML(null)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringJSON2YAML(1)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringJSON2YAML('')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringJSON2YAML('xxx')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
})

test('transcode.stringJSON2YAML pass', t => {
  try {
    let result = stringJSON2YAML('{"a":1, "b":2}', true)
    t.is(result, 'a: 1\nb: 2\n')
    t.pass()
  } catch (e) {
    t.fail(e)
  }

  try {
    let result = stringJSON2YAML('{"a":1, "b":2}')
    t.is(result, 'a: 1\nb: 2\n')
    t.pass()
  } catch (e) {
    t.fail(e)
  }

  try {
    let result = stringJSON2YAML({'a': 1, 'b': 2})
    t.is(result, 'a: 1\nb: 2\n')
    t.pass()
  } catch (e) {
    t.fail(e)
  }
})

test('transcode.stringYAML2JSON fail', t => {
  try {
    stringYAML2JSON(null)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringYAML2JSON(1)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringYAML2JSON('')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringYAML2JSON('xxx:xxx:xxx')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
})

test('transcode.stringYAML2JSON pass', t => {
  try {
    let result = stringYAML2JSON('a: 1\nb: 2', true)
    t.is(result, '{"a":1,"b":2}')
    t.pass()
  } catch (e) {
    t.fail(e)
  }

  try {
    let result = stringYAML2JSON('a: 1\nb: 2')
    t.is(result, `{
  "a": 1,
  "b": 2
}`)
    t.pass()
  } catch (e) {
    t.fail(e)
  }
})

test('transcode.stringJSON2JSON fail', t => {
  try {
    stringJSON2JSON(null)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringJSON2JSON(1)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringJSON2JSON('')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringJSON2JSON('xxx')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
})

test('transcode.stringJSON2JSON pass', t => {
  try {
    let result = stringJSON2JSON('{"a":1, "b":2}', true)
    t.is(result, '{"a":1,"b":2}')
    t.pass()
  } catch (e) {
    t.fail(e)
  }

  try {
    let result = stringJSON2JSON('{"a":1, "b":2}')
    t.is(result, `{
  "a": 1,
  "b": 2
}`)
    t.pass()
  } catch (e) {
    t.fail(e)
  }

  try {
    let result = stringJSON2JSON({'a': 1, 'b': 2})
    t.is(result, `{
  "a": 1,
  "b": 2
}`)
    t.pass()
  } catch (e) {
    t.fail(e)
  }
})

test('transcode.stringYAML2YAML fail', t => {
  try {
    stringYAML2YAML(null)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringYAML2YAML(1)
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringYAML2YAML('')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }

  try {
    stringYAML2YAML('xxx:xxx:xxx')
    t.fail('should be catch error')
  } catch (e) {
    t.pass()
  }
})

test('transcode.stringYAML2YAML pass', t => {
  try {
    let result = stringYAML2YAML('a: 1\nb: 2', true)
    t.is(result, 'a: 1\nb: 2\n')
    t.pass()
  } catch (e) {
    t.fail(e)
  }
  try {
    let result = stringYAML2YAML('a: 1\nb: 2')
    t.is(result, 'a: 1\nb: 2\n')
    t.pass()
  } catch (e) {
    t.fail(e)
  }
})
