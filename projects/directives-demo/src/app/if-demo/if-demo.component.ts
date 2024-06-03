import { Component } from '@angular/core';

@Component({
  selector: 'app-if-demo',
  templateUrl: './if-demo.component.html',
  styleUrls: ['./if-demo.component.css']
})
export class IfDemoComponent {
  public product:any={
    Name:'Pixel 8a',
    Price:50000,
    Image:'assets/pixel8a.jpg',
  }
  public preview:boolean=false;
}
