import { Injectable } from "@angular/core";
import { DatasourceService } from "../datasource.service";

@Injectable({
  providedIn: "root"
})
export class SearchBarService {
  constructor(private _datasource: DatasourceService) {}

  public search(queryString: string): void {
    console.log("xxxxxxxxxxxxx");
    this._datasource.searchResult = this._datasource.plans.filter(p =>
      p.content.includes(queryString)
    );
  }
}
