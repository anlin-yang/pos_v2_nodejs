var CartItem = require('../../../main/model/cart-item.js');

describe("CartItem", function() {
  describe("constructor", function() {
    it("should accept barcode, count as parameters", function() {
      var theCartItem = new CartItem('ITEM000000', 1);
      expect(theCartItem.barcode).toBe('ITEM000000');
      expect(theCartItem.count).toBe(1);

    });
  });
});
