import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-even-binding',
  templateUrl: './even-binding.component.html',
  styleUrls: ['./even-binding.component.css']
})
export class EvenBindingComponent {
  eID:Number=10;
  eName:String="hello";
  eSal:Number=20;

  eID1:string='';
  eName1:string='';
  eSal1:string='';
  empty1:string='';
  empty2:string='';
  empty3:string='';
  public dataPresent:boolean=false;
  public updateData(i1:any, i2:any, i3:any){    
    if (i1){ 
      this.eID1=i1;
    }
    if (i2) {
      this.eName1=i2;
    }
    if(i3){
      this.eSal1=i3
    }
    this.dataPresent=true
    this.empty1=''
    this.empty2=''
    this.empty3=''
  }

  public btnId: string = '';
  public btnName: string = '';
  public btnClass: string = '';
  public btn_X_Pos: number = 0;
  public ctrlBtn: boolean = false;

  public eventBindingButtonClicked=false;

  public putData:{
    'buttonId':string,
    'buttonName':string,
    'buttonclass':string,
    'button_x_positon':number,
    'ctrl_key_pressed_when_button_clicked':boolean
  }={
    'buttonId':this.btnId,
    'buttonName':this.btnName,
    'buttonclass':this.btnClass,
    'button_x_positon':this.btn_X_Pos,
    'ctrl_key_pressed_when_button_clicked':this.ctrlBtn
  };


  public eventBinding(e: any) {
    this.eventBindingButtonClicked=(this.eventBindingButtonClicked==false)?true:false;

    this.btnId = e.target.id;          
    this.btnName = e.target.name;      
    this.btnClass = e.target.className; 
    this.btn_X_Pos = e.clientX;        
    this.ctrlBtn = e.ctrlKey;          
  }

  // public eventBinding(e:any){
  //   ( 
  //     `
  //     Button Id: ${e.target.id},
  //     Button Name: ${e.target.name},
  //     Classes : ${e.target.className},
  //     X-Position: ${e.clientX},
  //     ctrl key: ${e.ctrlKey}
  //     `
  //   )
  // }
}