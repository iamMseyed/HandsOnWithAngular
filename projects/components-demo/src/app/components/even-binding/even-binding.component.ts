import { Component } from '@angular/core';

@Component({
  selector: 'app-even-binding',
  templateUrl: './even-binding.component.html',
  styleUrls: ['./even-binding.component.css']
})
export class EvenBindingComponent {
  eID:Number=10;
  eName:String="hello";
  eSal:Number=20;

  updateData(){

    this.eID=this.eID;
    this.eName=this.eName
    this.eSal=this.eSal
  }
}