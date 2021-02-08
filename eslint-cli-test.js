import { CLIEngine } from 'eslint'
import Debug from 'debug' // eslint-disable-line import/no-extraneous-dependencies

import eslintconfig from './index'

const debug = Debug('test')

export const cli = new CLIEngine({
  baseConfig: eslintconfig,
  useEslintrc: false,
})

const calcConfig = cli.getConfigForFile('./index')

debug({ calcConfig }) // eslint-disable-line no-console

