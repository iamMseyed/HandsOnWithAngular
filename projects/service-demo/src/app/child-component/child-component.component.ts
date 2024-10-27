import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  // from parent to child
    @Input() public msgFromParent:string='';
    @Input() public msgFromParent1:any=[];

  // from child to parent

  @Output() public msgToParent:EventEmitter<string> = new EventEmitter<string>();
  // here msgToParent is event 

  public msgToParentClick(){
    this.msgToParent.emit('Hello from child');
  }
}