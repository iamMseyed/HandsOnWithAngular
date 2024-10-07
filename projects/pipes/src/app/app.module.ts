import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CustomPipeTitlePipe } from './custom-pipe-title.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesDemoComponent,
    CustomPipeTitlePipe,
    CustomPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ // -> class name here
    // default: AppComponent,
   // PipesDemoComponent,
    CustomPipeComponent,
    // CustomPipeTitlePipe -- this data will be in customPipeComponent via customPipe
  ]
})
export class AppModule { }
