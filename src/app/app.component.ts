import { IComponentOptionsExt } from "./../angular-shim";
import { ILogService } from "angular";

import { DataService } from "./data.service";

class AppComponentController {
    name: string;
    greetTarget: string;
    
    static $inject: string[] = ["$log", DataService.serviceName];
    constructor(
        private $log: ILogService,
        private dataService: DataService
    ) { this.name = "AppComponent"; }
 
    $onInit(): void {
        this.$log.info(`[${this.name}] onInit`);
        this.greetTarget = "World";
    }

    loadData(): void {
        this.$log.info(`[${this.name}] loadData`);
        this.dataService
            .getData()
            .then(this.bindData.bind(this))
            .catch(this.handleError.bind(this));
    }

    bindData(newGreetTarget): void {
        this.$log.info(`[${this.name}] bindData`, newGreetTarget);
        this.greetTarget = newGreetTarget;
    }

    handleError(err): void {
        this.$log.info(`[${this.name}] handleError`, err);
        alert(err);
    }
}

export let AppComponent: IComponentOptionsExt = {
    selector: "appRoot",
    controller: AppComponentController,
    template: `
        <div>
            Hello, {{$ctrl.greetTarget}}!<br>
            <button type="button" ng-click="$ctrl.loadData()">Load Data...</button>
        </div>`
};
