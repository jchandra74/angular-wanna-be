"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataService = (function () {
    function DataService($log, $q) {
        this.$log = $log;
        this.$q = $q;
    }
    DataService.prototype.getData = function () {
        this.$log.info("[DataService] getData");
        return this.$q.resolve("Stranger");
    };
    return DataService;
}());
DataService.serviceName = "DataService";
DataService.$inject = ["$log", "$q"];
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map