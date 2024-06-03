import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IfDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //for ng things
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap:[IfDemoComponent]
})
export class AppModule { }
