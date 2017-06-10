(function() {
    "use strict";

    var AppComponent = require("./app.component");
    var DataService = require("./data.service");

    var moduleName = "ajs.hello.world";
    var AppModule = angular.module(moduleName, []);
    AppModule.moduleName = moduleName;

    AppModule
        .component(AppComponent.selector, AppComponent)
        .service(DataService.serviceName, DataService);

    module.exports = AppModule;
}());