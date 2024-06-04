import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { FormsModule } from '@angular/forms';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDemoComponent,
    NgIfElseComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //for ng things
  ],
  providers: [],
  // bootstrap: [AppComponent,IfDemoComponent,NgIfElseComponent]
  bootstrap:[NgSwitchComponent]
})
export class AppModule { }
