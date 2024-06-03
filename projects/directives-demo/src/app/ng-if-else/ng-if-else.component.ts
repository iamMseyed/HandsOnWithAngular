import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl:'./ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent {
  flag:boolean=false;

  public product:any={
    productId:'123ABC',
    productName:'Pixel',
    productModel:'8a',
    productPrice:'₹54000',
    productDescription:'Pixel devices are known for their great camera and smooth software experience!',
    Image:'assets/pixel8a.jpg',
   }
   btnTxt:string='Show Description';
   toogle:boolean=false;
   public toggleButton(){
    this.btnTxt= (this.btnTxt=='Show Description')?'Show Preview':'Show Description'
    this.toogle= (this.toogle==true)?false:true;
   }
}