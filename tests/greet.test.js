import assert from 'node:assert/strict'
import { test } from 'node:test'
import { greet, greetAll } from '../src/greet.js'

test('greets one person', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!')
})

test('capitalizes the first letter of the name', () => {
  // Documented in src/greet.js: the greeting capitalizes the first letter.
  assert.equal(greet('ada'), 'Hello, Ada!')
})

test('greets several people', () => {
  assert.equal(greetAll(['Ada', 'Grace']), 'Hello, Ada! Hello, Grace!')
})
