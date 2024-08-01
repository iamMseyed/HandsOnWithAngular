import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseEventComponent } from './mouse-event/mouse-event.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent
    MouseEventComponent //add the component to show in the browser
  ]
})
export class AppModule { }
