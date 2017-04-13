/**
 * Created by Windom on 2017/4/12.
 */
const test = require('ava')

const fmtconv = require('../lib/fmtconv')

function fmtconvPromise (input, output) {
  return new Promise(resolve => {
    fmtconv(input, output)
    resolve()
  })
}

test('fmtconv fail', async (t) => {
  await fmtconvPromise()
    .then(() => {
      t.fail('should be catch error')
    })
    .catch(() => t.pass())

  await fmtconvPromise('./examples/yaml-1.yaml')
    .then(() => {
      t.fail('should be catch error')
    })
    .catch(() => t.pass())

  await fmtconvPromise('./examples/yaml-1.xxx',
    './examples/yaml-1.test.fmtconv.yaml')
    .then(() => {
      t.fail('should be catch error')
    })
    .catch(() => t.pass())

  await fmtconvPromise('./examples/yaml-1.yaml',
    './examples/yaml-1.test.fmtconv.xxx')
    .then(() => {
      t.fail('should be catch error')
    })
    .catch(() => t.pass())
})

test('fmtconv example-1 pass', async (t) => {
  await fmtconvPromise('./examples/yaml-1.yaml',
    './examples/yaml-1.fmtconv.yaml', true)
    .then(() => {
      t.pass()
    })
    .catch(err => t.fail(err))

  await fmtconvPromise('./examples/yaml-1.yaml',
    './examples/yaml-1.fmtconv.yaml')
    .then(() => {
      t.pass()
    })
    .catch(err => t.fail(err))

  await fmtconvPromise('./examples/yaml-1.yaml',
    './examples/yaml-1.fmtconv.json', true)
    .then(() => {
      t.pass()
    })
    .catch(err => t.fail(err))

  await fmtconvPromise('./examples/yaml-1.yaml',
    './examples/yaml-1.fmtconv.json')
    .then(() => {
      t.pass()
    })
    .catch(err => t.fail(err))

  await fmtconvPromise('./examples/json-1.json',
    './examples/json-1.fmtconv.json', true)
    .then(() => {
      t.pass()
    })
    .catch(err => t.fail(err))

  await fmtconvPromise('./examples/json-1.json',
    './examples/json-1.fmtconv.json')
    .then(() => {
      t.pass()
    })
    .catch(err => t.fail(err))

  await fmtconvPromise('./examples/json-1.json',
    './examples/json-1.fmtconv.yaml', true)
    .then(() => {
      t.pass()
    })
    .catch(err => t.fail(err))

  await fmtconvPromise('./examples/json-1.json',
    './examples/json-1.fmtconv.yaml')
    .then(() => {
      t.pass()
    })
    .catch(err => t.fail(err))
})
