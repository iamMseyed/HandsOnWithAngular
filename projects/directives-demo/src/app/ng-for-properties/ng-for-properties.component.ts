import { Component } from '@angular/core';
import { Product } from '../fakeStore_contract'; //from contract
@Component({
  selector: 'app-ng-for-properties',
  templateUrl: './ng-for-properties.component.html',
  styleUrls: ['./ng-for-properties.component.css']
})
export class NgForPropertiesComponent {
  public products:Product[]=[];
  
  constructor(){} //default constructor

  ngOnInit(){
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data=>{
      this.products=data;
    });
  } //executed when component is called (Life Cycle Hook)
}