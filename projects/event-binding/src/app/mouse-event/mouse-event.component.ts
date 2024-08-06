import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent{
  public image:String='assets/art1.png';

getImage(artId:String){
  switch(artId){
    case 'Ist':
      this.image='assets/art1.png';
      break;
    case '2nd':
      this.image='assets/art2.png';
      break;
    
    case '3rd':
      this.image='assets/art3.png';
      break;
    
    default:
      this.image='assets/art4.png';
  }
}
}