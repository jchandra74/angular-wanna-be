export class DataService {
    static serviceName = "DataService";
    static $inject = ["$log", "$q"];
    constructor(
        private $log, 
        private $q) { }

    getData() {
        this.$log.info("[DataService] getData");
        return this.$q.resolve("Stranger");
    }
}