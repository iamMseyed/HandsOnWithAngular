import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { FormsModule } from '@angular/forms';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NasaAPIUsageComponent } from './nasa-api-usage/nasa-api-usage.component';
import { CommonModule } from '@angular/common';
import { NgForPropertiesComponent } from './ng-for-properties/ng-for-properties.component';
import { NgForTrackByComponent } from './ng-for-track-by/ng-for-track-by.component';
import { ClassDemoComponent } from './class-demo/class-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDemoComponent,
    NgIfElseComponent,
    NgSwitchComponent,
    NgForComponent,
    NasaAPIUsageComponent,
    NgForPropertiesComponent,
    NgForTrackByComponent,
    ClassDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //for ng things
  ],
  providers: [],
  // bootstrap: [AppComponent,IfDemoComponent,NgIfElseComponent,NgSwitchComponent,NgForComponent,NasaAPIUsageComponent,NgForPropertiesComponent,NgForTrackByComponent]
  bootstrap:[ClassDemoComponent]
})
export class AppModule { }
