var Scaner = require('../../../main/model/scaner.js');

describe("Scaner", function() {
  describe("scan", function() {
    it("should accept inputs as parameters", function() {
      var theScaner = new Scaner();
      expect(theScaner.scan('ITEM000003-2').barcode).toBe('ITEM000003');
      expect(theScaner.scan('ITEM000003-2').count).toBe('2');

    });
  });
});
