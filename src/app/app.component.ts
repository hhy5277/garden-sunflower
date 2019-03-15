import { Component } from "@angular/core";
import { DatasourceService } from "./datasource.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public datasource: DatasourceService) {
    this.datasource.ngOnInit();
  }
}
