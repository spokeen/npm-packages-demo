'use strict';

const expressDemo = require('..');
const assert = require('assert').strict;

assert.strictEqual(expressDemo(), 'Hello from expressDemo');
console.info('expressDemo tests passed');
