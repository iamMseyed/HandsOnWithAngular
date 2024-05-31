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
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap:[StudentComponent,EmployeeComponent,ISPComponent] //bootstrap to initilize the component
  bootstrap:[MovieComponent]
})
export class AppModule { }
