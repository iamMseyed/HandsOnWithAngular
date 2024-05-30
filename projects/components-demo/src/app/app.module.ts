import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {/* EmployeeComponent,*/ StudentComponent } from './components/allComponents.components';
import { OutsideComponent } from './components/outsideComponent.components';


@NgModule({
  declarations: [  
  //register components here
    AppComponent, //default
    OutsideComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap:[StudentComponent,OutsideComponent] //bootstrap to initilize the component
})
export class AppModule { }
