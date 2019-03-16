import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HelloWorldService {
  /**
   * hello world 列表
   */
  public helloWorlds: string[] = [];
  readonly url = "assets/datasource.json";

  constructor(private _http: HttpClient) {}

  /**
   * 初始化数据
   */
  public init(): void {
    this._http.get(this.url).subscribe((data: { helloWorlds: string[] }) => {
      this.helloWorlds = data.helloWorlds;
    });
  }
}
