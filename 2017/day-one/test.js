const assert = require('assert');
const captcha = require('./captcha-one');
const captchaTwo = require('./captcha-two');

describe('Day One Captcha', () => {
  it('should return 3 when input is 1122', () => {
    assert.equal(3, captcha('1122'));
  });
  it('should return 4 when input is 1111', () => {
    assert.equal(4, captcha('1111'));
  });
  it('should return 0 when input is 1234', () => {
    assert.equal(0, captcha('1234'));
  });
  it('should return 9 when input is 91212129', () => {
    assert.equal(9, captcha('91212129'));
  });
});

describe('Day Two Captcha', () => {
  it('should return 6 when input is 1212', () => {
    assert.equal(6, captchaTwo('1212'));
  });
  it('should return 0 when input is 1221', () => {
    assert.equal(0, captchaTwo('1221'));
  });
  it('should return 4 when input is 123425', () => {
    assert.equal(4, captchaTwo('123425'));
  });
  it('should return 12 when input is 123123', () => {
    assert.equal(12, captchaTwo('123123'));
  });
  it('should return 4 when input is 12131415', () => {
    assert.equal(4, captchaTwo('12131415'));
  });
});
