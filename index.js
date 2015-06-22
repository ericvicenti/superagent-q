var Q = require('q');
var superagent = require('superagent');


function wrap(item) {
  return function() {
    var agent = item.apply(superagent, arguments);

    var agentEnd = agent.end;

    agent.end = function() {
      var doEnd = Q.defer();
      agentEnd.call(agent, function(err, res) {
        if (err) return doEnd.reject(err);
        doEnd.resolve(res);
      });
      return doEnd.promise;
    }

    return agent;
  }
}

var agentQ = wrap(superagent);

agentQ.get = wrap(superagent.get);
agentQ.put = wrap(superagent.put);
agentQ.post = wrap(superagent.post);
agentQ.del = wrap(superagent.del);
agentQ.head = wrap(superagent.head);

module.exports = agentQ;
