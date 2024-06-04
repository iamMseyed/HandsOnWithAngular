import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  str1:string="Case1";

  public product={
    "id":1,
    "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":'109.95$',
    "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday clothing",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{
      "rate":3.9,
      "count":120
    }};
    template:string='none';
    ChangeTemplate(anyName:any){
      this.template= anyName.target.name;
      // should be anyName.target.(whatEver known property used eg name or value) but name here
      console.log(this.template);
    }
}