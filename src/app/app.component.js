"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_service_1 = require("./data.service");
var AppComponentController = (function () {
    function AppComponentController($log, dataService) {
        this.$log = $log;
        this.dataService = dataService;
    }
    AppComponentController.prototype.$onInit = function () {
        this.$log.info("[AppComponent] onInit");
        this.greetTarget = "World";
    };
    AppComponentController.prototype.loadData = function () {
        this.$log.info("[AppComponent] loadData");
        this.dataService
            .getData()
            .then(this.bindData.bind(this))
            .catch(this.handleError.bind(this));
    };
    AppComponentController.prototype.bindData = function (newGreetTarget) {
        this.$log.info("[AppComponent] bindData", newGreetTarget);
        this.greetTarget = newGreetTarget;
    };
    AppComponentController.prototype.handleError = function (err) {
        this.$log.info("[AppComponent] handleError", err);
        alert(err);
    };
    return AppComponentController;
}());
AppComponentController.$inject = ["$log", data_service_1.DataService.serviceName];
exports.AppComponent = {
    selector: "appRoot",
    controller: AppComponentController,
    template: [
        "<div>",
        "    Hello, {{$ctrl.greetTarget}}!<br>",
        "    <button type=\"button\" ng-click=\"$ctrl.loadData()\">Load Data...</button>",
        "</div>"
    ].join("")
};
//# sourceMappingURL=app.component.js.map