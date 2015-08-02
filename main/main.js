var Scaner = require('./model/scaner.js');
var Cart = require('./model/cart.js');
var Pos = require('./model/pos.js');

function printReceipt(inputs) {
  var scaner = new Scaner();
  var cart = new Cart();
  var pos = new Pos();
  inputs.forEach(function(val) {
    var item = scaner.scan(val);
    cart.addItem(item.barcode, item.count);
  });
  pos.printBills(cart);
}

module.exports = printReceipt;
