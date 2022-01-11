const postcssImport = require('postcss-import')
const nesting = require('tailwindcss/nesting')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')

module.exports = ({ env }) => {
  const config = {}
  const Production = env === 'production'

  const cssnanoOpts = {
    preset: ['default', { discardComments: { removeAll: true } }]
  }

  config.plugins = [
    postcssImport(),
    nesting(),
    tailwindcss(),
    autoprefixer(),
    Production && cssnano(cssnanoOpts)
  ]

  return config
}
