import { Inject, Injectable } from "./../angular-shim";
import { ILogService, IQService, IPromise } from "angular";

@Inject("$log", "$q")
@Injectable()
export class DataService {

    private name: string;

    constructor(
        private $log: ILogService, 
        private $q: IQService
    ) { this.name = (<any>this.constructor).name; }

    getData(): IPromise<string> {
        this.$log.info(`[${this.name}] getData`);
        return this.$q.resolve("Stranger");
    }
}