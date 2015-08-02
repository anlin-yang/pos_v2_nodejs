var Cart = require('../../../main/model/cart.js');

describe("Cart", function() {
  var theCart;
  
  beforeEach(function() {
    theCart = new Cart();
    theCart.addItem('ITEM000000', 2);
    theCart.addItem('ITEM000001', 2);
  });

  describe("constructor", function() {
    it("cartItems`s type should return Array.", function() {
      expect(theCart.cartItems instanceof Array).toBe(true);
    });
  });

  describe("addItem", function() {
    it("should add two cartItems", function() {
      expect(theCart.cartItems.length).toBe(2);
    });
  });

  describe("addItem", function() {
    it("cartItems length should not increase.", function() {
      theCart.addItem('ITEM000001', 2);
      expect(theCart.cartItems.length).toBe(2);
    });
  });

  describe("getSubtotalPrice", function() {
    it("should return correct subtotalPrice", function() {
      theCart.addItem('ITEM000001', 2);
      expect(theCart.getSubtotalPrice()).toBe(15);
    });
  });

  describe("getSaving", function() {
    it("should return correct saving", function() {
      theCart.addItem('ITEM000001', 2);
      expect(theCart.getSaving()).toBe(3);
    });
  });

});
