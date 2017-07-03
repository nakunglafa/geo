import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivityService } from './shared/activity.service';
import { FormsModule } from "@angular/forms";
import { appRoute } from "./route";
import { HttpModule } from "@angular/http";
import { MapService } from "./shared/map.service";

import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpModule
  ],
  providers: [
    ActivityService,
    MapService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
