import { Component, OnInit, Input } from "@angular/core";
import { Plan } from "../interface/plan";

@Component({
  selector: "app-plan",
  templateUrl: "./plan.component.html",
  styleUrls: ["./plan.component.scss"]
})
export class PlanComponent implements OnInit {
  @Input() plan: Plan;

  constructor() {}

  ngOnInit() {}

  public select(): void {
    this.plan.checked = !this.plan.checked;
  }
}
