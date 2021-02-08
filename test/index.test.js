/* globals test, expect */
import { cli } from '../eslint-cli-test'
import config from '../index'

test('config is valid', () => {
  expect(config.extends).toEqual(['airbnb', 'adequate', 'adequate-node'])
  expect(config.plugins).toEqual(['jsx-a11y'])
})
