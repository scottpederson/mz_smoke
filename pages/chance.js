// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// Use Chance here.
var first = chance.first();
var last = chance.last();
var paragraph = chance.paragraph();
var twoParagraphs = chance.paragraph({sentences: 2});
