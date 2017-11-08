cordova.define("cordova-plugin-vulnerable.VulnerablePlugin", function(require, exports, module) { var exec = require('cordova/exec');

module.exports = {
	runplugin: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "VulnerablePlugin", "runplugin", [name]);
    }
};
});
