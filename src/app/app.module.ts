import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlanComponent } from "./plan/plan.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";

@NgModule({
  declarations: [AppComponent, PlanComponent, SearchBarComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
