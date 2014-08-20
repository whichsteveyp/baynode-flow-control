for (var i = 0; i < 1024 * 1024; i++) {
  process.nextTick(function () { Math.sqrt(i) } )
}