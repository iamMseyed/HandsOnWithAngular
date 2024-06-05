import { Component } from '@angular/core';

@Component({
  selector: 'app-nasa-api-usage',
  templateUrl: './nasa-api-usage.component.html',
  styleUrls: ['./nasa-api-usage.component.css']
})
export class NasaAPIUsageComponent {
  public marsObject:any=[]; //create an object to store image fetched from nasa api
NasaAPIUsageComponent: any;
  GetMarsPhotos(){
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    .then(response=>response.json())
    .then(data=>{
      this.marsObject=data
    });
  }
}