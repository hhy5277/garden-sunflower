import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor() {}

  /**
   * 深复制
   */
  public deepCopy<T>(obj: any): T {
    let jsonString = JSON.stringify(obj);
    let tmp = JSON.parse(jsonString);
    return tmp as T;
  }
}
