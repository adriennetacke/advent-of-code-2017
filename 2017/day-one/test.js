const assert = require('assert');
const captcha = require('./captcha-one');

describe('Day One Captcha', () => {
  it('should return 3 when input is 1122', () => {
    assert.equal(3, captcha("1122"));
  });
  it('should return 4 when input is 1111', () => {
    assert.equal(4, captcha("1111"));
  });
  it('should return 0 when input is 1234', () => {
    assert.equal(0, captcha("1234"));
  });
  it('should return 9 when input is 91212129', () => {
    assert.equal(9, captcha("91212129"));
  });
});
