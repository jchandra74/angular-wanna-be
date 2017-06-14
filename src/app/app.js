(function() {
    "use strict";

    angular.module("ajs.hello.world", [])
        .service("DataService", ["$log", "$q",
            function ($log, $q) {
                this.$log = $log;
                this.$q = $q;

                return {
                    getData: function getData() {
                        this.$log.info("[DataService] getData");
                        return this.$q.resolve("Stranger");
                    }.bind(this)
                };
            }])
        .component("appRoot", {
            controller: ["$log", "DataService",
                function ($log, dataService) {
                    this.$log = $log;
                    this.dataService = dataService;

                    this.$onInit = function $onInit() {
                        this.$log.info("[AppComponent] onInit");
                        this.greetTarget = "World";
                    };

                    this.loadData = function loadData() {
                        this.$log.info("[AppComponent] loadData");
                        this.dataService
                            .getData()
                            .then(function bindData(newGreetTarget) {
                                this.$log.info("[AppComponent] bindData", newGreetTarget);
                                this.greetTarget = newGreetTarget;
                            }.bind(this))
                            .catch(function handleError(err) {
                                this.$log.info("[AppComponent] handleError", err);
                                alert(err);
                            }.bind(this));
                    };
                }],
            template: [
                "<div>",
                "    Hello, {{$ctrl.greetTarget}}!<br>",
                "    <button type=\"button\" ng-click=\"$ctrl.loadData()\">Load Data...</button>",
                "</div>"
            ].join("")
        });

    angular.bootstrap(document.body, ["ajs.hello.world"]);
}());
