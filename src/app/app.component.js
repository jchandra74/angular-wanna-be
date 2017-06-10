(function() {
    "use strict";

    var DataService = require("./data.service");

    AppComponentController.$inject = ["$log", DataService.serviceName];
    function AppComponentController($log, dataService) {
        this.$log = $log;
        this.dataService = dataService;

        this.$onInit = $onInit.bind(this);
        this.loadData = loadData.bind(this);

        function $onInit() {
            this.$log.info("[AppComponent] onInit");
            this.greetTarget = "World";
        }

        function loadData() {
            this.$log.info("[AppComponent] loadData");
            this.dataService
                .getData()
                .then(bindData.bind(this))
                .catch(handleError.bind(this));
        }

        function bindData(newGreetTarget) {
            this.$log.info("[AppComponent] bindData", newGreetTarget);
            this.greetTarget = newGreetTarget;
        }

        function handleError(err) {
            this.$log.info("[AppComponent] handleError", err);
            alert(err);
        }
    }

    var AppComponent = {
        selector: "appRoot",
        controller: AppComponentController,
        template: [
            "<div>",
            "    Hello, {{$ctrl.greetTarget}}!<br>",
            "    <button type=\"button\" ng-click=\"$ctrl.loadData()\">Load Data...</button>",
            "</div>"
        ].join("")
    };

    module.exports = AppComponent;
}());