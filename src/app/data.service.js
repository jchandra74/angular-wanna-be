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

    module.exports = DataService;
}());
