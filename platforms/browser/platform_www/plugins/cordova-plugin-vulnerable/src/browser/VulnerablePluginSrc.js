cordova.define("cordova-plugin-vulnerable.VulnerablePluginSrc", function(require, exports, module) { function runplugin(success, error, name) {
    success("Hello " + name + "!");
}

module.exports = {
    runplugin: runplugin,
};

require("cordova/exec/proxy").add("VulnerablePlugin",module.exports);
});
