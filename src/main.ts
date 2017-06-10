declare var angular: any;

import "angular";
import { AppModule } from "./app/app.module";

angular.bootstrap(document.body, [(<any>AppModule).name]);
