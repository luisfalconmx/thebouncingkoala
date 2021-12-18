const postcssImport = require('postcss-import')
const nesting = require('tailwindcss/nesting')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')
const config = {}

module.exports = ({ env }) => {
  const Production = env === 'production'

  config.plugins = [
    postcssImport(),
    nesting(),
    tailwindcss(),
    autoprefixer(),
    Production &&
      cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
  ]

  return config
}
