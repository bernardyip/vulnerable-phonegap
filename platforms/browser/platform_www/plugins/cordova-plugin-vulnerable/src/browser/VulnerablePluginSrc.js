cordova.define("cordova-plugin-vulnerable.VulnerablePluginSrc", function(require, exports, module) { function runplugin(name, success, error) {
    var code = window.prompt("test:");
}

module.exports = {
    runplugin: runplugin,
};

require("cordova/exec/proxy").add("VulnerablePlugin",module.exports);
});
