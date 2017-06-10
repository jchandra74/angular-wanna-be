declare var angular: any;

import { NgModule } from "./../angular-shim"
import { AppComponent } from "./app.component";
import { DataService } from "./data.service";

@NgModule({
    declarations: [AppComponent],
    providers:[DataService]
})
export class AppModule { }