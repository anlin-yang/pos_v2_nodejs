var printReceipt = require('../../main/main.js');
var CartItem = require('../../main/model/cart-item.js');
var Item = require('../../main/model/item.js');
var Promotion = require('../../main/model/promotion.js');

describe("Main", function() {
  describe("printReceipt", function() {
    var allItems, allPromotions, inputs, dateDigitToString;

    beforeEach(function() {
      allItems = [
        new Item('ITEM000000', '可口可乐', '瓶', 3.00),
        new Item('ITEM000001', '雪碧', '瓶', 3.00),
        new Item('ITEM000002', '苹果', '斤', 5.50),
        new Item('ITEM000003', '荔枝', '斤', 15.00),
        new Item('ITEM000004', '电池', '个', 2.00),
        new Item('ITEM000005', '方便面', '袋', 4.50)
      ];
      allPromotions = [
        new Promotion('BUY_TWO_GET_ONE_FREE', [
          'ITEM000000',
          'ITEM000001',
          'ITEM000005'
        ])
      ];
      inputs = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005'
      ];

      CartItem.setAllItems(allItems);
      CartItem.setPromotions(allPromotions);
      dateDigitToString = function(num) {
        return num < 10 ? '0' + num : num;
      };
    });

    it('should print correct text', function() {

      spyOn(console, 'log');

      printReceipt(inputs);

      var currentDate = new Date(),
        year = dateDigitToString(currentDate.getFullYear()),
        month = dateDigitToString(currentDate.getMonth() + 1),
        date = dateDigitToString(currentDate.getDate()),
        hour = dateDigitToString(currentDate.getHours()),
        minute = dateDigitToString(currentDate.getMinutes()),
        second = dateDigitToString(currentDate.getSeconds()),
        formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

      var expectText =
        '***<没钱赚商店>收据***\n' +
        '打印时间：' + formattedDateString + '\n' +
        '----------------------\n' +
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
        '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
        '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        '名称：雪碧，数量：1瓶\n' +
        '名称：方便面，数量：1袋\n' +
        '----------------------\n' +
        '总计：51.00(元)\n' +
        '节省：7.50(元)\n' +
        '**********************';

      expect(console.log).toHaveBeenCalledWith(expectText);
    });
  });
});
