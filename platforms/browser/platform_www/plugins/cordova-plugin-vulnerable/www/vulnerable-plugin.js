cordova.define("cordova-plugin-vulnerable.vulnerable-plugin", function(require, exports, module) { var exec = require('cordova/exec');

module.exports = {
	greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "vulnerable-plugin", "greet", [name]);
    }
};
});
