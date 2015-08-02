var DateTime = require('../../../main/model/datetime.js');

describe("DateTime", function() {
  describe("getFormattedDate", function() {
    var currentDate = {
      getFullYear: function() {
        return 1;
      },
      getMonth: function() {
        return 1;
      },
      getDate: function() {
        return 1;
      },
      getHours: function() {
        return 11;
      },
      getMinutes: function() {
        return 1;
      },
      getSeconds: function() {
        return 1;
      }
    };
    it("should return correct formatSting", function() {
      expect(DateTime.getFormattedDate(currentDate)).toEqual("01年02月01日 11:01:01");
    });
  });
});
