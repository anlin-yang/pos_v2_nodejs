// var Pos = require('../../../main/model/pos.js');
// var Cart = require('../../../main/model/cart.js');
//
// describe("pos", function() {
//
//   var theCart = new Cart();
//   theCart.addItem('ITEM000000', 2);
//   theCart.addItem('ITEM000001', 2);
//
//   var dateDigitToString = function(num) {
//     return num < 10 ? '0' + num : num;
//   };
//   var currentDate = new Date(),
//       year = dateDigitToString(currentDate.getFullYear()),
//       month = dateDigitToString(currentDate.getMonth() + 1),
//       date = dateDigitToString(currentDate.getDate()),
//       hour = dateDigitToString(currentDate.getHours()),
//       minute = dateDigitToString(currentDate.getMinutes()),
//       second = dateDigitToString(currentDate.getSeconds()),
//       formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
//
//     var expectText =
//       '***<没钱赚商店>收据***\n' +
//       '打印时间：' + formattedDateString + '\n' +
//       '----------------------\n' +
//       '名称：可口可乐，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
//       '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
//       '----------------------\n' +
//       '挥泪赠送商品：\n' +
//       '----------------------\n' +
//       '总计：12.00(元)\n' +
//       '节省：0(元)\n' +
//       '**********************';
//
//
//
//
//   describe("printBills", function() {
//     it("should print correct info", function() {
//       var thePos = new Pos();
//       //spyOn(console, 'log');
//       //thePos.printBills(theCart);
//       //expect(console.log).toHaveBeenCalledWith(expectText);
//       //expect(thePos.printBills(theCart)).toEqual(expectText);
//     });
//   });
// });
