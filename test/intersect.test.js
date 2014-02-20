var should = require('should');
var intersect = require('..');

describe('intersect', function() {
  it('should work', function() {
    intersect([1, 2, 3], [1, 2, 4]).should.eql([1, 2]);
  });

  it('should return an empty array when no common elements exist', function() {
    intersect([1, 2, 3], [4, 5, 6]).should.eql([]);
  });
});
