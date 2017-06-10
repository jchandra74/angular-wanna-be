declare var angular: any;

import { IModuleExt } from "./../angular-shim"
import { AppComponent } from "./app.component";
import { DataService } from "./data.service";

var moduleName = "ajs.hello.world";
var AppModule: IModuleExt = angular.module(moduleName, []);
AppModule.moduleName = moduleName;

AppModule
    .component(AppComponent.selector, AppComponent)
    .service(DataService.serviceName, DataService);

export { AppModule };