import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {
  public name:string = 'AnY naME';
  public price:number = 123.4567;
  public anyDate:Date = new Date("2025 feb 28"); 
  public anyDate2:Date = new Date("2025 feb 31"); //march 3 
  // you can mention any date but within range. Say data ranges from 1-31

  public numberArray=[1,20.4,0.3,4.6,5.5];

  public percent:number = 0.5;
  public jsObject = {
    name: "John Doe",
    occupation: "Developer",
    city: "San Francisco"
  };

  public jsArray=[1,'hello',123.3];

  public products:{Name:string,item:number,shippedTo:string}[]=[
    {Name:'Pixel 9a',item:1, shippedTo:'Kashmir'},
    {Name:'Pixel 8a',item:4,  shippedTo:'Chennai'},
    {Name:'Pixel 7a', item:2, shippedTo:'Bengaluru'}
  ];

  public productStatus:any={  //initilizing object for previous array type
    'Kashmir':'Delivery in 5 days',
    'Chennai':'Delivery in 1 Day',
    'Bengaluru':'Same day Delivery',
    'Other':'Dispatching after 2-3 working days'
  }

  public count = 1;
}