(function() {
    "use strict";

    require("angular");

    var AppModule = require("./app/app.module");

    angular.bootstrap(document.body, [AppModule.moduleName]);
}());
