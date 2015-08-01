function Scaner() {} 

Scaner.prototype.scan = function(inputs) {
  var barcode = inputs.split('-')[0];
  var count = inputs.split('-')[1] || 1;
  return {
    "barcode": barcode,
    "count": parseInt(count)
  };
};

module.exports = Scaner;
