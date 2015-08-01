var Cart = require('../../../main/model/cart.js');

describe("Cart", function() {
  var theCart = new Cart();
  var theCartItems = theCart.cartItems;

  describe("constructor", function() {
    it("should not return undifined", function() {
      //expect(theCart.cartItems).toBeDefined();
      expect(theCart.cartItems instanceof Array).toBe(true);
    });
  });

  describe("addItem", function() {
    it("should add two cartItems", function() {
      theCart.addItem('ITEM000000', 2);
      theCart.addItem('ITEM000001', 2);

      expect(theCartItems.length).toBe(2);
      theCart.addItem('ITEM000001', 2);

      expect(theCartItems.length).toBe(2);
    });
  });

  describe("getSubtotalPrice", function() {
    it("should return correct subtotalPrice", function() {
      expect(theCart.getSubtotalPrice()).toBe(15);
    });
  });

  describe("getSaving", function() {
    it("should return correct saving", function() {
      expect(theCart.getSaving()).toBe(3);
    });
  });

});
