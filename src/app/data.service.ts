import { ILogService, IQService, IPromise } from "angular";

export class DataService {
    static serviceName: string = "DataService";
    static $inject: string[] = ["$log", "$q"];
    constructor(
        private $log: ILogService, 
        private $q: IQService
    ) { }

    getData(): IPromise<string> {
        this.$log.info("[DataService] getData");
        return this.$q.resolve("Stranger");
    }
}