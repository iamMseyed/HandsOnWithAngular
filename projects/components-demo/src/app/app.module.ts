import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/studentComponent.components';
import { EmployeeComponent } from './components/employeeComponent.components';
import { ISPComponent } from './components/outsideComponents/isp.component';


@NgModule({
  declarations: [  
  //register components here
    AppComponent, //default
    StudentComponent,
    EmployeeComponent,
    ISPComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap:[StudentComponent,EmployeeComponent,ISPComponent] //bootstrap to initilize the component
})
export class AppModule { }
