import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  public msg:string ='';
  public stuDet:any[]= [];
  public sendClick(){
    this.msg = 'Hello from parent!';
    this.stuDet=[
      {name:'Name1',enrolment: 'abc123'},
      {name:'Name2',enrolment: 'abc124'},
      {name:'Name3',enrolment: 'abc125'},
      {name:'Name4',enrolment: 'abc126'},
      {name:'Name5',enrolment: 'abc127'},
      {name:'Name6',enrolment: 'abc128'}
    ]
  }
} 