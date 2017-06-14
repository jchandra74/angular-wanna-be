import { DataService } from "./data.service";

class AppComponentController {
    name: string;
    greetTarget: string;
    
    static $inject = ["$log", DataService.serviceName];
    constructor(
        private $log,
        private dataService
    ) { this.name = "AppComponent" }
 
    $onInit() {
        this.$log.info(`[${this.name}] onInit`);
        this.greetTarget = "World";
    }

    loadData() {
        this.$log.info(`[${this.name}] loadData`);
        this.dataService
            .getData()
            .then(this.bindData.bind(this))
            .catch(this.handleError.bind(this));
    }

    bindData(newGreetTarget) {
        this.$log.info(`[${this.name}] bindData`, newGreetTarget);
        this.greetTarget = newGreetTarget;
    }

    handleError(err) {
        this.$log.info(`[${this.name}] handleError`, err);
        alert(err);
    }
}

export let AppComponent = {
    selector: "appRoot",
    controller: AppComponentController,
    template: `
        <div>
            Hello, {{$ctrl.greetTarget}}!<br>
            <button type="button" ng-click="$ctrl.loadData()">Load Data...</button>
        </div>`
};
