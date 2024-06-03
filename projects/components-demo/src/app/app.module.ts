import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/studentComponent.components';
import { EmployeeComponent } from './components/employeeComponent.components';
import { ISPComponent } from './components/outsideComponents/isp.component';
import { NetflixHeaderComponent } from './components/netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './components/netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './components/netflix/netflix-register/netflix-register.component';
import { NetflixIndexComponent } from './components/netflix/netflix-index/netflix-index.component';
import { MovieComponent } from './components/movies/movies.component';
import { EvenBindingComponent } from './components/even-binding/even-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StudentGradeComponent } from './components/student-grade/student-grade.component';
import { FormDataComponent } from './components/form-data/form-data.component';


@NgModule({
  declarations: [  
  //register components here
    AppComponent, //default
    StudentComponent,
    EmployeeComponent,
    ISPComponent,
    NetflixMainComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    MovieComponent,
    EvenBindingComponent,
    TwoWayBindingComponent,
    StudentGradeComponent,
    FormDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // bootstrap:[StudentComponent,EmployeeComponent,ISPComponent,MovieComponent,EvenBindingComponent,TwoWayBindingComponent] //bootstrap to initilize the component
  bootstrap:[StudentGradeComponent]
})
export class AppModule { }
