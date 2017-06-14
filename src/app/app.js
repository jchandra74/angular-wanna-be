// app.module
(function() {
    "use strict";

    angular.module("ajs.hello.world", []);
}());

// data.service
(function() {
    "use strict";

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

    angular
        .module("ajs.hello.world")
        .service("DataService", DataService);
}());

// app.component
(function() {
    "use strict";

    AppComponentController.$inject = ["$log", "DataService"];
    function AppComponentController($log, dataService) {
        this.$log = $log;
        this.dataService = dataService;

        this.$onInit = $onInit;
        this.loadData = loadData;

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
        controller: AppComponentController,
        template: [
            "<div>",
            "    Hello, {{$ctrl.greetTarget}}!<br>",
            "    <button type=\"button\" ng-click=\"$ctrl.loadData()\">Load Data...</button>",
            "</div>"
        ].join("")
    };

    angular
        .module("ajs.hello.world")
        .component("appRoot", AppComponent);
}());

// main: bootstrapper
(function() {
    "use strict";

    angular.bootstrap(document.body, ["ajs.hello.world"]);
}());
