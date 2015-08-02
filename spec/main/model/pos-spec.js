var Pos = require('../../../main/model/pos.js');
var Cart = require('../../../main/model/cart.js');

describe("pos", function() {
  var thePos, dateDigitToString, theCart;

  beforeEach(function() {
    thePos = new Pos();
    theCart = new Cart();
    theCart.addItem('ITEM000000', 4);

    dateDigitToString = function(num) {
      return num < 10 ? '0' + num : num;
    };
  });

  it('should print correct text', function() {

    spyOn(console, 'log');

    thePos.printBills(theCart);

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
      '名称：可口可乐，数量：4瓶，单价：3.00(元)，小计：9.00(元)\n' +
      '----------------------\n' +
      '挥泪赠送商品：\n' +
      '名称：可口可乐，数量：1瓶\n' +
      '----------------------\n' +
      '总计：9.00(元)\n' +
      '节省：3.00(元)\n' +
      '**********************';

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});
