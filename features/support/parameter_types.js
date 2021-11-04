const { defineParameterType } = require('@cucumber/cucumber')
const Coordinate = require('../../lib/coordinate')

defineParameterType({
  regexp: /(\d+), (\d+)/,
  transformer: (x, y) => new Coordinate(parseInt(x), parseInt(y)),
  name: 'coordinate'
})
