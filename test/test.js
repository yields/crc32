
describe('crc32', function(){

  var assert = require('assert')
    , crc32 = require('crc32');

  it('should compute crc for the given `str`', function(){
    assert(222957957 == crc32('hello world'));
  })

})