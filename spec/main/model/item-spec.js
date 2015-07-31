var Item = require('../../../main/model/item.js');

describe("Item", function() {
  describe("constructor", function() {
    it("should accept barcode, name, unit, price as parameters", function() {
      var theItem = new Item('0000001', '雪碧', '瓶', 3.00);
      expect(theItem.barcode).toBe('0000001');
      expect(theItem.name).toBe('雪碧');
      expect(theItem.unit).toBe('瓶');
      expect(theItem.price).toBe(3.00);
    });
  });
});
