// deps
var EventEmitter = require('events').EventEmitter;

// this person
var Constructor = function() {
  // parse some options, then init
  var self = this;
  console.log('parsing some options for async');

  process.nextTick(function() {
    self.init();
  });
};

Constructor.prototype.__proto__ = EventEmitter.prototype;

Constructor.prototype.init = function() {
  // without the process.nextTick
  // these events would be emitted immediately
  // with no listeners. they would be lost.

  console.log('firing some init events for async');

  this.emit('data', 'hello');
  this.emit('data', 'world');
  this.emit('end');
};

module.exports = Constructor;
