// cjs-fakeloader: commonjs like module exporter and importer
(function(global) {
    "use strict";

    global.module = global.module || {};
    global.module.exports = global.module.exports || {};
    global.require = require;

    function require(moduleName) {
        return global.module.exports[moduleName];
    }
}(window));

// data.service
(function() {
    "use strict";

    DataService.serviceName = "DataService";
    DataService.$inject = ["$log", "$q"];
    function DataService($log, $q) {
        this.$log = $log;
        this.$q = $q;

        return {
            getData: getData.bind(this)
        };

        function getData() {
            this.$log.info("[DataService] getData");
            return this.$q.resolve("Stranger");
        }
    }

    module.exports.DataService = DataService;
}());

// app.component
(function() {
    "use strict";

    var DataService = require("DataService");

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

    module.exports.AppComponent = AppComponent;
}());

// app.module
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

// main: bootstrapper
(function() {
    "use strict";

    var AppModule = require("AppModule");

    angular.bootstrap(document.body, [AppModule.moduleName]);
}());
