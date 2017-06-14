import { ILogService, IQService, IPromise } from "angular";

export class DataService {
    name: string;

    static serviceName: string = "DataService";
    static $inject: string[] = ["$log", "$q"];
    constructor(
        private $log: ILogService, 
        private $q: IQService
    ) { this.name = DataService.serviceName; }

    getData(): IPromise<string> {
        this.$log.info(`[${this.name}] getData`);
        return this.$q.resolve("Stranger");
    }
}