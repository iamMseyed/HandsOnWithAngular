import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent {
  public bgStyle:string='';
  public textColor:string='';
  public padding:string='0';
  public fontSize:string='15'

  public styleObj:{
    'background-color':string,
    'color':string,
    'padding':string,
    'font-size':string
  } = {
    'background-color':this.bgStyle,
    'color':this.textColor,
    'padding':this.padding+'px',
    'font-size':this.fontSize+'px'
  }

  public applyAll(){
    this.styleObj={
      'background-color':this.bgStyle,
      'color':this.textColor,
      'padding':this.padding+'px',
      'font-size':this.fontSize+'px'
    }
  }
  public changeFont(){
    this.applyAll();
  }
  public changePadding(){
    this.applyAll();
  }

  public changeBG(){
   this.applyAll();
  }
  public changeTextColor(){
    this.applyAll();
  }
}