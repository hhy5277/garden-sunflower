import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http"; /** here */

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlanComponent } from "./plan/plan.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { HelloWorldComponent } from "./first-app/hello-world/hello-world.component";

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    SearchBarComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule /** here */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
