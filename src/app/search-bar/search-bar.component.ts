import { Component, OnInit } from "@angular/core";
import { SearchBarService } from "./search-bar.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  public content: string = "";

  constructor(private _searchBar: SearchBarService) {}

  ngOnInit() {}

  public search(): void {
    this._searchBar.search(this.content);
  }
}
