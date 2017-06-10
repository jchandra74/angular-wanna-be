(function() {
    "use strict";

    var AppComponent = require("AppComponent");
    var DataService = require("DataService");

    var moduleName = "ajs.hello.world";
    var AppModule = angular.module(moduleName, []);
    AppModule.moduleName = moduleName;

    AppModule
        .component(AppComponent.selector, AppComponent)
        .service(DataService.serviceName, DataService);

    module.exports.AppModule = AppModule;
}());