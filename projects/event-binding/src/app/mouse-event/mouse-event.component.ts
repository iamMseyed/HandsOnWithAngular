import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent{
  public image:String='assets/art1.png';

getImage(artId:String){
  if(artId=='Ist')
    this.image='assets/art1.png';
  else if(artId=='2nd')
    this.image='assets/art2.png';
  else if(artId=='3rd')
    this.image='assets/art3.png'; 
  else
  this.image='assets/art4.png'; 
}
}