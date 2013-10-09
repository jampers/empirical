var empirical = require('../')
	, test = require('tape');

test('empirical exists', function (assert) {
	assert.ok(!!empirical);
	assert.is('object', typeof empirical);
	assert.end();
});

