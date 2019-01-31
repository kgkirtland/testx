var m = require('../src/test');
var {RoadsApi} = require('../src/test');

describe('Add test', function() {
  it('2 + 3 = 5', function() {
    let x = 2;
    let y = 3;
    let expected = 5;
    let actual;

    actual = m.add(x, y);

    expect(expected).toEqual(actual);

  });
  
  it('8 + 48 = 56', function() {
    let x = 8;
    let y = 48;
    let expected = 56;
    let actual;

    actual = m.add(x, y);

    expect(expected).toEqual(actual);

  });
});

const resultData = "testxxx";

describe('Api Test', function() {
  it('get msg', function(done) {   
    const api = new m.RoadsApi();

    spyOn(api, "getMsg").and.returnValue(Promise.resolve(resultData));

    m.helloWorld(api).then(result => {      
      let expected = resultData;
      let actual = result;      
      expect(expected).toEqual(actual);
      done();
    });    
  });
});