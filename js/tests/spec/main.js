var main = require("../../src/test");

describe('Hello world', function() {
  it('says hello', function() {
    expect(main.helloWorld()).toEqual('Hello world!');
  });
});

describe('Add test', function() {
  it('2 + 3 = 5', function() {
    let x = 2;
    let y = 3;
    let expected = 5;
    let actual;

    actual = main.add(x, y);

    expect(expected).toEqual(actual);

  });
  
  it('8 + 48 = 56', function() {
    let x = 8;
    let y = 48;
    let expected = 56;
    let actual;

    actual = main.add(x, y);

    expect(expected).toEqual(actual);

  });
});

