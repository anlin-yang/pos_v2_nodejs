var Promotion = require('../../../main/model/promotion.js');

describe("Promotion", function() {
  describe("constructor", function() {
    it("should accept type, barcodes as parameters", function() {
      var thePromotion = new Promotion('BUY_TWO_GET_ONE_FREE', ['ITEM000000','ITEM000001','ITEM000005']);
      expect(thePromotion.type).toBe('BUY_TWO_GET_ONE_FREE');
      expect(thePromotion.barcodes[0]).toBe('ITEM000000');
      expect(thePromotion.barcodes[1]).toBe('ITEM000001');
      expect(thePromotion.barcodes[2]).toBe('ITEM000005');
    });
  });
});
