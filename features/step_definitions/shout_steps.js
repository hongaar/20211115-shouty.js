const assert = require('assert')
const { Before, Given, When, Then } = require('@cucumber/cucumber')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

const ARBITARY_MESSAGE = 'Hello, world'
let shouty

Before(function() {
  shouty = new Shouty()
})

When('{word} shouts', function (name) {
  shouty.shout(name, ARBITARY_MESSAGE)
})

Then('Lucy should not hear Oscar', function () {
  assert(!shouty.getShoutsHeardBy("Lucy").has("Oscar"))
  // alternatively assert(!("Oscar" in shouty.getShoutsHeardBy("Lucy")))
})

Then('Lucy should hear Sean', function () {
  assert.strictEqual(shouty.getShoutsHeardBy('Lucy').size, 1)
})

Then('Lucy should hear nothing', function () {
  assert.strictEqual(shouty.getShoutsHeardBy('Lucy').size, 0)
})

Then('Lucy should hear {int} shouts from Sean', function (expectedNumberOfShouts) {
  let shoutsHeard = shouty.getShoutsHeardBy("Lucy");
  let shoutsByShouter = shoutsHeard.get("Sean")
  assert.strictEqual(shoutsByShouter.length, expectedNumberOfShouts)
})