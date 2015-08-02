var Scaner = require('../../../main/model/scaner.js');

describe("Scaner", function() {
  describe("scan", function() {

    var theScaner = new Scaner();

    it("should accept inputs as parameters", function() {
      expect(theScaner.scan('ITEM000003-2')).toEqual({
        barcode: 'ITEM000003',
        count: 2
      });
    });

    it("should accept inputs as parameters", function() {
      expect(theScaner.scan('ITEM000003')).toEqual({
        barcode: 'ITEM000003',
        count: 1
      });
    });
  });
});
