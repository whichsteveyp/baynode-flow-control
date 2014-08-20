for (var i = 0; i < 1024 * 1024; i++) {
  setImmediate(function () { Math.sqrt(i) })
}