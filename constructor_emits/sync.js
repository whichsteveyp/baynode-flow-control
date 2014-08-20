// deps
var EventEmitter = require('events').EventEmitter;

// this person
var Constructor = function() {
  // parse some options, then init
  var self = this;
  console.log('parsing some options for sync');

  self.init();
};

Constructor.prototype.__proto__ = EventEmitter.prototype;

Constructor.prototype.init = function() {
  // without the process.nextTick
  // these events would be emitted immediately
  // with no listeners. they would be lost.

  console.log('firing some init events for sync');

  this.emit('data', 'cruel,');
  this.emit('data', 'cruel world');
  this.emit('end');
};

module.exports = Constructor;
