(function(global) {
    "use strict";

    global.module = global.module || {};
    global.module.exports = global.module.exports || {};
    global.require = require;

    function require(moduleName) {
        return global.module.exports[moduleName];
    }
}(window));