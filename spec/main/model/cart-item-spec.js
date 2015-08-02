var CartItem = require('../../../main/model/cart-item.js');
var Item = require('../../../main/model/item.js');
var Promotion = require('../../../main/model/promotion.js');

describe("CartItem", function() {
  var theCartItem;
  beforeEach(function() {
    var itemArr = [
      new Item('ITEM000000', '可口可乐', '瓶', 3.00),
      new Item('ITEM000001', '雪碧', '瓶', 3.00),
      new Item('ITEM000002', '苹果', '斤', 5.50),
      new Item('ITEM000003', '荔枝', '斤', 15.00),
      new Item('ITEM000004', '电池', '个', 2.00),
      new Item('ITEM000005', '方便面', '袋', 4.50)
    ];

    var promotionsArr = [
      new Promotion('BUY_TWO_GET_ONE_FREE', [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ])
    ];

    CartItem.setAllItems(itemArr);
    CartItem.setPromotions(promotionsArr);
    theCartItem = new CartItem('ITEM000000', 1);
  });


  describe("constructor", function() {
    it("should accept barcode, count as parameters", function() {
      expect(theCartItem.barcode).toBe('ITEM000000');
      expect(theCartItem.count).toBe(1);
    });
  });

  describe("getName", function() {
    it("should return correct name", function() {
      expect(theCartItem.getName()).toBe('可口可乐');
    });
  });

  describe("getUnit", function() {
    it("should return correct unit", function() {
      expect(theCartItem.getUnit()).toBe('瓶');
    });
  });

  describe("getPrice", function() {
    it("should return correct price", function() {
      expect(theCartItem.getPrice()).toBe(3.00);
    });
  });

  describe("getPromotionCount", function() {
    it("should return correct promotionCount", function() {
      expect(theCartItem.getPromotionCount()).toBe(0);
    });
  });

  describe("getSubtotal", function() {
    it("should return correct subtotal", function() {
      expect(theCartItem.getSubtotal()).toBe(3.00);
    });
  });

  describe("getTotalPrice", function() {
    it("should return correct totalPrice", function() {
      expect(theCartItem.getTotalPrice()).toBe(3.00);
    });
  });

});
