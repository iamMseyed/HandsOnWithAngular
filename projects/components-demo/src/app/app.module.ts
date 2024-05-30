import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/studentComponent.components';
import { EmployeeComponent } from './components/EmployeeComponent.components';


@NgModule({
  declarations: [  
  //register components here
    AppComponent, //default
    StudentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap:[StudentComponent,EmployeeComponent] //bootstrap to initilize the component
})
export class AppModule { }
