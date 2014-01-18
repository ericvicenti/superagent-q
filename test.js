var request = require('./index.js');
var assert = require('assert');

request.get("http://example.com")
.end()
.then(function(res) {
	assert(res.status === 200);
}).done();
