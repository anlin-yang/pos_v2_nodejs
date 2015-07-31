var Cart = require('../../../main/model/cart.js');

describe("Cart", function() {
  var theCart = new Cart();
  theCart.addItem('ITEM000000', 2);
  theCart.addItem('ITEM000001', 2);
  describe("constructor", function() {
    it("should not return undifined", function() {
      expect(theCart).toBeDefined();
    });
  });

  // describe("addItem", function() {
  //   it("should add Item to cartItems", function() {
  //     expect(theCart.addItem('ITEM000000', 2)).not.toThrow();
  //   });
  // });

  describe("getSubtotalPrice", function() {
    it("should return correct subtotalPrice", function() {
      expect(theCart.getSubtotalPrice()).toBe(12);
    });
  });

  describe("getSaving", function() {
    it("should return correct saving", function() {
      expect(theCart.getSaving()).toBe(0);
    });
  });

});
