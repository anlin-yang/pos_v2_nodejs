var Scaner = require('../../../main/model/scaner.js');

describe("Scaner", function() {
  describe("scan", function() {
    it("should accept inputs as parameters", function() {
      var theScaner = new Scaner();

      expect(theScaner.scan('ITEM000003-2')).toEqual({
        barcode: 'ITEM000003',
        count: 2
      });

      expect(theScaner.scan('ITEM000003')).toEqual({
        barcode: 'ITEM000003',
        count: 1
      });

    });
  });
});
