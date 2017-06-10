"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var data_service_1 = require("./data.service");
var moduleName = "ajs.hello.world";
var AppModule = angular.module(moduleName, []);
exports.AppModule = AppModule;
AppModule.moduleName = moduleName;
AppModule
    .component(app_component_1.AppComponent.selector, app_component_1.AppComponent)
    .service(data_service_1.DataService.serviceName, data_service_1.DataService);
//# sourceMappingURL=app.module.js.map