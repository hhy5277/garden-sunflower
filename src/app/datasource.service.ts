import { Injectable, OnInit } from "@angular/core";
import { Plan } from "./interface/plan";
import { CommonService } from "./common.service";

@Injectable({
  providedIn: "root"
})
export class DatasourceService implements OnInit {
  /**
   * 计划集
   */
  public plans: Plan[];

  /**
   * 搜索结果
   */
  public searchResult: Plan[];

  constructor(private _common: CommonService) {}

  ngOnInit() {
    this.plans = [
      { checked: true, content: "读书一小时", date: "2019-01-01" },
      { checked: false, content: "打游戏", date: "2019-01-01" },
      { checked: false, content: "画画", date: "2019-01-01" },
      { checked: false, content: "健身", date: "2019-01-01" },
      { checked: false, content: "洗澡", date: "2019-01-01" },
      { checked: false, content: "看球赛", date: "2019-01-01" },
      { checked: false, content: "刷抖音", date: "2019-01-01" },
      { checked: false, content: "与困细胞作战", date: "2019-01-01" },
      { checked: false, content: "失眠", date: "2019-01-01" },
      { checked: false, content: "失眠", date: "2019-01-01" },
      { checked: false, content: "失眠", date: "2019-01-01" },
      { checked: false, content: "失眠", date: "2019-01-01" },
      { checked: false, content: "失眠", date: "2019-01-01" },
      { checked: false, content: "失眠", date: "2019-01-01" },
      { checked: false, content: "失眠", date: "2019-01-01" }
    ];

    this.searchResult = this._common.deepCopy<Plan[]>(this.plans);
  }
}
