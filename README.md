# Usage

SuperAgent's documentation has an example like this:

	 request
	   .post('/api/pet')
	   .send({ name: 'Manny', species: 'cat' })
	   .set('X-API-Key', 'foobar')
	   .set('Accept', 'application/json')
	   .end(function(res){
	     if (res.ok) {
	       alert('yay got ' + JSON.stringify(res.body));
	     } else {
	       alert('Oh no! error ' + res.text);
	     }
	   });

Use SuperAgent-Q like this:

var request = require('superagent-q');

	 request
	   .post('/api/pet')
	   .send({ name: 'Manny', species: 'cat' })
	   .set('X-API-Key', 'foobar')
	   .set('Accept', 'application/json')
	   .end().then(function(res){
	     if (res.ok) {
	       alert('yay got ' + JSON.stringify(res.body));
	     } else {
	       alert('Oh no! error ' + res.text);
	     }
	   }).done();

Yep, it's that simple. But if you work with promises a lot, you know this gives you much-needed flexibility, e.g., to chain without dealing with pyramid code, and to return promises so the calling function can chain the callback.

# About

Forked from [https://github.com/djechlin/AgentQ](), because this is what I expected it to do in the first place