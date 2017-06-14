export class DataService {
    name: string;

    static serviceName = "DataService";
    static $inject = ["$log", "$q"];
    constructor(
        private $log, 
        private $q) { this.name = DataService.serviceName; }

    getData() {
        this.$log.info(`[${this.name}] getData`);
        return this.$q.resolve("Stranger");
    }
}