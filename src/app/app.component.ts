import { DataService } from "./data.service";

class AppComponentController {
    
    greetTarget: string;
    
    static $inject = ["$log", DataService.serviceName];
    constructor(
        private $log,
        private dataService
    ) { }
 
    $onInit() {
        this.$log.info("[AppComponent] onInit");
        this.greetTarget = "World";
    }

    loadData() {
        this.$log.info("[AppComponent] loadData");
        this.dataService
            .getData()
            .then(this.bindData.bind(this))
            .catch(this.handleError.bind(this));
    }

    bindData(newGreetTarget) {
        this.$log.info("[AppComponent] bindData", newGreetTarget);
        this.greetTarget = newGreetTarget;
    }

    handleError(err) {
        this.$log.info("[AppComponent] handleError", err);
        alert(err);
    }
}

export let AppComponent = {
    selector: "appRoot",
    controller: AppComponentController,
    template: [
        "<div>",
        "    Hello, {{$ctrl.greetTarget}}!<br>",
        "    <button type=\"button\" ng-click=\"$ctrl.loadData()\">Load Data...</button>",
        "</div>"
    ].join("")
};
