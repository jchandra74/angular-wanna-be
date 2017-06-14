import { Inject, Component } from "./../angular-shim";
import { ILogService } from "angular";
import { DataService } from "./data.service";

@Inject("$log", DataService)
@Component({
    selector: "app-root",
    template: `
        <div>
            Hello, {{$ctrl.greetTarget}}!<br>
            <button type="button" ng-click="$ctrl.loadData()">Load Data...</button>
        </div>`
})
export class AppComponent {
    
    private name: string;

    greetTarget: string;
    
    constructor(
        private $log: ILogService,
        private dataService: DataService
    ) { this.name = (<any>this.constructor).name; }
 
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