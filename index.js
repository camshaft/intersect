/**
 * Find intersection of arrays
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Array}
 */

module.exports = function (a, b) {
  var result = [];

  for (var i = 0, al = a.length; i < al; i++) {
    for (var z = 0, bl = b.length; z < bl; z++) {
      var v = a[i];
      if (v !== b[z]) continue;
      result.push(v);
      break;
    }
  }

  return result;
}
