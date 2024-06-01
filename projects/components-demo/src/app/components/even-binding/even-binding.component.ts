import { Component } from '@angular/core';

@Component({
  selector: 'app-even-binding',
  templateUrl: './even-binding.component.html',
  styleUrls: ['./even-binding.component.css']
})
export class EvenBindingComponent {
  eID:Number=101;
  eName:String="any Name";
  eSal:Number=12345;
  changeData(){
    this.eID=104;
    this.eName="Another Name";
    this.eSal=4321;
  }
}
