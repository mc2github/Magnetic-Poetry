/**
 * @fileoverview defines the poem model.
 */

/**
 * Type definition for Poem model.
 */
var Word = require('word');
var Poem = {
  words: [ Word ],
};

if (typeof module === 'undefined') {
  // TODO - not needed yet.
}
else {
  module.exports = Poem;
}

